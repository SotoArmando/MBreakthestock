import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import utils from './Util';
import { fetchCrypto, fetchForex } from './finantialmodeling';
import React ,{ useState } from 'react';
import './css/poppins/poppins.css';
import Visitedsymbol from './components/Visitedsymbol';

const { convertRemToPixels } = utils;




export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0 ,
      data1: 0,
    }

    this.handleUnload = this.handleUnload.bind(this);
  }
  componentDidMount() {
    window.addEventListener('beforeunload', this.handleUnload);
  }

  handleUnload(e) {
    debugger;
    e.preventDefault();
    return e.returnValue = 'Are you sure you want to close?';
  }

  render() {
    const bodywidth = document.querySelector('body').getBoundingClientRect().width;
    let op_1_width = parseInt(bodywidth / convertRemToPixels(15)) ;
    op_1_width = bodywidth / op_1_width;
    const {data, data1} = this.state;


    if (data === 0) {
      this.setState({ ...this.state, data: [] })
      fetchCrypto().then(d => {
        this.setState({ ...this.state, data: d })
      });
    } 
  
     if (data1 === 0) {
      this.setState({ ...this.state, data1: [] })
      fetchForex().then(d => {
        this.setState({ ...this.state, data1: d })
      });
    } 
    
    return (
      <div className="col relative">
          <Nav title="Armando" titleback="BackArmando"/>
  
          <div className="corebox_7 mobilecorebox_14"/>
  
          <div className="corebox_7 f_1 f600 pad_l20">Forex</div>
  
          <div className="row o_3 wrap">
          {(data === 0 || data.length === 0) ? 'Loading' : data.slice(0,10).map(e => 
              <Visitedsymbol {...e} basis = {op_1_width} isCrypto={false} />
              )
            }
  
          </div>
          <div className="corebox_7 f_1 f600 pad_l20">Crypto</div>
  
          <div className="row o_3 wrap">
          {(data1 === 0 || data1.length === 0) ? 'Loading' : data1.slice(0,10).map(e => 
                <Visitedsymbol {...e} basis = {op_1_width} isCrypto={true} />
              )
            }
  
          </div>
      </div>
    );
  }
} 
