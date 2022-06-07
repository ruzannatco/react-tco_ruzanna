import "./styles.css"
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {useState} from "react";
import {isRequired, validateEmail} from "../../helpers/validations";
import {BACKEND_URL} from "../../const";

const defaultContactForm ={
    name: {
        value: "",
        error: undefined,
        validations: [isRequired]
    },
    email: {
        value: "",
        error: undefined,
        validations: [isRequired, validateEmail]
    },
    message: {
        value: "",
        error: undefined,
        validations: []
    },
}
export const ContactForm = () => {
    const [contactFormData, setContactFormData] = useState(defaultContactForm);

    const onSubmit = (e) => {
        e.preventDefault();

        const {
            name: { value: name },
            email: { value: email },
            message: { value: message },
        } = contactFormData;

        const newFormData = {
            name,
            email,
            message,
        };

        fetch(`${BACKEND_URL}/form`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newFormData),
        })
            .then((res) => res.json())
            .then((data) => {
                setContactFormData((prev) => {
                    return {
                        ...prev,
                        ...defaultContactForm
                    };
                });
            })
            .catch(error => console.log(error.message))
    };

    const handleChange = (e) => {
        const {value, name } = e.target;
        const { validations } = contactFormData[name];

        let error;

        for (let i = 0; i < validations.length; i++) {
            const validation = validations[i];
            const errorMessage = validation(value);

            if (errorMessage) {
                error = errorMessage;
                break;
            }
        }


        setContactFormData((prev) => {
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
        <div className="contact-form">
            <Form>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                        invalid={!!contactFormData.name.error}
                        value={contactFormData.name.value}
                    />
                    {!!contactFormData.name.error && (
                        <FormFeedback>{contactFormData.name.error}</FormFeedback>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        id="email"
                        name="email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        invalid={!!contactFormData.email.error}
                        value={contactFormData.email.value}
                    />
                    {!!contactFormData.email.error && (
                        <FormFeedback>{contactFormData.email.error}</FormFeedback>
                    )}
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message</Label>
                    <Input
                        id="message"
                        name="message"
                        placeholder="Message"
                        type="textarea"
                        onChange={handleChange}
                        invalid={!!contactFormData.message.error}
                        value={contactFormData.message.value}
                    />
                    {!!contactFormData.message.error && (
                        <FormFeedback>{contactFormData.message.error}</FormFeedback>
                    )}
                </FormGroup>
                <Button color="secondary" onClick={onSubmit} disabled={!!contactFormData.name.error || !!contactFormData.email.error}>
                    Send
                </Button>{" "}
            </Form>
        </div>
    );
}