import { toggleFilter } from '../Queryselector'
import { useHistory } from "react-router-dom";



export default function Nav({ title, titleback, isScrollCero }) {
    const history = useHistory();
    return <div>
        <div className={"row center corebox_6 mobilecorebox_4  nav" + (isScrollCero ? " " : " back_2")} style={{ willChange: "background-color", pointerEvents: (isScrollCero ? 'none' : '') }}>
            <div className="row space_between center bodywidth basis_39 ">
                <div className="row start items_center space_between mobilepad_r24">
                    <div className={"row  start fore_14 pad_r24 sec_nav" + (isScrollCero ? "" : " active")} style={{ width: "unset" }}>
                        <div className="f_2   start items_center mobilepad_l24 f500 btn hover ls_25" onClick={() => history.push('/')}>HOME<div className="to_hover fore_11 f500 start items_center mobilepad_l24">HOME</div></div>
                    </div>
                </div>

                <div className="row end" style={{ opacity: (isScrollCero ? 0 : 1), willChange: "opacity" }}>
                    <div className="row mobilepad_r24">
                        <input className="f_0 box  back_2 corebox_3 corebox_x12 pad_l28 fore_11 f400 " placeholder="Search ..." />
                        <div className="back_2 row center  corebox_x2">
                            <div className="maskicon_search  back_11" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row center corebox_6 mobilecorebox_6  nav" style={{ pointerEvents: "none" }}>
            <div className="row center" style={{ opacity: (isScrollCero ? 1 : 0), willChange: "opacity" }}>
                <span className="f_3 f600 ls_26 fore_11 ">
                    <div className="svgicon_icon iconsize_32 mar_r20" />
                    {title}
                </span>
            </div>
        </div>
    </div>
}