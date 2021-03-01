import { toggleFilter } from '../Queryselector'


function Filter({  }) {
    return <div id="filter_0" className="row space_between back_10 corebox_5  mobilecorebox_16 center pad_l24 pad_r24 nav onactive_0">
        <span onMouseDown={toggleFilter} className="bidcorebox_4 row items_center"><span className="maskicon_back"></span></span>
        <input type="text" placeholder="Search" className="f_0 corebox_7 corebox_x24 mobilecorebox_13   border_0 borderradius_20 pad_l24" />
        <span onMouseDown={toggleFilter} className="bidcorebox_4 row items_center"></span>
    </div>
}

function Select({ name, value, options, openable, addstate }) {
    return <div className="corebox_5  row items_center space_between f_2 f600 pad_l24 pad_r24">
        <div className="row">
            <span className="f_3 f_m_2 f500">{name}</span>
            <span className="mar_l24 row f_0 fore_14 items_center">{value}</span>
        </div>
        { openable ? <div className="f_0 fore_6 f500 underline btn">Continue</div> : "" }
    </div>
}

export { Filter, Select } 