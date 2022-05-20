import {Input} from "reactstrap";
import "./styles.css"

export const SortSelect = ({handleSelect}) => {
    return (
        <Input name="sort_by" type="select" className="custom-select" onChange={handleSelect}>
            <option value="">Sort By</option>
            <option value="a-z">A-Z</option>
            <option value="z-a">Z-A</option>
            <option value="creation_date_oldest">Created oldest</option>
            <option value="creation_date_newest">Created newest</option>
            <option value="completion_date_oldest">Completed oldest</option>
            <option value="completion_date_newest">Completed newest</option>
        </Input>
    );
}