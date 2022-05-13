import { BACKEND_URL } from "../const";

function get(url) {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            return data;
        });
}

export function getTasks() {
    return get(`${BACKEND_URL}/task`)
}