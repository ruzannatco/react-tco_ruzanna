import "./styles.css";
import {HeadRight} from "./HeadRight";

export const Head = ({setTasks, handleSelect, handleSearchChange}) => {
    return <div className="main-head">
        <h1>Project Tasks</h1>
        <HeadRight setTasks={setTasks} handleSelect={handleSelect} handleSearchChange={handleSearchChange} />
    </div>;
};
