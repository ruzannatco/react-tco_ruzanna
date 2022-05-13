import {Card, CardBody, CardImg, CardTitle, CardText, Button} from "reactstrap";
import "./styles.css"

export const CardComponent = ({todo: {title, description, todo_at, status}}) => {
    return (
        <Card className="custom-card">
            <CardImg
                alt="Card image"
                src="https://picsum.photos/318/180"
                width="100%"
            />
            <CardBody>
                <CardTitle tag="h5">{title}</CardTitle>
                <CardText>{description}</CardText>
                <Button>Done</Button>
            </CardBody>
        </Card>
    );
}