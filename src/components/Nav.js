import { toggleFilter } from '../Queryselector'

export default function Nav({ title, titleback, isScrollCero }) {
    return <div className={"row center corebox_10 mobilecorebox_16  nav"+ (isScrollCero ? " ": " back_2")} style={{ willChange:"opacity" }}>
        <div className="row space_between center bodywidth basis_44 ">
            <div className="row start items_center ">
                <div className={"row corebox_10 mobilecorebox_16 start fore_14 pad_r24 sec_nav" + (isScrollCero ? "": " active")} style={{ width: "unset" }}>
                    <div className="f_2 corebox_x10 mobilecorebox_x15 start items_center mobilepad_l24 f500 btn hover ls_25">HOME<div className="to_hover fore_11 f500 start items_center mobilepad_l24">HOME</div></div>
                </div>
            </div>
            <div className="row center mobilehide" style={{opacity:(isScrollCero ? 1 : 0)}}> 
                <span className="f_3 f600 ls_26 ">
                    <div className="svgicon_icon iconsize_32 mar_r20" />
                    {title}
                </span>
            </div>
            <div className="row center ">
                <span className="" onMouseDown={() => { }}></span>
            </div>
        </div>


    </div>
}