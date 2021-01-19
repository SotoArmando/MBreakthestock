import { useState } from 'react';
import { connect } from 'react-redux';

function Calendarevent({event,impact,time,unit,actual,estimate,country, basis}) 
{
    return  (
    <div className="col corebox_14 mobilecorebox_20 start items_start pad_l24 pad_r24 pad_t22 pad_b27 btn back_10" style={{flexBasis:basis + 'px'}}>
        <span className="f600">{time}</span>
        <span className="f500 col f_1 fore_green"><span>{country}</span> {event}</span>
  

      
        
    </div>)
}

const mapStateToProps = (state) => {
    const { finnhub } = state;
    return {
      finnhub
    }
};

const mapDispatchToProps = dispatch => ({
    fetchfinnhub: (finnhub,key) => dispatch({ type: 'finnhub/fetch', finnhub, key }),
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Calendarevent)