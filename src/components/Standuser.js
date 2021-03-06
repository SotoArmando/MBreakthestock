export default function Standuser({ history, isScrollCero }) {
  return <div id="topanchor" className="row basis_44 corebox_3 mobilecorebox_4 start fore_14 space_between items_center" >
    <div className="row start items_center space_between mobilepad_r24 maxedviewwidth ">
      {/* <div className="row items_center start fore_13 pad_r24 uppercase f400" style={{ width: "unset" }}>
        <div className="corebox_x3 row center">
          <div className={" bidcorebox_7  back_17 borderradius_27"} />
        </div>
        <div className="f_1 f_m_1  start items_center mobilepad_l24  btn hover " onClick={() => history.push('/')}>Sign in<div className="to_hover fore_11   start items_center mobilepad_l24">Sign in</div></div>
      </div> */}
    </div>

    <div className="row end items_center">
      <div className="border_3 row">
        <input className="f_0   back_2 corebox_1 pad_l28 fore_11 f400 " placeholder="Search ..." />
        <div className="back_2 row center corebox_x2 ">
          <div className="maskicon_search  back_11" />
        </div>
      </div>
    </div>
  </div>
}