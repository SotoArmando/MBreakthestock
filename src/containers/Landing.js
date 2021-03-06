import { useState } from 'react';

export default function Landing() {
    // back_grad_9
    let component = <div className="row corebox_17 mobilecorebox_15 back_size_0 pic_e  start items_center pad_l34 pad_r34 pad_b30 pad_t30  mobilepad_b0 mobilepad_t0 mobilepad_l29 mobilepad_r29 mobilepad_d29">
        <div className="col maxedcorebox_x15">
            <span className="fore_11 f_6 f_m_4 f700 lh_2 mobilelh_1  ">Welcome to Brainspace,<br /> a Sample Project.</span>
            <span className=" pad_t24 f_3 f_m_2">Built for great bones and lightning load speed</span>
            <div className="col center items_start corebox_5">
                <span className="btn corebox_3 corebox_x8 border_3 row center f500" >Read More</span>
            </div>
        </div>
        
    </div>

    const content = ["back_19", "back_4", "back_red"]
    const contentl = content.length;
    
    const swap = (n) => n < 0 ? contentl - 1 : n % contentl;

    let [movement, setMovement] = useState(0);
    let [active, setActive] = useState(0);
    let position = (((1 / 5) * 100) * 2) + movement;

    const u = ((1 / 5) * 100);

    
    const mapActive = (active, last) => {
        let className = !last ? " mar_r24 " : "";
        return <div className={className + "bidcorebox_0 back_17 borderradius_27"} style={{ opacity: active ? 0.96 : 0.24 }} />
    }

    return <div className="col relative corebox_17 mobilecorebox_15 hover">

        <div className="absolute row center bodywidth_x5" style={{ transitionTimingFunction:"cubic-bezier(0.075, 0.82, 0.165, 1)", transform: "translateX(" + (position * -1) + "%" + ")", transition: 'transform 300ms', willChange: "transform" }}>
            <div className="absolute row center bodywidth_x5 Landingaxis_1" style={{ flexBasis: u + "%", transform: "translateX(" + movement + "%)"}}>
                {[-1, 0, 1].map(e => <div className={content[swap(active + e)] + (e != 0 ? " ": "")} style={{ flexBasis: u + "%" }}  >{component}
                 
                </div>)}
            </div>
        </div>

        <div style={{ pointerEvents: "None", opacity: 0 }}>{component}</div>

        <div className="absolute bottom row center corebox_4 mobilecorebox_1 to_hover bottom" style={{zIndex:3}}>
            <div className="corebox_x7 underline center fore_14" onClick={() => { setMovement(movement - u); setTimeout(setActive(swap(active - 1)), 300) }}>Previous</div>
            {
                [0, 0, 0].map((e, i) => mapActive(active === i, i + 1 === contentl))
            }
            <div className="corebox_x4 underline center fore_14" onClick={() => { setMovement(movement + u); setTimeout(setActive(swap(active + 1)), 300) }}>Next</div>
        </div>
    </div>;
}