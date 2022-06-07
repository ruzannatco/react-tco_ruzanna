import {FilterSection} from "./FilterSection";
import {MainSection} from "./MainSection";
import "./styles.css";
import {useCallback, useEffect, useState} from "react";
import {getTasksRequest} from "../../api";
import {generateQuery} from "../../helpers";
import {connect} from "react-redux";
import {setTasksAction} from "../../redux/actions/task-actions";

const ConnectedProject = ({setTasks}) => {
    /* Local State */
    const [filterRequest, setFilterRequest] = useState({});

    /* useEffects */
    useEffect(() => {
        const query = generateQuery(filterRequest);

        getTasksRequest(query).then((data) => {
            setTasks(data);
        });
    }, [filterRequest, setTasks]);

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
            <MainSection setFilterField={setFilterField}/>
        </div>
    );
};

export const Project = connect(null, {
    setTasks: setTasksAction
})(ConnectedProject)


