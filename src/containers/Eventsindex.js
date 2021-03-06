import Standnavigator from "../components/Standnavigator";
import Standuser from "../components/Standuser";

export default function Eventsindex({ history, isScrollCero }) {
    return <div className="col back_15">
        <Standuser />
        <Standnavigator history={history} isScrollCero={isScrollCero} />
    </div>
}