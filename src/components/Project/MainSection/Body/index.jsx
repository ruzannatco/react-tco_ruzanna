import "./styles.css";
import {CardComponent} from "../../CardComponent";
import { useCallback, useState } from "react";
import { BACKEND_URL } from "../../../../const";
import { EditModal } from "./EditModal";

//componentDidMount (Works only one time)
// useEffect(() => {

// }, []);

//componentDidUpdate (Works after any update)
// useEffect(() => {

// });

export const Body = ({tasks, setTasks}) => {
    const [editableTask, setEditableTask] = useState([]);
    const [toggleEditModal, setToggleEditModal] = useState(false);

    const handleEditModal = () =>toggleEditModal ? setToggleEditModal(false) : setToggleEditModal(true);

    const handleDeleteTask = useCallback((_id) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: "DELETE"
        })
            .then(() => {
                setTasks(prev=>{
                    return prev.filter(task => {
                        return task._id !== _id
                    })
                })
            })

    },[])

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
                setTasks(prev=>{
                    return prev.map(item=>{
                        if(item._id === data._id) {
                            return data
                        }
                        return item
                    })
                })
            })
    },[])

    return (
        <div className="main-body">
            <div className="card-list">
                {tasks.map((todo) => {
                    return <CardComponent key={todo._id} todo={todo}
                                          handleDeleteTask={handleDeleteTask}
                                          handleStatusChange={handleStatusChange}
                                          setEditableTask={setEditableTask}
                                          handleEditModal={handleEditModal} />
                })}
                <EditModal editableTask={editableTask}
                           toggleEditModal={toggleEditModal}
                           handleEditModal={handleEditModal}
                           setTasks={setTasks} onClose={() => {
                    setToggleEditModal(false)
                }}/>
            </div>
        </div>
    );
};
