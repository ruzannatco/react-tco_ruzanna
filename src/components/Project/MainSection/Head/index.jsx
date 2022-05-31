import "./styles.css";
import {HeadRight} from "./HeadRight";

export const Head = ({setFilterField}) => {
    return <div className="main-head">
        <h1>Project Tasks</h1>
        <HeadRight setFilterField={setFilterField} />
    </div>;
};
