import { useState } from 'react';

export default function Landing() {
    let component = <div className="col corebox_18 mobilecorebox_14 center items_start pad_l34 pad_r34 pad_b30 pad_t30 back_grad_9 mobilepad_b34 mobilepad_t34 mobilepad_l29 mobilepad_r29 mobilepad_d29">
        <span className="fore_11 f_6 f_m_4 f700 lh_2 ">Welcome to my Brainspace<br /> a Sample Project.</span>
        <span className=" pad_t24 f_3 f_m_2">Flex those bones</span>
    </div>

    const content = ["back_3", "back_green", "back_red"]
    const contentl = 3;

    const swap = (n) => n < 0 ? contentl - 1 : n % contentl;

    let [movement, setMovement] = useState(0);
    let [active, setActive] = useState(0);
    let position = (((1 / 5) * 100) * 2) + movement;

    const u = ((1 / 5) * 100);


    const mapActive = (active, last) => {
        let className = !last ? " mar_r24 " : "";
        return <div className={className + "bidcorebox_1 back_green borderradius_27"} style={{ opacity: active ? 0.96 : 0.24 }} />
    }

    return <div className="col relative corebox_18 mobilecorebox_14">
        <div className="absolute row center bodywidth_x5" style={{ transform: "translateX(" + (position * -1) + "%" + ")", transition: 'transform 300ms' }}>
            <div className="absolute row center bodywidth_x5" style={{ flexBasis: u + "%", transform: "translateX(" + movement + "%)" }}>
                {[-2, -1, 0, 1, 2].map(e => <div className={content[swap(active + e)]} style={{ flexBasis: u + "%" }} >{component}</div>)}
            </div>
        </div>

        <div className="absolute bottom row center corebox_4">
            <div className="corebox_x7 center" onClick={() => { setMovement(movement - u); setTimeout(setActive(swap(active - 1)), 300) }}>Previous</div>
            {
                [0, 0, 0].map((e, i) => mapActive(active === i, i + 1 === contentl))
            }
            <div className="corebox_x4 center" onClick={() => { setMovement(movement + u); setTimeout(setActive(swap(active + 1)), 300) }}>Next</div>
        </div>
    </div>;
}