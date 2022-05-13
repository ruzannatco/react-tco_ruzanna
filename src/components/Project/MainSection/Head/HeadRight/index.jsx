import {SortSelect} from "./SortSelect";
import {Search} from "./Search";
import {Button} from "reactstrap";
import "./styles.css"
import {ModalComponent} from "./ModalComponent";
import {useState} from "react";

export const HeadRight = ({setTasks}) => {
    const [modalToggle, setModalToggle] = useState(false);
    const handleModalToggle = () => setModalToggle(!modalToggle)
    return (
      <div className="main-head_right">
          <Button outline onClick={handleModalToggle} aria-expanded={modalToggle}>Add New Task</Button>
          <SortSelect/>
          <Search/>
          <ModalComponent modalToggle={modalToggle} handleModalToggle={handleModalToggle} setTasks={setTasks}/>
      </div>
    );
}