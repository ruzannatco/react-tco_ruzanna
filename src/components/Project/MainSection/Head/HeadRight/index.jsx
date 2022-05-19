import {SortSelect} from "./SortSelect";
import {Search} from "./Search";
import {Button} from "reactstrap";
import "./styles.css"
import {ModalComponent} from "./ModalComponent";
import {useState} from "react";
import { getFilteredTasks } from "../../../../../api";

export const HeadRight = ({setTasks}) => {
    const [modalToggle, setModalToggle] = useState(false);
    const handleModalToggle = () => setModalToggle(!modalToggle)

    const handleSelect = (e) => {
      const {value} = e.target;

      getFilteredTasks(`sort=${value}`).then((data) => {
          setTasks(data);
      });
    }

  const handleSearchChange = (e) => {
      const {value} = e.target;
      getFilteredTasks(`search=${value}`).then((data) => {
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