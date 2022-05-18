import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { EditTaskForm } from "./EditTaskForm";

export const EditModal = ({editableTask ,setTasks, handleEditModal, toggleEditModal}) => {
    return (
        <Modal toggle={handleEditModal} isOpen={toggleEditModal}>
            <ModalHeader toggle={handleEditModal}>Edit Task</ModalHeader>
            <ModalBody>
               <EditTaskForm setTasks={setTasks} editableTask={editableTask} onSubmitCallback={handleEditModal}/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={handleEditModal}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
}