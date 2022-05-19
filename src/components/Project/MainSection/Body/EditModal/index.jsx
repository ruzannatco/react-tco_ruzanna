import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { EditTaskForm } from "./EditTaskForm";
import { memo } from "react";

export const EditModal = memo(({editableTask ,setTasks,onClose}) => {
    return (
        <Modal toggle={onClose} isOpen={true}>
            <ModalHeader toggle={onClose}>Edit Task</ModalHeader>
            <ModalBody>
               <EditTaskForm setTasks={setTasks} editableTask={editableTask} onCloseModal={onClose}/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
})