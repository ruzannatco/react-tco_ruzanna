import "./styles.css";
import { CardComponent } from "../../CardComponent";
import {useCallback, useContext, useState} from "react";
import { EditModal } from "./EditModal";
import {DeleteTaskContext} from "../../../../context";
import {Button} from "reactstrap";
import {connect} from "react-redux";
import {
    removeMultipleTasksThunk,
    removeSingleTaskThunk,
    updateStatusByIdThunk,
} from "../../../../redux/actions/task-actions";

//componentDidMount (Works only one time)
// useEffect(() => {
// }, []);

//componentDidUpdate (Works after any update)
// useEffect(() => {
// });

const ConnectedBody = ({tasks, removeMultipleTasks, removeSingleTask, updateStatusById}) => {
    const [editableTask, setEditableTask] = useState(null);
    const {deletedTasksSet, setDeletedTasksSet} = useContext(DeleteTaskContext);

    const handleDeleteTask = useCallback((_id) => {
        removeSingleTask(_id);
    }, [removeSingleTask])

    const handleStatusChange = useCallback((_id, status) => {
        updateStatusById(_id, status)
    }, [updateStatusById])

    const handleBatchDelete = () => {
        const batchDelTasks = Array.from(deletedTasksSet);
        removeMultipleTasks(batchDelTasks)
        setDeletedTasksSet(new Set());
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
    removeMultipleTasks: (deletedTasksIds) => dispatch(removeMultipleTasksThunk(deletedTasksIds)),
    removeSingleTask: (deletedTaskId) => dispatch(removeSingleTaskThunk(deletedTaskId)),
    updateStatusById: (updatedTask) => dispatch(updateStatusByIdThunk(updatedTask))
})

export const Body = connect(mapStateToProps, mapDispatchToProps)(ConnectedBody)
