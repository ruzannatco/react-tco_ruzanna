import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {AddTaskForm} from "../AddTaskForm";

export const ModalComponent = ({modalToggle, handleModalToggle, setTasks}) => {
    return (
        <Modal isOpen={modalToggle}>
            <ModalHeader toggle={handleModalToggle}>
                Add New Task
            </ModalHeader>
            <ModalBody>
                <AddTaskForm onSubmitCallback={handleModalToggle} setTasks={setTasks}/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleModalToggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}