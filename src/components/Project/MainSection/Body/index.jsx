import "./styles.css";
import { CardComponent } from "../../CardComponent";
import {useCallback, useContext, useState} from "react";
import { BACKEND_URL } from "../../../../const";
import { EditModal } from "./EditModal";
import {MainTaskContext} from "../../../../context";

//componentDidMount (Works only one time)
// useEffect(() => {

// }, []);

//componentDidUpdate (Works after any update)
// useEffect(() => {

// });

export const Body = () => {
    const {tasks, setTasks} = useContext(MainTaskContext)
    const [editableTask, setEditableTask] = useState(null);


    const handleDeleteTask = useCallback((_id) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: "DELETE"
        })
            .then(() => {
                setTasks(prev => {
                    return prev.filter(task => {
                        return task._id !== _id
                    })
                })
            })

    }, [])

    const handleStatusChange = useCallback((_id, status) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTasks(prev => {
                    return prev.map(item => {
                        if (item._id === data._id) {
                            return data
                        }
                        return item
                    })
                })
            })
    }, [])

    return (
        <div className="main-body">
            <div className="card-list">
                {tasks.map((todo) => {
                    return <CardComponent
                        key={todo._id}
                        todo={todo}
                        handleDeleteTask={handleDeleteTask}
                        handleStatusChange={handleStatusChange}
                        setEditableTask={setEditableTask}

                    />
                })}
                {
                    !!editableTask && <EditModal
                        editableTask={editableTask}
                        onClose={() => {
                            setEditableTask(null)
                        }}
                    />
                }

            </div>
        </div>
    );
};
