import {Body} from "./Body";
import {Head} from "./Head";
import "./styles.css";
import {useEffect, useState} from "react";
import { getFilteredTasks, getTasks } from "../../../api";

export const MainSection = () => {
    /* Local State */
    const [tasks, setTasks] = useState([]);

    /* useEffects */
    useEffect(() => {
        getTasks().then((data) => {
            setTasks(data);
        });
    }, []);

    const handleSelect = (e) => {
        const {value} = e.target;

        getFilteredTasks(`sort=${value}`).then((data) => {
            setTasks(data);
        });
    }

    const handleSearchChange = (e) => {
        const {value} = e.target;

        getFilteredTasks(`search=${value}`).then((data) => {
            setTasks(data);
        });
    }

    return (
        <div className="main">
            <Head setTasks={setTasks} handleSelect={handleSelect} handleSearchChange={handleSearchChange} />
            <Body tasks={tasks} setTasks={setTasks}/>
        </div>
    );
};
