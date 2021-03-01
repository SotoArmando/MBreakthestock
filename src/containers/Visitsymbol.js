import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Select } from "../components/Filter";
import Marketnews from "../components/Marketnews";
import Chart0 from "./Chart";

function Visitsymbol({ symbolclicked: { description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data }, news }) {

    let falldata = data || []; 
    let dif = falldata[falldata.length - 1] - falldata[0];
    let dif_1 = falldata[27] - falldata[0];
    let dif_2 = falldata[51] - falldata[0];
    
   
    return <div className="col">
        <span className="f_3 corebox_4 f700 row items_center">{(isCrypto ? "Binance" : "Oanda")}</span>
        <div className="col wrap basis_46 back_grad_9">
            <Chart0 {...{ description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data }} />
        </div>
        <div className="row wrap basis_45 corebox_7 center  f600 back_grad_9">
            {/* <span>{displaySymbol}</span>
            <span>{description}</span>
            <span>{data[0] - data[data.length - 1]}</span>
            <span>{bidAsk}</span> */}
            <span className="row center fore_17 f_2">3D <span className={"pad_l24 "+(dif > 0 ? "fore_green" : "fore_red")}>{dif}</span></span>
            <span className="row center fore_17 f_2">48H <span className={"pad_l24 "+(dif_1 > 0 ? "fore_green" : "fore_red")}> {dif_1}</span></span>
            <span className="row center fore_17 f_2">24H <span className={"pad_l24 "+(dif_2 > 0 ? "fore_green" : "fore_red")} > {dif_2}</span></span>
        </div>
        <div className="corebox_5"></div>
        <span className="f_3 f500">Latest news</span>
        <div className="row wrap basis_45">
            {
                (Object.entries(news || {}).length === 0) ? 'Loading' : Object.entries(news).slice(0, 3).map(({ 1: e }) => <Marketnews {...e} />)
            }
        </div>

    </div>
}

const mapStateToProps = (({ state: { symbolclicked }, news }) => {
    return { symbolclicked, news };
});



export default connect(mapStateToProps)(Visitsymbol)