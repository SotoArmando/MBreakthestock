import React, { useState } from 'react';

export default function Visitedmarketnews({category,datetime,headline,related,source,image,summary,url,basis}) {


    const loaded = (ev,v) => 
    {
        debugger;
        const e = (ev.target.getBoundingClientRect().width / ev.target.getBoundingClientRect().height) > 1.7
        // if (e) { setBasis(mybasis * 2) }
    }



    

    return <div className="col corebox_16 mobilecorebox_22 center items_start pad_l24 pad_r24  pad_b30 btn" style={{flexBasis:basis + 'px',maxWidth:basis + 'px'}}>
    <a className="allsize back_2 col   space_between borderradius_25 fore_4" target='_tab' href={url}>
        {/* <div  className="corebox_17 borderradius_top_25" style={{background:"url("+image+")",width:"100%",backgroundPosition:'center', backgroundSize:'cover'}}  onLoad={loaded}/> */}
        <div className="col pad_l26 pad_r26 pad_t23 pad_b23 ">
            <div className="col start allwidth mar_b15">
                <span className="f_0 fore_green f600 capitalize">{category}</span>
            </div>
            <div className="row center space_between allwidth mar_t19">
                <span className="f_0 f400 fore_7  "><span className="fore_green f600">{source} {new Date(datetime * 1000).toLocaleDateString()}</span> <span className="f_0 ls_27 fw400" >{headline}</span>.</span>
            </div>
        </div>
       
     
    </a>
</div>
}

{/* <span className="maskicon_launch iconsize_28 mar_r19"/> */}