
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
        const { isScrollCero } = this.state;
        console.log(entries[0].boundingClientRect)
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
    const bodywidth = document.querySelector('body').getBoundingClientRect().width;
    let op_1_width = parseInt(bodywidth / convertRemToPixels(14));
    let op_2_width = parseInt(bodywidth / convertRemToPixels(20));
    let op_3_width = parseInt(bodywidth / convertRemToPixels(11));
    op_1_width = bodywidth / op_1_width;
    op_2_width = bodywidth / op_2_width;
    op_3_width = bodywidth / (op_3_width < 1 ? 1 : op_3_width);

    return (
      <div id="doc" className="col back_15">
        <Nav title="Brainspace" titleback="" isScrollCero={isScrollCero} />

        <div id="topanchor" className="corebox_10 mobilecorebox_16" />



        <div className="row corebox_10 mobilecorebox_16 start fore_12 pad_r24" style={{ opacity: isScrollCero ? 1 : 0, willChange: "opacity" }}>
          <div className="f_2 corebox_x10 mobilecorebox_x15 start items_center mobilepad_l24 f500 btn hover ls_25">HOME<div className="to_hover fore_11 f500 start items_center mobilepad_l24">HOME</div></div>
          <div className="f_2 corebox_x10 mobilecorebox_x15 center f500   btn hover ls_25">UI<div className="to_hover fore_11 f500 center">UI</div></div>
          <div className="f_2 corebox_x10 mobilecorebox_x15  center f500   btn hover ls_25">UX<div className="to_hover fore_11 f500 center">UX</div></div>
          <div className="f_2 corebox_x15 mobilecorebox_x22 center f500  btn hover ls_25">TYPOGRAPHY<div className="to_hover fore_11 f500 center">TYPOGRAPHY</div></div>
        </div>

        <div className="col corebox_21  mobilecorebox_23 center items_start pad_l34 pad_r34 pad_b30 pad_t30 back_grad_9 mobilepad_d34 mobilepad_t34 mobilepad_l29 mobilepad_r29 mobilepad_d29">
          <span className="fore_11 f_6  f_m_4 f700 lh_29">Welcome to my Brainspace<br /> a Sample Project.</span>
          <span className=" pad_t24 f_3 f_m_1 ">The theme has amazing layouts, practical built-in features, great bones and lightning load speed. Download it now!</span>
        </div>

        <Select name="Market Calendar" value="Coming next" options={[0, 0, 0]} />

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

        <Select name="" value="Crypto Binance" options={[0, 0, 0]} />

        <div className="row wrap">
          {(data1.length === 0) ? 'Loading' : data1.slice(0, 10).map(e =>
            <Visitedsymbol {...e} basis={op_1_width} isCrypto={true} />
          )
          }

        </div>
        <div className="corebox_7" />

        <Select name="Recently" value="" options={[0, 0, 0]} openable={true} />

        <div className="row wrap ">
          {(data2.length === 0) ? 'Loading' : data2.slice(0, 12).map(e =>
            <Visitedmarketnews {...e} basis={op_2_width} />
          )
          }
        </div>
        <div className="corebox_19"></div>
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