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
      <div className="col back_grad_9 corebox_18   ">
        <div className="row wrap start f600 pad_t33  corebox_13 basis_44">
          <div className="col start items_start mobilecorebox_8  pad_l28 mobilepad_l24" >
            <span className="f_3 f600 ls_26 "><div className="svgicon_icon iconsize_32 mar_r20" />Brainspace</span>
          </div>
          <div className="col start  items_start pad_b26 mobilepad_l24" >
            <div className="f_2 corebox_4 items_center row fore_11" >Footer Column</div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Latest Post<div className="to_hover fore_11">Latest Post</div></div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Popular Posts<div className="to_hover fore_11">Popular Posts</div></div>
          </div>
          <div className="col start  items_start pad_b26 mobilepad_l24" >
            <div className="f_2 corebox_4 items_center row fore_11">Footer Column</div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">My Account<div className="to_hover fore_11">My Account</div></div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Register<div className="to_hover fore_11">Register</div></div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Sign In<div className="to_hover fore_11">Sign In</div></div>
          </div>
          <div className="col start  items_start pad_b26 mobilepad_l24" >
            <div className="f_2 corebox_4 items_center row fore_11">Footer Column</div>

            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Privacy Policy<div className="to_hover fore_11">Privacy Policy</div></div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Terms of Use<div className="to_hover fore_11">Terms of Use</div></div>
            <div className="f_1 ls_25 corebox_1 fore_14 btn hover">Contact Information<div className="to_hover fore_11">Contact Information</div></div>

          </div>

        </div>
        <div className="corebox_14 col border_t3 center items_center  ">
          <div className="row center items_center corebox_8">
            <div className="  row center corebox_x3">
              <div className="maskicon_linkedin  " />
            </div>
            <div className="  row center corebox_x3">
              <div className="maskicon_github  " />
            </div>
            <div className="  row center corebox_x3">
              <div className="maskicon_twitter  " />
            </div>
          </div>
          <div className="tcenter f500 corebox_8  col center ls_25 fore_16 mobilepad_24 ">
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
