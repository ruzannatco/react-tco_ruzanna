import {FilterSection} from "./FilterSection";
import {MainSection} from "./MainSection";
import "./styles.css";
import { useEffect, useState} from "react";
import {getTasksRequest} from "../../api";

export const Project = () => {
    /* Local State */
    const [tasks, setTasks] = useState([]);
    const [filterRequest, setFilterRequest] = useState({});

    /* useEffects */
    useEffect(() => {
        getTasksRequest().then((data) => {
            setTasks(data);
        });
    }, []);

    useEffect(()=>{
        console.log("after added", filterRequest)
        if(filterRequest){
             let queryString = '';
             for(let [name, value] of Object.entries(filterRequest)) {
                 queryString += `${name}=${value}&`;
             }
             getTasksRequest(queryString).then((data) => {
                 setTasks(data);
             });
         }

     }, [filterRequest])

    const getTasks = (filterEntries) => {
        const [name, value] = filterEntries;
        setFilterRequest(prev => ({...prev, [name]: value}));
    }

    return (
        <div className="project-layout">
            <FilterSection tasks={tasks} setTasks={setTasks} getTasks={getTasks} />
            <MainSection tasks={tasks} setTasks={setTasks} getTasks={getTasks}/>
        </div>
    );
};
