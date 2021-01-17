import { useState } from 'react';
import {fetchForexCandles ,fetchCryptoCandles} from '../finantialmodeling';
import { connect } from 'react-redux';

function Visitedsymbol({description,displaySymbol,symbol,basis,isCrypto,fetchfinnhub,finnhub}) 
{
    const [bidAsk, setbidAsk] = useState(0);

    const Fetchcryptocandles = (symbol,key) => {
        fetchCryptoCandles(symbol).then(e => {
            setbidAsk(e)
            fetchfinnhub({[key]: (+ new Date()), timestamp: (+ new Date()), e: e},key)
        })
    }

    const Fetchforexcandles = (symbol, key) => {
        fetchForexCandles(symbol).then(e => {
            setbidAsk(e)
            fetchfinnhub({[key]: (+ new Date()), timestamp: (+ new Date()), e: e},key)
        })
    }
    
    if (bidAsk === 0) {
        setbidAsk('Loading')

        if (isCrypto) {
            let key = "fetchCryptoCandles_"+symbol
            if (finnhub.hasOwnProperty(key)) {
                console.log((+new Date) - finnhub[key]["timestamp"])
                if ((+new Date) - finnhub[key]["timestamp"] > 60000 || finnhub[key]['e'] === "No data") { 
                    Fetchcryptocandles(symbol,key)
                } else {
                    setbidAsk(finnhub[key]['e'])
                }
            } else {
                Fetchcryptocandles(symbol,key)
            }
        } else {
            let key = "fetchForexCandles_"+symbol
            if (finnhub.hasOwnProperty(key)) {
                console.log((+new Date) - finnhub[key]["timestamp"])
                if ((+new Date) - finnhub[key]["timestamp"] > 60000 || finnhub[key]['e'] === "No data") { 
                    Fetchforexcandles(symbol,key)
                } else {
                    setbidAsk(finnhub[key]['e'])
                }
            } else {
                Fetchforexcandles(symbol,key)
            }
        }
    }

    return  (
    <div className="col corebox_14 center items_start pad_l24 pad_r24" style={{flexBasis:basis + 'px'}}>
        <div className="row space_between allwidth">
            <span className="f_1 f600">{displaySymbol}</span>
            {bidAsk === 0 ? 'Loading' : <span className="f_1 f600">{bidAsk}</span>}
        </div>
        <span >{description}</span>
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
  
export default connect(mapStateToProps, mapDispatchToProps)(Visitedsymbol)