import { toggleFilter } from '../Queryselector'
import { useHistory } from "react-router-dom";



export default function Nav({ title, titleback, isScrollCero }) {
    const history = useHistory();
    return <div>
        <div className={"row center basis_43 corebox_5 mobilecorebox_4  nav" + (isScrollCero ? " " : " back_2")} style={{ willChange: "background-color", pointerEvents: (isScrollCero ? 'none' : '') }}>
            <div className="row wrap space_between center bodywidth basis_41 ">
                <div className="row start items_center space_between mobilepad_r24">
                    <div className={"row     start fore_13 pad_r24 sec_nav" + (isScrollCero ? "" : " active")} style={{ width: "unset" }}>
                        <div className="f_2 f_m_1  start items_center mobilepad_l24 f400 btn hover ls_25" onClick={() => history.push('/')}>Home<div className="to_hover fore_11 f400  start items_center mobilepad_l24">Home</div></div>
                        <div className="f_2 f_m_1 pad_l27  row center  mobilepad_l24 f400 btn hover ls_25" >News<div className="to_hover fore_11  pad_l27 f400 row center items_center mobilepad_l24">News</div></div>
                        <div className="f_2 f_m_1 pad_l27  row center  mobilepad_l24 f400 btn hover ls_25" >Events<div className="to_hover fore_11 pad_l27 f400 row center items_center mobilepad_l24">Events</div></div>
                    </div>
                </div>


                <div className="row " style={{ opacity: (isScrollCero ? 0 : 1), willChange: "opacity" }}>
                    <input className="f_0   back_2 corebox_3 pad_l28 fore_11 f400 " placeholder="Search ..." />
                    <div className="back_2 row center corebox_x2 ">
                        <div className="maskicon_search  back_11" />
                    </div>
                </div>
            </div>
        </div>

    </div>
}