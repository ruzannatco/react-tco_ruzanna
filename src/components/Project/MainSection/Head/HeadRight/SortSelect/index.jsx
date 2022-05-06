import {Input} from "reactstrap";
import "./styles.css"

export const SortSelect = () => {
    return (
        <Input name="sort_by" type="select">
            <option>Sort By</option>
            <option>Newest First</option>
            <option>Oldest First</option>
            <option>Todo at Newest</option>
        </Input>
    );
}