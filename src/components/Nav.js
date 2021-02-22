import {toggleFilter} from '../Queryselector'

export default function Nav({title,titleback}) {
    return <div className="row space_between corebox_10 mobilecorebox_16 center pad_l24 pad_r24 nav">
        <span className="bidcorebox_4 row items_center ">{(titleback === "") ? "" : <span><span className="maskicon_back"></span> {titleback}</span>}</span>
        <span className="f_3 f600 ls_26 ">
            <div className="svgicon_icon iconsize_32 mar_r20"/>
            {title}</span>
        <span className="" onMouseDown={() => {}}></span>
    </div>
}