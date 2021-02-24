
import './App.scss';
import './css/poppins/poppins.css';
import './css/castoro/castoro.css';
import './css/lora/lora.css';

import Nav from './components/Nav';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCrypto, fetchForex, fetchMarketnews, fetchEconomicCalendar } from './finantialmodeling';
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
      isScrollCero: true,
    }

    this.handleUnload = this.handleUnload.bind(this);
  }

  fetchappCrypto() {
    fetchCrypto().then(d => {
      this.setState({ ...this.state, data1: d });
    });
  }

  fetchappForex() {
    fetchForex().then(d => {
      this.setState({ ...this.state, data: d });
    });
  }

  fetchappMarketnews() {
    fetchMarketnews().then(d => {
      this.setState({ ...this.state, data2: d });
    });
  }

  fetchappEconomicCalendar() {
    fetchEconomicCalendar().then(d => {
      this.setState({ ...this.state, data3: d });
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

      for (const [key, value] of Object.entries(tasks)) value.fetch();

      this.setState(next_state);
    }

    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {

      let observer = new IntersectionObserver((entries => {
        this.setState({ ...this.state, isScrollCero: entries[0].boundingClientRect.top >= (-1 * entries[0].boundingClientRect.height) });
      }).bind(this))

      observer.observe(document.querySelector("#topanchor"));
    }

  }

  handleUnload(e) {
    const { finnhub, symbols, news, events } = this.props;
    saveState(JSON.stringify({ finnhub, symbols, news, events }));
  }

  render() {
    const { data, data1, data2, data3, isScrollCero } = this.state;

    return (
      <div id="doc" className="col back_15">
        <Nav title="Brainspace" titleback="" isScrollCero={isScrollCero} />

        <div id="topanchor" className="corebox_6 mobilecorebox_4" />



        <div className="row corebox_6 mobilecorebox_4 start fore_14 space_between items_center" style={{ opacity: isScrollCero ? 1 : 0, willChange: "opacity" }}>
          <div className="row">
            <div className="f_2 corebox_x5 mobilecorebox_x5 start items_center mobilepad_l24 f500 btn hover ls_25">HOME<div className="to_hover fore_11 f500 start items_center mobilepad_l24">HOME</div></div>
          </div>

          <div className="row mobilepad_r24">
            <input className="f_0 box corebox_x10  back_2 corebox_3 pad_l28 fore_11 f400 " placeholder="Search ..." />
            <div className="back_2 row center corebox_x2 ">
              <div className="maskicon_search  back_11" />
            </div>
          </div>

        </div>

        <div className="col corebox_18 mobilecorebox_15 center items_start pad_l34 pad_r34 pad_b30 pad_t30 back_grad_9 mobilepad_b34 mobilepad_t34 mobilepad_l29 mobilepad_r29 mobilepad_d29">
          <span className="fore_11 f_6  f_m_4 f700 lh_29">Welcome to my Brainspace<br /> a Sample Project.</span>
          <span className=" pad_t24 f_3 f_m_1 ">Flex those bones</span>
        </div>

        <Select name="Market Calendar" value="Coming next" options={[0, 0, 0]} />

        <div className="row wrap basis_42">
          {
            (Object.entries(data3).length === 0) ? 'Loading' : Object.entries(data3).slice(0, 6).map(e =>
              <Calendarevent {...e[1]} />
            )
          }
        </div>

        <Select name="Oanda" value="" options={[0, 0, 0]} openable={true} />

        <div className="row wrap basis_43">
          {(data.length === 0) ? 'Loading' : data.slice(0, 10).map(e =>
            <Visitedsymbol {...e} isCrypto={false} />
          )
          }

        </div>

        <Select name="Binance" value="" options={[0, 0, 0]} />

        <div className="row wrap basis_43">
          {(data1.length === 0) ? 'Loading' : data1.slice(0, 10).map(e =>
            <Visitedsymbol {...e} isCrypto={true} />
          )
          }

        </div>
        <div className="corebox_7" />

        <Select name="Recently" value="" options={[0, 0, 0]} openable={true} />

        <div className="row wrap basis_45">
          {(data2.length === 0) ? 'Loading' : data2.slice(0, 12).map(e =>
            <Visitedmarketnews {...e} />
          )
          }
        </div>
        <div className="corebox_10"></div>
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