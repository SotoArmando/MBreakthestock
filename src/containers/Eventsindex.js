import Standnavigator from "../components/Standnavigator";
import Standuser from "../components/Standuser";

export default function Eventsindex({ history, isScrollCero }) {
    return <div className="col back_15">
        <Standnavigator history={history} isScrollCero={isScrollCero} />
    </div>
}