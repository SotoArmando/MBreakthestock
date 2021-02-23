import React, { useState } from 'react';

export default function Visitedmarketnews({category,datetime,headline,related,source,image,summary,url,basis}) {


    const loaded = (ev,v) => 
    {
    
        const e = (ev.target.getBoundingClientRect().width / ev.target.getBoundingClientRect().height) > 1.7
        // if (e) { setBasis(mybasis * 2) }
    }



    

    return <div className="col corebox_16 mobilecorebox_22 center items_start  border_t4 pad_b30 pad_t30 mobilepad_l24 pad_l24 btn" style={{flexBasis:basis + 'px',maxWidth:basis + 'px'}}>
    <a className="allsize col   space_between fore_11 pad_r15" target='_tab' href={url}>
        {/* <div  className="corebox_17 borderradius_top_25" style={{background:"url("+image+")",width:"100%",backgroundPosition:'center', backgroundSize:'cover'}}  onLoad={loaded}/> */}
        <div className="col    pad_b23 ">
            <div className="col start allwidth mar_b15">
                <span className="f_0 fore_green f600 capitalize">{category}</span>
            </div>
            <div className="row center space_between allwidth mar_t19">
                <span className="f_0 f400 fore_13  "><span className="fore_green f600">{source} {new Date(datetime * 1000).toLocaleDateString()}</span> <span className="f_0 ls_27 fw400" >{headline}</span>.</span>
            </div>
        </div>
       
     
    </a>
</div>
}

{/* <span className="maskicon_launch iconsize_28 mar_r19"/> */}