import { toggleFilter } from '../Queryselector'
import { useHistory } from "react-router-dom";
import Standnavigator from './Standnavigator';

export default function Nav({ title, titleback, isScrollCero }) {
    const history = useHistory();
    return <div>
        <div className={"row center  nav" + (isScrollCero ? " " : " back_2")} style={{ willChange: "background-color", pointerEvents: (isScrollCero ? 'none' : '') }}>
            <div className="row wrap space_between center bodywidth basis_30 ">
                <Standnavigator history={history} isScrollCero={!isScrollCero} />    
            </div>
        </div>
    </div>
}