
import './App.scss';
import Nav from './components/Nav';
import utils from './Util';
import { fetchCrypto, fetchForex } from './finantialmodeling';
import React from 'react';
import './css/poppins/poppins.css';
import Visitedsymbol from './components/Visitedsymbol';

import { connect } from 'react-redux';
import { saveState } from './reducers/localstorage';
const { convertRemToPixels } = utils;


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data1: [],
      onRequest: false,
    }

    this.handleUnload = this.handleUnload.bind(this);
  }

  fetchappCrypto() {
    
    const { addnewsymbol, fetchfinnhub } = this.props;
    fetchfinnhub({ "timestamp": + new Date() },"fetchCrypto")
    fetchCrypto().then(d => {
      
      d.forEach(e => {
        addnewsymbol({ ...e, timestamp: (+ new Date()), market: "Crypto" })
      })
      this.setState({ ...this.state, data1: d })
    });
  }

  fetchappForex() {
    const { addnewsymbol, fetchfinnhub } = this.props;
    fetchfinnhub({ "timestamp": + new Date() },"fetchForex")
    fetchForex().then(d => {
      d.forEach(e => {
        addnewsymbol({ ...e, timestamp: (+ new Date()), market: "Forex" })
      })
      this.setState({ ...this.state, data: d })
    });
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);

    const { finnhub, symbols } = this.props;
    const { onRequest } = this.state;

    if (!onRequest) {
      
      this.setState({ ...this.state, data: [], data1: [], onRequest: !onRequest })
 
      if (finnhub.hasOwnProperty("fetchCrypto")) {
        debugger;
        console.log((+new Date) - finnhub["fetchCrypto"]["timestamp"])
        if ((+new Date) - finnhub["fetchCrypto"]["timestamp"] > 160000) {
          this.fetchappCrypto();
        } else {
          this.setState({ ...this.state, data1: symbols.filter(e => e.market === "Crypto") })
        }
      } else { this.fetchappCrypto(); }

      if (finnhub.hasOwnProperty("fetchForex")) {
        console.log((+new Date) - finnhub["fetchForex"]["timestamp"])
        if ((+new Date) - finnhub["fetchForex"]["timestamp"] > 160000) {
          this.fetchappForex();
        } else {
          this.setState({ ...this.state, data: symbols.filter(e => e.market === "Forex"), data1: symbols.filter(e => e.market === "Crypto") })
        }
      } else { this.fetchappForex(); }

    }
  }

  handleUnload(e) {
    const { finnhub, symbols } = this.props;
    saveState(JSON.stringify({ finnhub, symbols }));
    
    e.preventDefault();
    return e.returnValue = 'Are you sure you want to close?';
  }

  render() {
    const { data, data1 } = this.state;
    const bodywidth = document.querySelector('body').getBoundingClientRect().width;
    let op_1_width = parseInt(bodywidth / convertRemToPixels(19));
    op_1_width = bodywidth / op_1_width;

    debugger;
    return (
      <div className="col relative">
        <Nav title="Armando" titleback="BackArmando" />

        <div className="corebox_8 mobilecorebox_16" />

        <div className="corebox_9 row items_center f_2 f600 pad_l24">Forex</div>

        <div className="row o_3 wrap">
          {(data.length === 0) ? 'Loading' : data.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={false} />
          )
          }

        </div>
        <div className="corebox_9 row items_center f_2 f600 pad_l24">Crypto</div>

        <div className="row o_3 wrap">
          {(data1.length === 0) ? 'Loading' : data1.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={true} />
          )
          }

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { symbols, finnhub } = state;
  return {
    symbols, finnhub
  }
};

const mapDispatchToProps = dispatch => ({
  addnewsymbol: symbol => dispatch({ type: 'symbol/add', symbol }),
  fetchfinnhub: (finnhub,key) => dispatch({ type: 'finnhub/fetch', finnhub, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)