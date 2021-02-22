
import './App.scss';
import './css/poppins/poppins.css';
import './css/castoro/castoro.css';
import './css/lora/lora.css';

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
        "fetchForex": { fetch: () => this.fetchappForex(), d: Object.values(symbols).filter(e => e.market === "Forex"), k: "data" },
        "fetchCrypto": { fetch: () => this.fetchappCrypto(), d: Object.values(symbols).filter(e => e.market === "Crypto"), k: "data1" },
        "fetchMarketnews": { fetch: () => this.fetchappMarketnews(), d: news, k: "data2" },
        "fetchEconomicCalendar": { fetch: () => this.fetchappEconomicCalendar(), d: events, k: "data3" }
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
    let op_1_width = parseInt(bodywidth / convertRemToPixels(16));
    let op_2_width = parseInt(bodywidth / convertRemToPixels(20));
    let op_3_width = parseInt(bodywidth / convertRemToPixels(11));
    op_1_width = bodywidth / op_1_width;
    op_2_width = bodywidth / op_2_width;
    op_3_width = bodywidth / (op_3_width < 1 ? 1 : op_3_width);

    return (
      <div id="doc" className="col back_2">
        <Nav title="Brainspace" titleback="" />
        
        <div className="corebox_10 mobilecorebox_16" />
        <div className="row corebox_9 mobilecorebox_16 start fore_4 pad_r24">
          <div className="f_2 corebox_x10 mobilecorebox_x13 start items_center f500 btn hover ls_25">HOME<div className="to_hover fore_7 f500 start items_center">HOME</div></div>
          <div className="f_2 corebox_x10 mobilecorebox_x13 center f500   btn hover ls_25">UI<div className="to_hover fore_7 f500 center">UI</div></div>
          <div className="f_2 corebox_x10 mobilecorebox_x13  center f500   btn hover ls_25">UX<div className="to_hover fore_7 f500 center">UX</div></div>
          <div className="f_2 corebox_x15 mobilecorebox_x20 center f500  btn hover ls_25">TYPOGRAPHY<div className="to_hover fore_7 f500 center">TYPOGRAPHY</div></div>
      </div>

        <div className="col corebox_21  mobilecorebox_23 center items_start pad_l34 pad_r34 pad_b30 pad_t30 back_grad_9 mobilepad_d34 mobilepad_t34 mobilepad_l29 mobilepad_r29 mobilepad_d29">
            <span className="fore_7 f_6  f_m_4 f700 lh_29">Welcome to my Brainspace<br/> a Sample Project.</span>
            <span className=" pad_t24 f_3 f_m_1 ">The theme has amazing layouts, practical built-in features, great bones and lightning load speed. Download it now!</span>
        </div>

        <Select name="Market Calendar" value="General" options={[0, 0, 0]} />

        <div className="row wrap">
          {
            (Object.entries(data3).length === 0) ? 'Loading' : Object.entries(data3).slice(0, bodywidth / op_1_width).map(e =>
              <Calendarevent {...e[1]} basis={op_1_width} />
            )
          }
        </div>

        <Select name="Forex" value="Oanda" options={[0, 0, 0]} openable={true} />

        <div className="row wrap">
          {(data.length === 0) ? 'Loading' : data.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={false} />
          )
          }

        </div>

        <Select name="Crypto" value="Binance" options={[0, 0, 0]} />

        <div className="row wrap">
          {(data1.length === 0) ? 'Loading' : data1.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={true} />
          )
          }

        </div>
        <div className="corebox_7" />

        <Select name="Today" value="General" options={[0, 0, 0]} openable={true} />

        <div className="row wrap">
          {(data2.length === 0) ? 'Loading' : data2.slice(0, 4).map(e =>
            <Visitedmarketnews {...e} basis={op_2_width} />
          )
          }
        </div>

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