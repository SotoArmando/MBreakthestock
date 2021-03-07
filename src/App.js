
import './App.scss';
import './Role.scss';
import './css/poppins/poppins.css';
import './css/castoro/castoro.css';
import './css/lora/lora.css';
import React from 'react';
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Nav from './components/Nav';
import Visitcalendarevent from './containers/Visitcalendarevent';
import Visitsymbol from './containers/Visitsymbol';
import Index from './containers/Index';
import Standsearch from './components/Standsearch';
import Eventsindex from './containers/Eventsindex';
import Newsindex from './containers/Newsindex';
import Standuser from './components/Standuser';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onRequest: false,
      isScrollCero: true,
      isStandsearchactive: false
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
      this.observer.observe(document.querySelector("#topanchor"));
    }
  }
  handleObserver(entries) {
    this.setState({ ...this.state, isScrollCero: entries[0].boundingClientRect.top >= (-1 * entries[0].boundingClientRect.height) });
  }

  handleStandsearch() {
    const { isStandsearchactive } = this.state;
    this.setState({ ...this.state, isStandsearchactive: !isStandsearchactive });
  }

  componentDidMount() {
    debugger;
    if (
      "IntersectionObserver" in window &&
      "IntersectionObserverEntry" in window &&
      "intersectionRatio" in window.IntersectionObserverEntry.prototype
    ) {
      let observer = new IntersectionObserver((entries) => this.handleObserver(entries));
      this.observer = observer;
      this.observer.observe(document.querySelector("#topanchor"));
    }
  }

  render() {
    const { isScrollCero, isStandsearchactive } = this.state;
    const { history, events, crypto, forex, news, addstate, state: { landingcryptosymbol, landingforexsymbol } } = this.props;
    return (
      <div id="doc" className="col back_15 ">
        <Nav title="Brainspace" titleback="" isScrollCero={isScrollCero} />
        <Standsearch isStandsearchactive={isStandsearchactive} handleStandsearch={this.handleStandsearch.bind(this)}/>
       

        <div className="corebox_5 mobilecorebox_6" >
          <div className="row center corebox_5 mobilecorebox_6  " style={{ pointerEvents: "none" }}>
            <div className="row center Branispacelogo" style={{ opacity: (isScrollCero ? 1 : 0) }}>
              <span className="f_3 f600 ls_26 fore_11 ">
                <div className="svgicon_icon iconsize_32 mar_r20" />
                      Brainspace
                  </span>
            </div>
          </div>
        </div>
        
        <Standuser handleStandsearch={this.handleStandsearch.bind(this)}/>
     
        <Switch>
          <Route path="/about/">
            <Newsindex isScrollCero={isScrollCero} history={history} />
          </Route>
          <Route path="/indexnews/" >
            <Newsindex isScrollCero={isScrollCero} history={history} />
          </Route>
          <Route path="/indexevents/">
            <Eventsindex isScrollCero={isScrollCero} history={history} />
          </Route>
          <Route path="/visitsymbol/">
            <Visitsymbol addstate={addstate} />
          </Route>
          <Route path="/visitcalendarevent">
            <Visitcalendarevent addstate={addstate} />
          </Route>
          <Route path="/">
            <Index isScrollCero={isScrollCero} history={history}  handleStandsearch={this.handleStandsearch.bind(this)}/>
          </Route>
        </Switch>
        <div className="corebox_10"></div>
      </div >
    );
  }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(App))