import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { EditTaskForm } from "./EditTaskForm";
import { memo } from "react";

export const EditModal = memo(({editableTask, onClose, updatedTaskById}) => {
    return (
        <Modal toggle={onClose} isOpen={true}>
            <ModalHeader toggle={onClose}>Edit Task</ModalHeader>
            <ModalBody>
               <EditTaskForm editableTask={editableTask} onCloseModal={onClose} updatedTaskById = {updatedTaskById}/>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
        </Modal>
    )
})