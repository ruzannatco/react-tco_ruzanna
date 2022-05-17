import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import { EditTaskForm } from "./EditTaskForm";

export const EditModal = ({editableTask ,setTasks, setEditableTask}) => {
    return (
        <Modal isOpen={!!editableTask}>
            <ModalHeader>
                Edit Task
            </ModalHeader>
            <ModalBody>
               <EditTaskForm setTasks={setTasks} editableTask={editableTask} setEditableTask={setEditableTask} />
            </ModalBody>
            <ModalFooter>
                <Button>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}