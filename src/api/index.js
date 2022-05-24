import { BACKEND_URL } from "../const";

function get(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}

export function getTasksRequest(query) {
    return get(`${BACKEND_URL}/task${query ? `?${query}` : ''}`);
}

export function getFilteredTasks(filter) {
    return get(`${BACKEND_URL}/task?${filter}`)
}