



import React from 'react';
import { connect } from 'react-redux';
import { Select } from '../components/Filter';
import { fetchCrypto, fetchForex, fetchMarketnews, fetchEconomicCalendar } from '../lib/finantialmodeling';
import { Switch,Route,withRouter } from "react-router-dom";
import Symbol from '../components/Symbol';
import Marketnews from '../components/Marketnews';
import Calendarevent from '../components/Calendarevent';
import Landing from '../containers/Landing';
import Chart0 from '../containers/Chart';
import Standnavigator from '../components/Standnavigator';
import Standuser from './Standuser';


class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onRequest: false,
      isScrollCero: props.isScrollCero
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
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

  }

  render() {
    const { isScrollCero } = this.props;
    const { history, events, crypto, forex, news, addstate, state: { landingcryptosymbol, landingforexsymbol } } = this.props;

    return (
      <div id="doc" className="col back_15">
        <Standuser />
        <Standnavigator history={history} isScrollCero={isScrollCero} />
        <Landing />
        {/* <Select name="Market Calendar" value="Today" options={[0, 0, 0]} addstate={addstate} /> */}
        <div className="row back_2 wrap basis_43 corebox_11 center items_center pad_b30">
          {
            (Object.entries(events || {}).length === 0) ? 'Loading' : Object.entries(events).slice(0, 8).map(e => <Calendarevent {...e[1]} addstate={addstate} />)
          }
        </div>

        <div className="row wrap basis_50 center back_2">
          <Chart0 {...landingforexsymbol} />
          <div className="row wrap basis_42 back_grad_9">
            {
              (Object.entries(forex || {}).length === 0) ? 'Loading' : Object.entries(forex).slice(0, 12).map(({ 1: e }, i) => <Symbol {...e} {...{ isFirst: i === 0, isCrypto: false, addstate }} />)
            }
          </div>
        </div>

        <div className="row wrap basis_50 center back_2">
          <Chart0 {...landingcryptosymbol} />
          <div className="row wrap basis_42 back_grad_9">
            {
              (Object.entries(crypto || {}).length === 0) ? 'Loading' : Object.entries(crypto).slice(0, 12).map(({ 1: e }, i) => <Symbol {...e} {...{ isFirst: i === 1, isCrypto: true, addstate: addstate }} />)
            }
          </div>
        </div>
        <div className="corebox_7" />
        <Select name="Recently" value="" options={[0, 0, 0]} openable={true} addstate={addstate} />
        <div className="row wrap basis_43">
          {
            (Object.entries(news || {}).length === 0) ? 'Loading' : Object.entries(news).slice(0, 12).map(({ 1: e }) => <Marketnews {...e} />)
          }
        </div>
      </div >
    );
  }
}


const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => ({
  bulkcrypto: (payload, key = "null") => dispatch({ type: 'crypto/bulk', payload, key }),
  bulkforex: (payload, key = "null") => dispatch({ type: 'forex/bulk', payload, key }),
  bulknews: (payload, key = "null") => dispatch({ type: 'news/bulk', payload, key }),
  bulkevents: (payload, key = "null") => dispatch({ type: 'events/bulk', payload, key }),
  addstate: (payload, key = "null") => dispatch({ type: 'state/add', payload, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Index))