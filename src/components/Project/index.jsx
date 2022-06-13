import {FilterSection} from "./FilterSection";
import {MainSection} from "./MainSection";
import "./styles.css";
import {useCallback, useEffect, useState} from "react";
import {generateQuery} from "../../helpers";
import {connect} from "react-redux";
import { getTasksThunk } from "../../redux/actions/task-actions";

const ConnectedProject = ({getTaks}) => {
    /* Local State */
    const [filterRequest, setFilterRequest] = useState({});

    /* useEffects */
    useEffect(() => {
        const query = generateQuery(filterRequest);
        getTaks(query)
    }, [filterRequest, getTaks]);

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
    getTaks: getTasksThunk
})(ConnectedProject)


