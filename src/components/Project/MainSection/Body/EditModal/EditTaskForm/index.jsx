import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {isRequired, maxLength20, minLength3} from "../../../../../../helpers/validations";
import { BACKEND_URL } from "../../../../../../const";
import {useContext, useState} from "react";
import {DatePick} from "../../../../../DatePick";
import * as moment from "moment";
import {MainTaskContext} from "../../../../../../context";

export const EditTaskForm = ({editableTask, onCloseModal}) => {
    const {setTasks} = useContext(MainTaskContext);
    const {title: defaultTitle, description: defaultDescription } = editableTask;
    const [startDate, setStartDate] = useState(new Date(editableTask.date));

    const [inputsData, setInputsData] = useState({
        title: {
            value: defaultTitle,
            error: undefined,
            validations: [isRequired, minLength3, maxLength20],
        },
        description: {
            value: defaultDescription,
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

        fetch(`${BACKEND_URL}/task/${editableTask._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData),
        })
        .then((res) => res.json())
        .then(data => {
            setTasks(prev=>{
                return prev.map(item=>{
                    if(item._id === data._id) {
                        return data
                    }
                    return item
                })
            })
            onCloseModal()
        })

    };

    const handleInputChange = (e) => {
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
                    defaultValue={defaultTitle}
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    invalid={!!inputsData.description.error}
                    defaultValue={defaultDescription}
                />
                {!!inputsData.description.error && (
                    <FormFeedback>{inputsData.description.error}</FormFeedback>
                )}
            </FormGroup>
            <FormGroup>
                <DatePick startDate={startDate} setStartDate={setStartDate} />
            </FormGroup>
            <Button color="primary" onClick={onSubmit} disabled={!!inputsData.title.error || !!inputsData.description.error}>
                Edit Task
            </Button>{" "}
            <Button>Clear</Button>{" "}
        </Form>
    );
}