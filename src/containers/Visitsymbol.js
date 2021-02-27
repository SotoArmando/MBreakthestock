import { useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { Select } from "../components/Filter";
import Chart0 from "./Chart";

function Visitsymbol({addstate, symbolclicked}) {
    let { symbol } = useParams();
    const [data, setData] = useState({});
    const inactive = Object.entries(data).length === 0 && symbolclicked != undefined;
    debugger;

    if (inactive) setData(inactive ? symbolclicked : data);

    return <div className="col">
        <Select name="Oanda" value="" options={[0, 0, 0]} openable={true} />
        <div className="col wrap basis_46 back_grad_9">
            <Chart0 />
        </div>
        {inactive ? "inactive" : Object.entries(data)   }
    </div>
}

const mapStateToProps = (({state: symbolclicked}) => {
    debugger;
    return symbolclicked;
});



export default connect(mapStateToProps)(Visitsymbol)