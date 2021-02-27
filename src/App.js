
import './App.scss';
import './css/poppins/poppins.css';
import './css/castoro/castoro.css';
import './css/lora/lora.css';

import Nav from './components/Nav';
import React from 'react';
import { connect } from 'react-redux';
import { fetchCrypto, fetchForex, fetchMarketnews, fetchEconomicCalendar } from './finantialmodeling';

import Visitedsymbol from './components/Visitedsymbol';
import Visitedmarketnews from './components/Visitedmarketnews';
import { Filter, Select } from './components/Filter';
import Calendarevent from './components/Calendarevent';
import Visitcalendarevent from './containers/Visitcalendarevent';
import Visitsymbol from './containers/Visitsymbol';

import {
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Landing from './containers/Landing';
import Chart0 from './containers/Chart';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onRequest: false,
      isScrollCero: true
    }
  }

  componentDidMount() {
    const { onRequest } = this.state;
    const { bulknews, bulkevents, bulkcrypto, bulkforex } = this.props;

    if (onRequest === false) {
      this.setState({ ...this.state, onRequest: true })
      fetchCrypto().then(e => { bulkcrypto(e) });
      fetchForex().then(e => { bulkforex(e) });
      fetchMarketnews().then(e => { bulknews(e) });
      fetchEconomicCalendar().then(e => { bulkevents(e) });
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

  render() {
    const { isScrollCero } = this.state;
    const { history, events, crypto, forex, news } = this.props;

    return (
      <div id="doc" className="col back_15 ">
        <Nav title="Brainspace" titleback="" isScrollCero={isScrollCero} />

        <div id="topanchor" className="corebox_6 mobilecorebox_6" />

        <Switch>
          <Route path="/visitsymbol">
            <Visitsymbol />
          </Route>
          <Route path="/visitcalendarevent">
            <Visitcalendarevent />
          </Route>
          <Route path="/">
            <div className="row corebox_6 mobilecorebox_4 start fore_14 space_between items_center" style={{ opacity: isScrollCero ? 1 : 0, willChange: "opacity" }}>
              <div className="row">
                <div className="f_2 corebox_x5 mobilecorebox_x5 start items_center mobilepad_l24 f500 btn hover ls_25" onClick={() => history.push('/')}>HOME<div className="to_hover fore_11 f500 start items_center mobilepad_l24">HOME</div></div>
              </div>

              <div className="row mobilepad_r24">
                <input className="f_0 box corebox_x12  back_2 corebox_3 pad_l28 fore_11 f400 " placeholder="Search ..." />
                <div className="back_2 row center corebox_x2 ">
                  <div className="maskicon_search  back_11" />
                </div>
              </div>
            </div>
            <Landing />
            <Select name="Market Calendar" value="Coming next" options={[0, 0, 0]} />
            <div className="row wrap basis_42">
              {
                (Object.entries(events).length === 0) ? 'Loading' : Object.entries(events).slice(0, 6).map(e => <Calendarevent {...e[1]} />)
              }
            </div>
          
            <Chart0 />
            <Select name="Oanda" value="" options={[0, 0, 0]} openable={true} />
            <div className="row wrap basis_43">
              {
                (Object.entries(forex).length === 0) ? 'Loading' : Object.entries(forex).slice(0, 10).map(({ 1: e }) => <Visitedsymbol {...e} isCrypto={false} />)
              }
            </div>
            <Select name="Binance" value="" options={[0, 0, 0]} />
            <div className="row wrap basis_43">
              {
                (Object.entries(crypto).length === 0) ? 'Loading' : Object.entries(crypto).slice(0, 10).map(({ 1: e }) => <Visitedsymbol {...e} isCrypto={true} />)
              }
            </div>
            <div className="corebox_7" />
            <Select name="Recently" value="" options={[0, 0, 0]} openable={true} />
            <div className="row wrap basis_45">
              {
                (Object.entries(news).length === 0) ? 'Loading' : Object.entries(news).slice(0, 6).map(({ 1: e }) => <Visitedmarketnews {...e} />)
              }
            </div>
          </Route>
        </Switch>
        <div className="corebox_10"></div>
      </div >
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = dispatch => ({
  bulkcrypto: (payload, key = "null") => dispatch({ type: 'crypto/bulk', payload, key }),
  bulkforex: (payload, key = "null") => dispatch({ type: 'forex/bulk', payload, key }),
  bulknews: (payload, key = "null") => dispatch({ type: 'news/bulk', payload, key }),
  bulkevents: (payload, key = "null") => dispatch({ type: 'events/bulk', payload, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))