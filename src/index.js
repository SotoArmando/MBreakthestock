import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { convertRemToPixels } from './Util';
import { Provider } from 'react-redux'
import store from './reducers/store'

const bodywidth = document.querySelector('body').getBoundingClientRect().width;
let op_1_width = parseInt(bodywidth / convertRemToPixels(16));
op_1_width = bodywidth / op_1_width;


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <div className="corebox_24 back_14 row wrap start f600 pad_t33 pad_l33 mobilepad_l28 mobilepad_t28">
        <div className="col start items_start mobilecorebox_14" style={{ flexBasis: op_1_width }}>
          <span className="f_3 f600 ls_26 "><div className="svgicon_icon iconsize_32 mar_r20" />Brainspace</span>
        </div>
        <div className="col start mobilecorebox_21 items_start  " style={{ flexBasis: op_1_width }}>
          <div className="f_2 corebox_10">Footer Column</div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Latest Post<div className="to_hover fore_5">Latest Post</div></div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Popular Posts<div className="to_hover fore_5">Popular Posts</div></div>
        </div>
        <div className="col start mobilecorebox_21 items_start " style={{ flexBasis: op_1_width }}>
          <div className="f_2 corebox_10">Footer Column</div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">My Account<div className="to_hover fore_5">My Account</div></div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Register<div className="to_hover fore_5">Register</div></div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Sign In<div className="to_hover fore_5">Sign In</div></div>
        </div>
        <div className="col start mobilecorebox_21 items_start " style={{ flexBasis: op_1_width }}>
          <div className="f_2 corebox_10">Footer Column</div>

          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Privacy Policy<div className="to_hover fore_5">Privacy Policy</div></div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Terms of Use<div className="to_hover fore_5">Terms of Use</div></div>
          <div className="f_1 ls_25 corebox_5 fore_4 btn hover">Contact Information<div className="to_hover fore_5">Contact Information</div></div>

        </div>
      </div>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
