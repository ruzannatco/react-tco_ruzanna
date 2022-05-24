import "./styles.css";
import {HeadRight} from "./HeadRight";

export const Head = ({setTasks, getTasks}) => {
    return <div className="main-head">
        <h1>Project Tasks</h1>
        <HeadRight setTasks={setTasks} getTasks={getTasks} />
    </div>;
};
