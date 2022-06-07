import { getTasksRequest } from "../../api";
import { BACKEND_URL } from "../../const";

export const setTasksAction = (tasks) => {
    return {
        type: 'SET_TASKS',
        payload: tasks
    }
}

export const removeMultipleTasksAction = (tasksIds) => {
    return {
        type: 'REMOVE_MULTIPLE_TASKS',
        payload: tasksIds
    }
}

export const removeSingleTaskAction = (tasksIds) => {
    return {
        type: 'REMOVE_SINGLE_TASK',
        payload: tasksIds
    }
}

export const addNewTaskAction = (newTask) => {
    return {
        type: 'ADD_NEW_TASK',
        payload: newTask
    }
}

export const updatedTaskByIdAction = (updatedTask) => {
    return {
        type: 'UPDATE_TASK_BY_ID',
        payload: updatedTask
    }
}

// Redux thunks

export const getTasksThunk = (query) => (dispatch, getState) => {
    getTasksRequest(query).then((data) => {
      dispatch(setTasksAction(data));
    });
  };

  export const addNewTaskThunk = (formData, onSubmitCallback) => (dispatch, getState) => {
    fetch(`${BACKEND_URL}/task`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(addNewTaskAction(data))
            onSubmitCallback();
        })
  }

  export const removeMultipleTasksThunk = (batchDelTasks) => (dispatch, getState) => {
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
            dispatch(removeMultipleTasksAction(batchDelTasks))
        })
  }
  

  export const removeSingleTaskThunk = (_id) => (dispatch, getState) => {
    fetch(`${BACKEND_URL}/task/${_id}`, {
        method: "DELETE"
    })
        .then(() => {
            dispatch(removeSingleTaskAction(_id))
        })
  }

  export const updateTaskByIdThunk = (_id, formData, onCloseModal) => (dispatch, getState) => {
    fetch(`${BACKEND_URL}/task/${_id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then(data => {
        dispatch(updatedTaskByIdAction(data))
        onCloseModal()
    })
  }

  export const updateStatusByIdThunk = (_id, status) => (dispatch, getState) => {
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
            dispatch(updatedTaskByIdAction(data))
        })
  }