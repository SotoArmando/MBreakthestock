export default function Visitedmarketnews({category,datetime,headline,related,source,summary,url,basis}) {

    return <div className="col corebox_16 mobilecorebox_22 center items_start pad_l24 pad_r24 pad_b27 btn" style={{flexBasis:basis + 'px'}}>
    <a className="allsize back_10 col boxshadow_24 pad_l26 pad_r26 pad_t23 borderradius_25 fore_4" target='_tab' href={url}>
        
        <div className="col start allwidth mar_b15">
            <span className="f_0 fore_8 f600 capitalize">{category}</span>
            <span className="f500 fore_8 ">{new Date(datetime * 1000).toDateString()}</span>
        </div>
        <div className="row center space_between allwidth mar_t19">
            <span className="f_0 f500 fore_5 capitalize justify "><span className="fore_green f600">{source} | </span>{headline}.</span>
        </div>
     
    </a>
</div>
}

{/* <span className="maskicon_launch iconsize_28 mar_r19"/> */}