
import './App.scss';
import './css/poppins/poppins.css';

import Nav from './components/Nav';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCrypto, fetchForex, fetchMarketnews, fetchEconomicCalendar } from './finantialmodeling';
import { convertRemToPixels } from './Util';
import { saveState } from './reducers/localstorage';

import Visitedsymbol from './components/Visitedsymbol';
import Visitedmarketnews from './components/Visitedmarketnews';
import { Filter, Select } from './components/Filter';
import Calendarevent from './components/Calendarevent';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      data1: [],
      data2: [],
      data3: [],
      onRequest: false,
    }

    this.handleUnload = this.handleUnload.bind(this);
  }

  fetchappCrypto() {
    const { addnewsymbol, fetchfinnhub } = this.props;
    fetchfinnhub({ "timestamp": + new Date() }, "fetchCrypto")
    fetchCrypto().then(d => {

      d.forEach(e => {
        addnewsymbol({ ...e, timestamp: (+ new Date()), market: "Crypto" }, e.symbol)
      })
      this.setState({ ...this.state, data1: d });
      this.handleUnload();
    });
  }

  fetchappForex() {
    const { addnewsymbol, fetchfinnhub } = this.props;
    fetchfinnhub({ "timestamp": + new Date() }, "fetchForex")
    fetchForex().then(d => {
      d.forEach(e => {
        addnewsymbol({ ...e, timestamp: (+ new Date()), market: "Forex" }, e.symbol)
      })
      this.setState({ ...this.state, data: d });
      this.handleUnload();
    });
  }

  fetchappMarketnews() {
    const { addnews, fetchfinnhub } = this.props;
    fetchfinnhub({ "timestamp": + new Date() }, "fetchMarketnews")
    fetchMarketnews().then(d => {
      d.forEach(e => {
        addnews({ ...e, timestamp: (+ new Date()) })
      })
      this.setState({ ...this.state, data2: d });
      this.handleUnload();
    });
  }

  fetchappEconomicCalendar() {
    
    const { bulkevents, fetchfinnhub } = this.props;
    fetchfinnhub({ "timestamp": + new Date() }, "fetchEconomicCalendar")
    fetchEconomicCalendar().then(d => {
      
      bulkevents(d);
      this.setState({ ...this.state, data3: d });
      this.handleUnload();
    });
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);

    const { finnhub, symbols, news, events } = this.props;
    const { onRequest } = this.state;

    if (!onRequest) {

      this.setState({ ...this.state, data: [], data1: [], onRequest: !onRequest })
      let next_state = this.state;


      // fetch is method used when new data is required. d is data used when data was previously saved. k is the key using x data in component state.
      let tasks = {
        "fetchForex": { fetch: () => this.fetchappForex(), d: Object.values(symbols).filter(e => e.market === "Forex"), k: "data"},
        "fetchCrypto":  { fetch: () => this.fetchappCrypto(), d: Object.values(symbols).filter(e => e.market === "Crypto"), k: "data1"},
        "fetchMarketnews": { fetch: () => this.fetchappMarketnews(), d: news, k: "data2"},
        "fetchEconomicCalendar": { fetch: () => this.fetchappEconomicCalendar(), d: events, k: "data3"}
      }

      for (const [key, value] of Object.entries(tasks)) {
        if (finnhub.hasOwnProperty(key)) {
          console.log((+new Date) - finnhub[key]["timestamp"])
          if ((+new Date) - finnhub[key]["timestamp"] > 160000) {
            value.fetch();
          } else {
            next_state = { ...next_state, [value.k]: value.d }
          }
        } else { value.fetch(); }
      }

      this.setState(next_state);
    }
    
  }

  handleUnload(e) {
    const { finnhub, symbols, news, events } = this.props;
    saveState(JSON.stringify({ finnhub, symbols, news, events }));
  }

  render() {
    const { data, data1, data2, data3 } = this.state;
    const bodywidth = document.querySelector('body').getBoundingClientRect().width;
    let op_1_width = parseInt(bodywidth / convertRemToPixels(19));
    let op_3_width = parseInt(bodywidth / convertRemToPixels(11));
    op_1_width = bodywidth / op_1_width;
    op_3_width = bodywidth / (op_3_width < 1 ? 1 : op_3_width);
    return (
      <div className="col relative back_9">
        <Nav title="Breakthestock" titleback="" />
        <Filter />

        <div className="corebox_9 mobilecorebox_16" />

        <Select name="Market Calendar" value="General" options={[0,0,0]}/>

        <div className="row o_3 wrap">
          {
          (Object.entries(data3).length === 0) ? 'Loading' : Object.entries(data3).slice(0, 6).map(e =>
            <Calendarevent {...e[1]} basis={op_3_width} />
          )
          }
        </div>

        <Select name="News" value="General" options={[0,0,0]}/>

        <div className="row o_3 wrap">
          {(data2.length === 0) ? 'Loading' : data2.slice(0, 6).map(e =>
            <Visitedmarketnews {...e} basis={op_1_width} />
          )
          }
        </div>
        <div className="corebox_11 row center">
          {/* <span className="corebox_7 borderradius_25 fore_9 corebox_x19 text_center center f600 back_green btn">Full featured news<span className="maskicon_launch mar_l21 back_10"/></span> */}
        </div>

        <Select name="Forex" value="Oanda" options={[0,0,0]}/>
  
        <div className="row o_3 wrap">
          {(data.length === 0) ? 'Loading' : data.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={false} />
          )
          }

        </div>
        <div className="corebox_11 row center">
          {/* <span className="corebox_7 borderradius_25 fore_9 corebox_x19 text_center center f600 back_green btn">Full featured forex symbols<span className="maskicon_launch mar_l21 back_10"/></span> */}
        </div>
        <Select name="Crypto" value="Binance" options={[0,0,0]}/>

        <div className="row o_3 wrap">
          {(data1.length === 0) ? 'Loading' : data1.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={true} />
          )
          }

        </div>
        <div className="corebox_11 row center">
          {/* <span className="corebox_7 borderradius_25 fore_9 corebox_x19 text_center center f600 back_green btn">Full featured crypto symbols<span className="maskicon_launch mar_l21 back_10"/></span> */}
        </div>

        <div className="corebox_24 back_8"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { symbols, finnhub, news, events } = state;
  return {
    symbols, finnhub, news, events
  }
};

const mapDispatchToProps = dispatch => ({
  addnewsymbol: (symbol, key) => dispatch({ type: 'symbol/add', symbol, key }),
  addnews: news => dispatch({ type: 'news/add', news }),
  bulkevents: (event, key) => dispatch({ type: 'events/bulk', event, key }),
  fetchfinnhub: (finnhub, key) => dispatch({ type: 'finnhub/fetch', finnhub, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)