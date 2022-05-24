import {Body} from "./Body";
import {Head} from "./Head";
import "./styles.css";

export const MainSection = ({tasks, setTasks, getTasks}) => {
    return (
        <div className="main">
            <Head setTasks={setTasks} getTasks={getTasks} />
            <Body tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};
