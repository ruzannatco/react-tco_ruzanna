import {useCallback, useState} from "react";
import {DeleteTaskContext} from "../../index";

export const DeleteTaskContextProvider = ({children}) => {
    const [deletedTasksSet, setDeletedTasksSet] = useState(new Set());

    const toggleDeleteTask = useCallback((_id) =>{
        setDeletedTasksSet((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(_id)) {
                newSet.delete(_id);
            } else {
                newSet.add(_id);
            }
            return newSet;
        })
    }, [])

    return (
        <DeleteTaskContext.Provider value={{
            deletedTasksSet,
            setDeletedTasksSet,
            toggleDeleteTask
        }}
        >
            {children}
        </DeleteTaskContext.Provider>
    )
}