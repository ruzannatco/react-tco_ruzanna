import {SortSelect} from "./SortSelect";
import {Search} from "./Search";
import {Button} from "reactstrap";
import "./styles.css"
import {ModalComponent} from "./ModalComponent";
import {useState, useCallback} from "react";


export const HeadRight = ({setFilterField}) => {

    const [modalToggle, setModalToggle] = useState(false);
    const handleModalToggle = () => setModalToggle(!modalToggle);
    const [searchFilter, setSearchFilter] = useState('');
    const [sortFilter, setSortFilter] = useState('');

    const handleSelect = useCallback((e) => {
      const {value} = e.target;
      setSortFilter(value);
      setFilterField(['sort', value])
    }, [sortFilter])

    const handleSearchChange = useCallback((e) => {
      const {value} = e.target;
      setSearchFilter(value);
      setFilterField(['search', value])
    }, [searchFilter])

    return (
      <div className="main-head_right">
          <Button outline onClick={handleModalToggle} aria-expanded={modalToggle}>Add New Task</Button>
          <SortSelect handleSelect={handleSelect}/>
          <Search handleSearchChange={handleSearchChange}/>
          <ModalComponent modalToggle={modalToggle} handleModalToggle={handleModalToggle}/>
      </div>
    );
}