import {FilterSection} from "./FilterSection";
import {MainSection} from "./MainSection";
import "./styles.css";
import {useCallback, useEffect, useState} from "react";
import {getTasksRequest} from "../../api";
import {generateQuery} from "../../helpers";

export const Project = () => {
    /* Local State */
    const [tasks, setTasks] = useState([]);
    const [filterRequest, setFilterRequest] = useState({});

    /* useEffects */
    useEffect(() => {
        const query = generateQuery(filterRequest);

        getTasksRequest(query).then((data) => {
            setTasks(data);
        });
    }, [filterRequest]);

    const setFilterField = useCallback((filterEntries) => {
        const [name, value] = filterEntries;

        setFilterRequest((prev) => {
            if (!value) {
                const newFilterRequest = { ...prev };
                delete newFilterRequest[name];
                return newFilterRequest;
            }

            if (prev[name] !== value) {
                return {
                    ...prev,
                    [name]: value,
                };
            }
        });
    }, [])

    return (
        <div className="project-layout">
            <FilterSection setFilterField={setFilterField} />
            <MainSection tasks={tasks} setTasks={setTasks} setFilterField={setFilterField}/>
        </div>
    );
};
