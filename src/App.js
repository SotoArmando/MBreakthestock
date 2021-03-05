
import './App.scss';
import './css/poppins/poppins.css';
import './css/castoro/castoro.css';
import './css/lora/lora.css';
import React from 'react';
import { Switch,Route,withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Nav from './components/Nav';
import Visitcalendarevent from './containers/Visitcalendarevent';
import Visitsymbol from './containers/Visitsymbol';
import Index from './components/Index';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      onRequest: false,
      isScrollCero: true
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }


  componentDidMount() {
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
    const { history, events, crypto, forex, news, addstate, state: { landingcryptosymbol, landingforexsymbol } } = this.props;


    return (
      <div id="doc" className="col back_15 ">
        <Nav title="Brainspace" titleback="" isScrollCero={isScrollCero} />

        <div id="topanchor" className="corebox_5 mobilecorebox_6" >
          <div className="row center corebox_5 mobilecorebox_6  " style={{ pointerEvents: "none" }}>
            <div className="row center" style={{ opacity: (isScrollCero ? 1 : 0), willChange: "opacity" }}>
              <span className="f_3 f600 ls_26 fore_11 ">
                <div className="svgicon_icon iconsize_32 mar_r20" />
                      Brainspace
                  </span>
            </div>
          </div>
        </div>

        <Switch>
          <Route path="/visitsymbol/">
            <Visitsymbol addstate={addstate} />
          </Route>
          <Route path="/visitcalendarevent">
            <Visitcalendarevent addstate={addstate} />
          </Route>
          <Route path="/">
            <Index isScrollCero={isScrollCero} />
          </Route>
        </Switch>
        <div className="corebox_10"></div>
      </div >
    );
  }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(withRouter(App))