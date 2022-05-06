import "./styles.css";
import {TODO_LIST_MOCK_DATA} from "../../../../mockdata";
import {CardComponent} from "../../CardComponent";
import {CardGroup} from "reactstrap";

export const Body = () => {
    return (
        <div className="main-body">
            <div className="card-list">
                {TODO_LIST_MOCK_DATA.map((todo) => {
                    return <CardComponent key={todo._id} todo={todo} />
                })}
            </div>
        </div>
    );
};
