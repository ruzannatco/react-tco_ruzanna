import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'


export const FilterSection = () => {
    const [createLte, setCreateLte] = useState(new Date());
    const [createGte, setCreateGte] = useState(new Date());
    const [completeLte, setCompleteLte] = useState(new Date());
    const [completeGte, setCompleteGte] = useState(new Date());
    return (
        <div className="filter-section">
            <div className="filter-wrapper">
                <p>Select status</p>
                <select>
                    <option value="active">Active</option>
                    <option value="done">Done</option>
                </select>
            </div>
            <div className="filter-wrapper">
                <p>Select create_lte:</p>
                <DatePicker selected={createLte} onChange={(date) => setCreateLte(date)} />
            </div>
            <div className="filter-wrapper">
                <p>Select create_gte:</p>
                <DatePicker selected={createGte} onChange={(date) => setCreateGte(date)} />
            </div>
            <div className="filter-wrapper">
                <p>Select complete_lte:</p>
                <DatePicker selected={completeLte} onChange={(date) => setCompleteLte(date)} />
            </div>
            <div className="filter-wrapper">
                <p>Select complete_gte:</p>
                <DatePicker selected={completeGte} onChange={(date) => setCompleteGte(date)} />
            </div>
        </div>
    );
};
