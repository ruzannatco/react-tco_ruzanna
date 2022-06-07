import "./styles.css";
import { CardComponent } from "../../CardComponent";
import {useCallback, useContext, useState} from "react";
import { BACKEND_URL } from "../../../../const";
import { EditModal } from "./EditModal";
import {DeleteTaskContext} from "../../../../context";
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {
    removeMultipleTasksAction,
    removeSingleTaskAction,
    updatedTaskByIdAction,
} from "../../../../redux/actions/task-actions";

//componentDidMount (Works only one time)
// useEffect(() => {
// }, []);

//componentDidUpdate (Works after any update)
// useEffect(() => {
// });

const ConnectedBody = ({tasks, removeMultipleTasks, removeSingleTask, updatedTaskById}) => {
    const [editableTask, setEditableTask] = useState(null);
    const {deletedTasksSet} = useContext(DeleteTaskContext);

    const handleDeleteTask = useCallback((_id) => {
        fetch(`${BACKEND_URL}/task/${_id}`, {
            method: "DELETE"
        })
            .then(() => {
                removeSingleTask(_id);
                // setTasks(prev => {
                //     return prev.filter(task => {
                //         return task._id !== _id
                //     })
                // })
            })

    }, [removeSingleTask])

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
                updatedTaskById(data)
                // setTasks(prev => {
                //     return prev.map(item => {
                //         if (item._id === data._id) {
                //             return data
                //         }
                //         return item
                //     })
                // })
            })
    }, [updatedTaskById])

    const handleBatchDelete = () => {
        const batchDelTasks = Array.from(deletedTasksSet);
        fetch(`${BACKEND_URL}/task`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                tasks: batchDelTasks
            })
        })
            .then((res) => {res.json()})
            .then(() => {
                removeMultipleTasks(batchDelTasks)
                // setTasks((prev) => {
                //     return prev.filter((task) => !batchDelTasks.includes(task._id))
                // })
            })
    }

    return (
        <>
            {!!deletedTasksSet.size && (
                <div className="delete_btn">
                    <Button color="danger" onClick={handleBatchDelete}>Delete All</Button>
                </div>
            )}
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
                            updatedTaskById = {updatedTaskById}
                            onClose={() => {
                                setEditableTask(null)
                            }}
                        />
                    }

                </div>
            </div>
        </>

    );
};

const mapStateToProps = (state) => ({
    tasks: state.taskReducerState.tasks
})
const mapDispatchToProps = (dispatch) => ({
    removeMultipleTasks: (deletedTasksIds) => dispatch(removeMultipleTasksAction(deletedTasksIds)),
    removeSingleTask: (deletedTaskId) => dispatch(removeSingleTaskAction(deletedTaskId)),
    updatedTaskById: (updatedTasks) => dispatch(updatedTaskByIdAction(updatedTasks))
})

export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody)
