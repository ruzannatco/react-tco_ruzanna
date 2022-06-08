import {useState, useCallback} from "react";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css'
import {FILTER_DATE_PICKERS, STATUS_LIST} from "../../../const";
import {DatePick} from "../../DatePick";
import * as moment from "moment";


export const FilterSection = ({setFilterField}) => {
    const [status, setStatus] = useState('');
    const createLte = useState(new Date());
    const createGte = useState(new Date());
    const completeLte = useState(new Date());
    const completeGte = useState(new Date());

    const getFilterState = useCallback(
        (name) => {
            switch (name) {
                case "create_lte" :
                    return createLte;
                case "create_gte" :
                    return createGte;
                case "complete_lte" :
                    return completeLte;
                case "complete_gte" :
                    return completeGte;
                default:
                    return null;
            }
        },
        [createLte, createGte, completeLte, completeGte]
    )

    const handleStatusChange = useCallback((e) => {
        const {value} = e.target
        setStatus(value)
        setFilterField(['status', value])
    }, [setStatus, setFilterField])

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
            {FILTER_DATE_PICKERS.map((pickerData, index) => {
                const [date, setDate] = getFilterState(pickerData.value)

                return (
                    <div key={index} className="filter-wrapper">
                        <p>Select {pickerData.label}:</p>
                        <DatePick startDate={date}
                                  name={pickerData.value}
                                  setStartDate={(date) =>{
                            setDate(date);
                            setFilterField([
                                pickerData.value,
                                moment(date).format("YYYY-MM-DD"),
                            ]);
                        }}/>
                        <button
                            onClick={() => {
                                setDate(new Date());
                                setFilterField([pickerData.value, ""]);
                            }}
                        >
                            Reset
                        </button>
                    </div>
                )
            })}
        </div>
    );
};
