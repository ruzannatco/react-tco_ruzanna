import {Card, CardBody, CardImg, CardTitle, CardText, Button, CardFooter, Input} from "reactstrap";
import "./styles.css"
import {memo, useContext} from 'react';
import moment from 'moment';
import {Link} from "react-router-dom";
import {DeleteTaskContext} from "../../../context";

export const CardComponent = memo(({todo,
    handleDeleteTask ,
    handleStatusChange,
    setEditableTask}) => {
         
    const {title, description, _id, created_at, status, date} = todo
    const nextStatus = status === "active" ? "done" : "active";
    const { toggleDeleteTask } = useContext(DeleteTaskContext)

    return (
        <Card className="custom-card" id={_id}>
            <div className="delete-card_btn">
                <Input type="checkbox" onClick={() => toggleDeleteTask(_id)}/>
            </div>
            <Link to={`/project/${_id}`} className="card-img_link">
                <CardImg
                    alt="Card image"
                    src="https://picsum.photos/318/180"
                    width="100%"
                />
            </Link>

            <CardBody>
                <CardTitle tag="h5">
                    <Link to={`/project/${_id}`}>{title}</Link>
                </CardTitle>
                <CardText>{description}</CardText>
                <CardText className="date">Date: {moment(date).format("DD/MM/YYYY")}</CardText>
                <CardFooter>
                    <div className="card-status">
                        <Button className={status === 'active' ? 'btn-active' : 'btn-done'}
                                onClick={()=>handleStatusChange(_id, nextStatus)}
                                data-status={status}>{status}</Button>{' '}
                        <CardText className="date">Created at: {moment(created_at).format("DD/MM/YYYY")}</CardText>
                    </div>
                    <div className="card-footer_btn">
                        <Button onClick={()=> {
                            setEditableTask(todo)

                        }}>Edit</Button>
                        <Button onClick={()=>handleDeleteTask(_id)}>Delete</Button>
                    </div>
                </CardFooter>
            </CardBody>
        </Card>
    );
})