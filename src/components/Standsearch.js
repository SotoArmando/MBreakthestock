import { connect } from 'react-redux';
import { useState } from 'react/cjs/react.development';
import Calendarevent from './Calendarevent';
import Marketnews from './Marketnews';
import Symbol from './Symbol';

function Standsearch(props) {
    const { history, events, crypto, forex, news, addstate, isStandsearchactive, handleStandsearch } = props;

    const className = "Standsearch nav allsize column center items_start back_12 maxheight " + (isStandsearchactive ? " active" : "");

    return <div className={className}>
        <div className="bodywidth col mobilepad_l15 mobilepad_r15 back_15 ">
            <div className="col">
                <div className="row corebox_1 end items_center"><span className="corebox_x1 row center f500 f_1 fore_11 btn" onClick={() => handleStandsearch()} >X</span></div>
                <div className="row corebox_4 mobilecorebox_4  center">
                    <div className="border_3 row allsize corebox_2 back_2 ">
                        <form className="corebox_2 mobilecorebox_3"><input className="f_0 corebox_2 mobilecorebox_3 allsize pad_l24 fore_11 f400 " placeholder="Search" /></form>
                        <div className=" row center corebox_x2 ">
                            <div className="maskicon_search  back_17" />
                        </div>
                    </div>
                </div>
                <div className="row back_2 wrap basis_43 corebox_11 center items_center pad_b30">
                    {
                        (Object.entries(events || {}).length === 0) ? 'Loading' : Object.entries(events).slice(0, 8).map(e => <Calendarevent {...e[1]} addstate={addstate} />)
                    }
                </div>

                <div className="row wrap basis_43">
                    {
                        (Object.entries(news || {}).length === 0) ? 'Loading' : Object.entries(news).slice(0, 12).map(({ 1: e }) => <Marketnews {...e} />)
                    }
                </div>

                <div className="row wrap basis_42 back_grad_9">
                    {
                        (Object.entries(crypto || {}).length === 0) ? 'Loading' : Object.entries(crypto).slice(0, 12).map(({ 1: e }, i) => <Symbol {...e} {...{ isFirst: i === 1, isCrypto: true, addstate: addstate }} />)
                    }
                </div>
                <div className="row wrap basis_42 back_grad_9">
                    {
                        (Object.entries(forex || {}).length === 0) ? 'Loading' : Object.entries(forex).slice(0, 12).map(({ 1: e }, i) => <Symbol {...e} {...{ isFirst: i === 0, isCrypto: false, addstate }} />)
                    }
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    addstate: (payload, key = "null") => dispatch({ type: 'state/add', payload, key }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Standsearch)