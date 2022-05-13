import {Card, CardBody, CardImg, CardTitle, CardText, Button, CardFooter} from "reactstrap";
import "./styles.css"
import {BACKEND_URL} from "../../../const";
import {getTasks} from "../../../api";

export const CardComponent = ({todo: {title, description, _id}, setTasks}) => {

    const handleDeleteTask = (e) => {
        const {target} = e;
        const taskId = target.dataset.id;
        fetch(`${BACKEND_URL}/task/${taskId}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(response => console.log(response))

        getTasks().then((data) => {
            setTasks(data);
        });
    }
    return (
        <Card className="custom-card" data-id={_id}>
            <CardImg
                alt="Card image"
                src="https://picsum.photos/318/180"
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{description}</CardText>
                <CardFooter>
                    <Button outline>Done</Button>
                    <Button data-id={_id} onClick={handleDeleteTask}>Delete</Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
}