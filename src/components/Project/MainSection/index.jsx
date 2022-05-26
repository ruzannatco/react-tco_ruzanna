import {Body} from "./Body";
import {Head} from "./Head";
import "./styles.css";

export const MainSection = ({tasks, setTasks, setFilterField}) => {
    return (
        <div className="main">
            <Head setTasks={setTasks} setFilterField={setFilterField} />
            <Body tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};
