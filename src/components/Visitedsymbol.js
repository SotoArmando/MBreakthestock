import { useState } from 'react';
import {fetchForexCandles ,fetchCryptoCandles} from '../finantialmodeling';

export default function Visitedsymbol({description,displaySymbol,symbol,basis,isCrypto}) 
{
    const [bidAsk, setbidAsk] = useState(0);
    if (bidAsk === 0) {
        setbidAsk('Loading')
        if (isCrypto) {
            fetchCryptoCandles(symbol).then(e => {

                debugger;
                setbidAsk(e)
            })

        } else {
            fetchForexCandles(symbol).then(e => {

                debugger;
                setbidAsk(e)
            })
        }
    }

    return  <div className="col corebox_14 center items_start pad_l20" style={{flexBasis:basis + 'px'}}>
    <div className="row space_between">
        <span className="f_1 f600">{displaySymbol}</span>
        {bidAsk === 0 ? 'Loading' : <span>{bidAsk}</span>}
    </div>
    <span >{description}</span>

    
  </div>
}