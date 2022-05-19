import {SortSelect} from "./SortSelect";
import {Search} from "./Search";
import {Button} from "reactstrap";
import "./styles.css"
import {ModalComponent} from "./ModalComponent";
import {useState} from "react";
import { getFilteredTasks } from "../../../../../api";

export const HeadRight = ({setTasks}) => {
    const [modalToggle, setModalToggle] = useState(false);
    const handleModalToggle = () => setModalToggle(!modalToggle);
    const [searchFilter, setSearchFilter] = useState('');
    const [sortFilter, setSortFilter] = useState('');

    const handleSelect = (e) => {
      const {value} = e.target;
      setSortFilter(value);

      if(searchFilter){
        searchSortGetRequest(`sort=${value}&search=${searchFilter}`)
      }else{
        searchSortGetRequest(`sort=${value}`)
      }
    }

  const handleSearchChange = (e) => {
      const {value} = e.target;
      setSearchFilter(value);
       if(sortFilter){
        searchSortGetRequest(`sort=${sortFilter}&search=${value}`)
      }else{
        searchSortGetRequest(`search=${value}`)
      }
  }

  const searchSortGetRequest = (request) => {
     getFilteredTasks(request).then((data) => {
        setTasks(data);
    });
  } 
    return (
      <div className="main-head_right">
          <Button outline onClick={handleModalToggle} aria-expanded={modalToggle}>Add New Task</Button>
          <SortSelect handleSelect={handleSelect}/>
          <Search handleSearchChange={handleSearchChange}/>
          <ModalComponent modalToggle={modalToggle} handleModalToggle={handleModalToggle} setTasks={setTasks}/>
      </div>
    );
}