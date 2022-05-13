import "./styles.css";
import {CardComponent} from "../../CardComponent";

//componentDidMount (Works only one time)
// useEffect(() => {

// }, []);

//componentDidUpdate (Works after any update)
// useEffect(() => {

// });

export const Body = ({tasks, setTasks}) => {
    return (
        <div className="main-body">
            <div className="card-list">
                {tasks.map((todo) => {
                    return <CardComponent setTasks={setTasks} key={todo._id} todo={todo} />
                })}
            </div>
        </div>
    );
};
