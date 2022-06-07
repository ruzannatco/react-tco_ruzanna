import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {useRef, useState} from "react";
import {isRequired, maxLength20, minLength3} from "../../../../../../helpers/validations";
import {BACKEND_URL} from "../../../../../../const";
import {DatePick} from "../../../../../DatePick";
import * as moment from "moment";
import {connect} from "react-redux";
import {addNewTaskAction} from "../../../../../../redux/actions/task-actions";

const ConnectedAddTaskForm = ({onSubmitCallback, addNewTask}) => {
    const titleInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    const [startDate, setStartDate] = useState(new Date());

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
            date: moment(startDate).format("YYYY-MM-DD"),
        };

        fetch(`${BACKEND_URL}/task`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                // setTasks((prev) => {
                //     return [...prev, data];
                // })
                addNewTask(data)
                onSubmitCallback();
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
                />
                {!!inputsData.description.error && (
                    <FormFeedback>{inputsData.description.error}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <DatePick startDate={startDate} setStartDate={setStartDate} />
            </FormGroup>
            <Button color="primary" onClick={onSubmit} disabled={!!inputsData.title.error || !!inputsData.description.error}>
                Add Task
            </Button>{" "}
            <Button>Clear</Button>{" "}
        </Form>
    );
}

export const AddTaskForm = connect(null, {
    addNewTask: addNewTaskAction
})(ConnectedAddTaskForm)