import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {isRequired, maxLength20, minLength3} from "../../../../../../helpers/validations";
import { BACKEND_URL } from "../../../../../../const";
import {useRef, useState} from "react";

export const EditTaskForm = ({setEditableTask, editableTask, setTasks}) => {
    const titleInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    
    const [inputsData, setInputsData] = useState({
        title: {
            value: "",
            error: undefined,
            validations: [isRequired, minLength3, maxLength20],
        },
        description: {
            value: "",
            error: undefined,
            validations: [isRequired, minLength3],
        }
    });

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            title: { value: title },
            description: { value: description },
        } = inputsData;

        const formData = {
            title,
            description,
        };

        fetch(`${BACKEND_URL}/task/${editableTask._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())
        .then((data) => {
            setTasks((prev) => {
                return [...prev, data];
            })
            setEditableTask(null);
        })

    };

    const handleChange = (e) => {
        const { value, name } = e.target;
        const { validations } = inputsData[name];

        let error;

        for (let i = 0; i < validations.length; i++) {
            const validation = validations[i];
            const errorMessage = validation(value);

            if (errorMessage) {
                error = errorMessage;
                break;
            }
        }

        setInputsData((prev) => {
            return {
                ...prev,
                [name]: {
                    ...prev[name],
                    value,
                    error,
                },
            };
        });
    }

    return (
        <Form>
            <FormGroup>
                <Label for="title">Title</Label>
                <Input
                    id="title"
                    name="title"
                    placeholder="Task title"
                    innerRef={titleInputRef}
                    defaultValue={editableTask.title}
                    onChange={handleChange}
                    invalid={!!inputsData.title.error}
                />
                {!!inputsData.title.error && (
                    <FormFeedback>{inputsData.title.error}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input
                    id="description"
                    name="description"
                    placeholder="Task description"
                    type="textarea"
                    innerRef={descriptionInputRef}
                    onChange={handleChange}
                    invalid={!!inputsData.description.error}
                    defaultValue={editableTask.description}
                />
                {!!inputsData.description.error && (
                    <FormFeedback>{inputsData.description.error}</FormFeedback>
                )}
            </FormGroup>
            <Button color="primary" onClick={onSubmit}>
                Edit Task
            </Button>{" "}
            <Button>Clear</Button>{" "}
        </Form>
    );
}