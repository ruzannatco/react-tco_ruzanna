import {useState} from "react";
import {MainTaskContext} from "../../index";

export const MainTaskContextProvider = ({children}) => {
    const [tasks, setTasks] = useState([]);

    return (
        <MainTaskContext.Provider value={{
            tasks,
            setTasks
        }}
        >
            {children}
        </MainTaskContext.Provider>
    )
}
