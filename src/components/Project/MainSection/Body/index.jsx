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

export const Body = ({tasks,setTasks}) => {
    const [editableTask, setEditableTask] = useState(null);
    // setEditableTask(prev=>{
    //         tasks.filter((task) => {
    //             return prev = task._id === _id
    //     });

    const handleDeleteTask = useCallback((_id) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(response =>{
                setTasks(prev=>{
                    prev.map((item) => {
                        if(item._id === _id){
                            return response
                        }
                        return item
                    });
                })
            })
            

    },[])

    const handleStatusChange = useCallback((_id, statusState) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: statusState
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTasks(prev=>{
                    prev.filter((task) => {
                        return task._id !== data._id
                    });
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
                      setEditableTask={setEditableTask} />
                })}
                <EditModal editableTask={editableTask} setTasks={setTasks} setEditableTask={setEditableTask}/>
            </div>
        </div>
    );
};
