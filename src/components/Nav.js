import {toggleFilter} from '../Queryselector'

export default function Nav({title,titleback}) {
    return <div className="row space_between back_10 corebox_9 mobilecorebox_16 center pad_l24 pad_r24 nav">
        <span className="bidcorebox_4 row items_center">{(titleback === "") ? "" : <span><span className="maskicon_back"></span> {titleback}</span>}</span>
        <span className="f_2 f600">{title}</span>
        <span className="maskicon_search" onMouseDown={toggleFilter}></span>
    </div>
}