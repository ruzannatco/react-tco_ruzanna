import {useState, useCallback} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
import {STATUS_LIST} from "../../../const";


export const FilterSection = ({setFilterField}) => {
    const [status, setStatus] = useState('');
    const [createLte, setCreateLte] = useState(new Date());
    const [createGte, setCreateGte] = useState(new Date());
    const [completeLte, setCompleteLte] = useState(new Date());
    const [completeGte, setCompleteGte] = useState(new Date());

    const handleStatusChange = useCallback((e) => {
        const {value} = e.target
        setStatus(value)
        setFilterField(['status', value])
    }, [setStatus, setFilterField])

    const handleCreateLteChange = useCallback((date) => {
        setCreateLte(date)
        setFilterField(['create_lte', createLte])
    }, [createLte, setFilterField])

    const handleCreateGteChange = useCallback((date) => {
        setCreateGte(date)
        setFilterField(['create_gte', createGte])
    }, [createGte, setFilterField])

    const handleCompleteLteChange = useCallback((date) => {
        setCompleteLte(date)
        setFilterField(['complete_lte', completeLte])
    }, [completeLte, setFilterField])

    const handleCompleteGteChange = useCallback((date) => {
        setCompleteGte(date)
        setFilterField(['complete_gte', completeGte])
    }, [completeGte, setFilterField])
    return (
        <div className="filter-section">
            <div className="filter-wrapper">
                <p>Select status</p>
                <select value={status} onChange={handleStatusChange}>
                    <option value="" >All</option>
                    {STATUS_LIST.map((option, index) => (
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
                <DatePicker selected={createGte} onChange={handleCreateGteChange} dateFormat="yyyy-MM-dd" />
            </div>
            <div className="filter-wrapper">
                <p>Select complete_lte:</p>
                <DatePicker selected={completeLte} onChange={handleCompleteLteChange} dateFormat="yyyy-MM-dd" />
            </div>
            <div className="filter-wrapper">
                <p>Select complete_gte:</p>
                <DatePicker selected={completeGte} onChange={handleCompleteGteChange} dateFormat="yyyy-MM-dd" />
            </div>
        </div>
    );
};
