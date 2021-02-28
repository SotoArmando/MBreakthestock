import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Select } from "../components/Filter";
import Marketnews from "../components/Marketnews";
import Chart0 from "./Chart";

function Visitsymbol({ symbolclicked: { description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data }, news }) {

    debugger;
    return <div className="col">
        <Select name={isCrypto ? "Binance" : "Oanda"} value="" options={[0, 0, 0]} />
        <div className="col wrap basis_46 back_grad_9">
            <Chart0 {...{ description, displaySymbol, symbol, basis, growth, bidAsk, isCrypto, data }}/>
        </div>
        <div className="col corebox_7">
            <span>{displaySymbol}</span>
            <span>{description}</span>
            <span>{growth}</span>
            <span>{bidAsk}</span>
        </div>

        <div className="row wrap basis_45">
            {
                (Object.entries(news || {}).length === 0) ? 'Loading' : Object.entries(news).slice(0, 6).map(({ 1: e }) => <Marketnews {...e} />)
            }
        </div>
    </div>
}

const mapStateToProps = (({ state: { symbolclicked }, news }) => {
    return { symbolclicked, news };
});



export default connect(mapStateToProps)(Visitsymbol)