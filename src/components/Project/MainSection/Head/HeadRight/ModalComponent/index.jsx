import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useRef} from 'react'
export const ModalComponent = ({modalToggle, handleModalToggle}) => {
    // const nodeRef = useRef(<Modal/>);
    // console.log(nodeRef)
    return (

            <Modal isOpen={modalToggle}>
                <ModalHeader toggle={handleModalToggle}>
                    Add New Task
                </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                id="name"
                                name="name"
                                placeholder="Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="description"
                                name="description"
                                placeholder="Description"
                                type="textarea"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                id="todoAt"
                                name="todoAt"
                                placeholder="To be done at"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary"
                    >
                        Add Task
                    </Button>
                    {' '}
                    <Button onClick={handleModalToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

    )
}