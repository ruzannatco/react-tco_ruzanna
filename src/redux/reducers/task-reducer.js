const initialState = {
    tasks: []
}

export const taskReducer = ((state = initialState, action) => {
    switch (action.type) {
        case "SET_TASKS" : {
            return {
                ...state,
                tasks: action.payload
            }
        }
        case "REMOVE_MULTIPLE_TASKS" : {
            const deletedTasksIds = action.payload
            const tasks = state.tasks.filter(task => !deletedTasksIds.includes(task._id))
            return {
                ...state,
                tasks
            }
        }
        case "REMOVE_SINGLE_TASK" : {
            const deletedTaskId = action.payload
            const tasks = state.tasks.filter(task => task._id !== deletedTaskId)
            return {
                ...state,
                tasks
            }
        }
        case 'ADD_NEW_TASK': {
            const newTask = action.payload
            const tasks = [...state.tasks, newTask]
            return {
                ...state,
                tasks
            }
        }

        case "UPDATE_TASK_BY_ID" : {
            const updatedTask = action.payload
            const tasks = state.tasks.map(task => {
                if (task._id === updatedTask._id) {
                    return updatedTask
                }
                return task
            })
            return {
                ...state,
                tasks
            }
        }

        default:
            return state;
    }
})