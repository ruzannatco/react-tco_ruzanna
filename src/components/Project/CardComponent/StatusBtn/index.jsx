import {Button} from "reactstrap";
import {useState} from "react";
import {BACKEND_URL} from "../../../../const";

export const StatusBtn = ({status}) => {
    const [taskStatus, setTaskStatus] = useState(status);
    const handleStatusChange = (e) => {
        const {target} = e;
        const taskId = target.closest('.card').getAttribute('id');
        fetch(`${BACKEND_URL}/task/${taskId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'done'
            })
        })
            .then(res => {
                return res.json()
            })
            .then(data => {
                setTaskStatus("done" )
                target.dataset.status = data.status;
                target.setAttribute("disabled", "");
                target.classList.remove('btn-outline-secondary')
                target.classList.add('btn-secondary')
            })
    }
    return (
        <div>
            {status === "active" ?
                <Button outline onClick={handleStatusChange} data-status={taskStatus}>Done</Button> :
                <Button data-status={taskStatus} disabled>Done</Button>}
        </div>
    );
}