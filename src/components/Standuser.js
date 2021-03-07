export default function Standuser({ history, isScrollCero, handleStandsearch }) {
  return <div id="topanchor" className="row basis_44 corebox_3 mobilecorebox_4 start fore_14 space_between items_center" >
    <div className="row start items_center space_between mobilepad_r24 maxedviewwidth ">
      <div className="f_0 corebox_2 row wrap items_center f500">
        <span className="corebox_x7 center">TODO</span>
        <span className="corebox_x8 center">* News index</span>
        <span className="corebox_x8 center">* Events index</span>
        <span className="corebox_x8 center">* About page</span>
        <span className="corebox_x8 center">* Footer links</span>
        <span className="corebox_x8 center">* Search func</span>
        <span className="corebox_x8 center">* Social links</span>
      </div>
    </div>

    <div className="row end items_center">
      <div className="border_3 row" >
        <input type="button" className="f_0   back_2 corebox_1 pad_l24 fore_11 f400 btn" onClick={() => handleStandsearch()} value="Search ..." />
        <div className="back_2 row center corebox_x2 ">
          <div className="maskicon_search  back_11" />
        </div>
      </div>
    </div>
  </div>
}