import { BACKEND_URL } from "../const";
import {getToken} from "../helpers";

function get(url) {
    return fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${getToken()}`
        }
    })
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