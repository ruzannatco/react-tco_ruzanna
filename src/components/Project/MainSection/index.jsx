import {Body} from "./Body";
import {Head} from "./Head";
import "./styles.css";
import {useEffect, useState} from "react";
import { getTasks } from "../../../api";

export const MainSection = () => {
    /* Local State */
    const [tasks, setTasks] = useState([]);

    /* useEffects */
    useEffect(() => {
        getTasks().then((data) => {
            setTasks(data);
        });
    }, []);

    return (
        <div className="main">
            <Head setTasks={setTasks} />
            <Body tasks={tasks} />
        </div>
    );
};
