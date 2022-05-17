import {Card, CardBody, CardImg, CardTitle, CardText, Button, CardFooter} from "reactstrap";
import "./styles.css"
import {BACKEND_URL} from "../../../const";
import moment from 'moment';
import {StatusBtn} from "./StatusBtn";

export const CardComponent = ({todo,
    handleDeleteTask ,
     handleStatusChange,
     setEditableTask}) => {
         
    const {title, description, _id, created_at, status} = todo
    const statusState = status === "active" ? "done" : "active";
    
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
                    {/* <StatusBtn status={status}/> */}
                    <Button outline onClick={()=>handleStatusChange(_id, statusState)} data-status={status}>{status}</Button>
                    <Button onClick={()=>handleDeleteTask(_id)}>Delete</Button>
                    <Button onClick={()=>setEditableTask(todo)}>Edit</Button>
                </CardFooter>
            </CardBody>
        </Card>
    );
}