import { useState } from 'react';
import { fetchForexCandles, fetchCryptoCandles } from '../finantialmodeling';
import { connect } from 'react-redux';

function Visitedsymbol({ description, displaySymbol, symbol, basis, isCrypto, finnhub }) {
    const [bidAsk, setbidAsk] = useState(0);
    const [growth, setGrowth] = useState(0);

    const Fetchcryptocandles = (symbol, key) => {
        fetchCryptoCandles(symbol).then(e => {
            setbidAsk(e[0])
            setGrowth(e[1])
        })
    }

    const Fetchforexcandles = (symbol, key) => {
        fetchForexCandles(symbol).then(e => {
            setbidAsk(e[0])
            setGrowth(e[1])
        })
    }

    const mapNumbertoRead = (number) => {
        return (number) ? number.toString().lenght > 5 ? number.toString().slice(0, 7) : number.toString().slice(0, 8) : 0;
    }

    if (bidAsk === 0) {
        setbidAsk('Loading')

        if (isCrypto) {
            let key = "fetchCryptoCandles_" + symbol
            Fetchcryptocandles(symbol, key)

        } else {
            let key = "fetchForexCandles_" + symbol
            Fetchforexcandles(symbol, key)

        }


    }

    return (
        <div className="col corebox_8 mobilecorebox_7 center items_start pad_l24 pad_r24 pad_b27 btn" style={{ flexBasis: basis + 'px' }}>
            <div className="allsize  col  pad_t27 borderradius_25">
                <div className="row center space_between allwidth">
                    <span className="f_1 f500 fore_6">{displaySymbol}</span>
                    {/* <span style={{ fontSize: "1rem" }} 
                            className={"pad_l20 pad_r20 borderradius_16 mar_r10 pad_t5 pad_b5 " 
                            + ((growth > 1) ? "fore_green" : "fore_red")}>{growth > 1 ? "" : ""} 
                            {mapNumbertoRead(growth)}%</span> */}
                </div>
                <div className="row center space_between allwidth">
                    <span className="f500  mar_t15">
                        {bidAsk === 0 ? 'Loading' :
                            <span className={"f_2 ls_25 f600 fore_11" + ((growth > 1) ? "" : "")}>

                                {mapNumbertoRead(bidAsk)}
                            </span>
                        }
                    </span>
                    {/* <span className="f600 fore_green mar_t15">Today</span> */}
                </div>
            </div>
        </div>)
}

const mapStateToProps = (state) => {
    const { finnhub } = state;
    return {
        finnhub
    }
};

const mapDispatchToProps = dispatch => ({
    fetchfinnhub: (finnhub, key) => dispatch({ type: 'finnhub/fetch', finnhub, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Visitedsymbol)