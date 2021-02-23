import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './reducers/store'



ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <div className="col back_grad_9 corebox_22 mobilecorebox_27">
        <div className="row wrap start f600 pad_t33  mobilecorebox_27 mobilepad_l28 mobilepad_t28  basis_44">
          <div className="col start items_start mobilecorebox_14  pad_l28 mobilepad_l0" >
            <span className="f_3 f600 ls_26 "><div className="svgicon_icon iconsize_32 mar_r20" />Brainspace</span>
          </div>
          <div className="col start  items_start " >
            <div className="f_2 corebox_10 fore_11" >Footer Column</div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Latest Post<div className="to_hover fore_11">Latest Post</div></div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Popular Posts<div className="to_hover fore_11">Popular Posts</div></div>
          </div>
          <div className="col start  items_start " >
            <div className="f_2 corebox_10 fore_11">Footer Column</div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">My Account<div className="to_hover fore_11">My Account</div></div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Register<div className="to_hover fore_11">Register</div></div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Sign In<div className="to_hover fore_11">Sign In</div></div>
          </div>
          <div className="col start  items_start " >
            <div className="f_2 corebox_10 fore_11">Footer Column</div>

            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Privacy Policy<div className="to_hover fore_11">Privacy Policy</div></div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Terms of Use<div className="to_hover fore_11">Terms of Use</div></div>
            <div className="f_1 ls_25 corebox_5 fore_14 btn hover">Contact Information<div className="to_hover fore_11">Contact Information</div></div>

          </div>

        </div>
        <div className="corebox_21 col mobilecorebox_26 border_t3 center">
          <div className="row mobilecorebox_20 center">
            <div className="corebox_x9 mobilecorebox_x15 row center">
              <div className="maskicon_linkedin  mobilecorebox_x14" />
            </div>
            <div className="corebox_x9 mobilecorebox_x15 row center">
              <div className="maskicon_github  mobilecorebox_x14" />
            </div>
            <div className="corebox_x9 mobilecorebox_x15 row center">
              <div className="maskicon_twitter  mobilecorebox_x14" />
            </div>
          </div>
          <div className="tcenter f500 corebox_12 mobilecorebox_20 col center ls_25 fore_13 ">
            Sotoarmando Brainspace © Copyright 2021. All rights reserved.<br />
            With a commitment to technologies and practices exploration.
          </div>
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
