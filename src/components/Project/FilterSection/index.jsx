import {useState, useCallback} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
// import moment from "moment";


export const FilterSection = ({setFilterField}) => {
    const statusList = [
        {
            value: 'active',
            label: 'Active'
        },
        {
            value: 'done',
            label: 'Done'
        }
    ]
    const [status, setStatus] = useState('active');
    const [createLte, setCreateLte] = useState('');
    const [createGte, setCreateGte] = useState(new Date());
    const [completeLte, setCompleteLte] = useState(new Date());
    const [completeGte, setCompleteGte] = useState(new Date());
    const handleCreateLteChange = useCallback((date) => {
        // const newDate = date.toISOString();
        // console.log(date.toISOString().substring(0, 10))
        setCreateLte(date)
        setFilterField(['create_lte', createLte])
    }, [createLte])
    return (
        <div className="filter-section">
            <div className="filter-wrapper">
                <p>Select status</p>
                <select value={status} onChange={e => setStatus(e.target.value)}>
                    {statusList.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))}
                </select>
            </div>
            <div className="filter-wrapper">
                <p>Select create_lte:</p>
                <DatePicker selected={createLte} onChange={handleCreateLteChange} dateFormat="yyyy/MM/dd" />
            </div>
            <div className="filter-wrapper">
                <p>Select create_gte:</p>
                <DatePicker selected={createGte} onChange={(date) => setCreateGte(date)} dateFormat="yyyy-MM-dd" />
            </div>
            <div className="filter-wrapper">
                <p>Select complete_lte:</p>
                <DatePicker selected={completeLte} onChange={(date) => setCompleteLte(date)} dateFormat="yyyy-MM-dd" />
            </div>
            <div className="filter-wrapper">
                <p>Select complete_gte:</p>
                <DatePicker selected={completeGte} onChange={(date) => setCompleteGte(date)} dateFormat="yyyy-MM-dd" />
            </div>
        </div>
    );
};
