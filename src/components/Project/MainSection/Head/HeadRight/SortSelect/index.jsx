import { memo } from "react";
import {Input} from "reactstrap";
import "./styles.css"
import {SORT_FIELDS} from "../../../../../../const";

export const SortSelect = memo(({handleSelect}) => {
    return (
        <Input name="sort_by" type="select" className="custom-select" onChange={handleSelect}>
            <option value="">Sort By</option>
            {SORT_FIELDS.map(({value, label}) => {
                return <option value={value} key={label}>{label}</option>
            })}
        </Input>
    );
})