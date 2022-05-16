import {Card, CardBody, CardImg, CardTitle, CardText, Button, CardFooter} from "reactstrap";
import "./styles.css"
import {BACKEND_URL} from "../../../const";
import moment from 'moment';
import {StatusBtn} from "./StatusBtn";

export const CardComponent = ({todo: {title, description, _id, created_at, status}}) => {

    const handleDeleteTask = (e) => {
        const {target} = e;
        const taskId = target.dataset.id;
        fetch(`${BACKEND_URL}/task/${taskId}`, {
            method: "DELETE"
        })
            .then((response) => response.json())
            .then(response => console.log(response))
            .then(() =>
                document.getElementById(taskId).remove()
            )

    }


    return (
        <Card className="custom-card" id={_id}>
            <CardImg
                alt="Card image"
                src="https://picsum.photos/318/180"
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{description}</CardText>
                <CardText className="date">Created at: {moment(created_at).format("DD/MM/YYYY")}</CardText>
                <CardFooter>
                    <StatusBtn status={status}/>
                    <Button data-id={_id} onClick={handleDeleteTask}>Delete</Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
}