import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {Button, Form, FormFeedback, FormGroup, Input, Label} from "reactstrap";
import {BACKEND_URL} from "../../const";
import {isRequired, maxLength20, minLength3, minLength8, validateEmail} from "../../helpers/validations";

export const Registration = () => {
    const navigate = useNavigate();
    const [formErrorMessage, setFormErrorMessage] = useState("");

    const [inputsData, setInputsData] = useState({
        name: {
            value: "",
            error: undefined,
            validations: [isRequired, minLength3, maxLength20]
        },
        surname: {
            value: "",
            error: undefined,
            validations: [isRequired, minLength3]
        },
        email: {
            value: "",
            error: undefined,
            validations: [isRequired, validateEmail]
        },
        password: {
            value: "",
            error: undefined,
            validations: [isRequired, minLength8]
        },
        confirmPassword: {
            value: "",
            error: undefined,
            validations: [isRequired, minLength8]
        },
    });

    const onRegistrationSubmit = (e) => {
        e.preventDefault()
        const {
            name: { value: name },
            surname: { value: surname },
            email: { value: email },
            password: { value: password },
            confirmPassword: { value: confirmPassword },
        } = inputsData;


        const formData = {
            name,
            surname,
            email,
            password,
            confirmPassword
        }

        fetch(`${BACKEND_URL}/user`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then((data) => {
                if(data.error){
                    setFormErrorMessage(data.error.message)
                    throw data.error
                }else{
                    setFormErrorMessage("")
                }
                navigate('/login')
            })
            .catch(err => {
                console.log("err", err)
            })
    }

    const handleChange = (e) => {
        setFormErrorMessage("");
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

                },
            };
        });
    };

    return (
        <div className="auth-page container">
            <Form onSubmit={onRegistrationSubmit}>
                {!!formErrorMessage && (
                    <h4 className="form-error">{formErrorMessage}</h4>
                )}
                <FormGroup>
                    <Label for="nameId">
                        Name
                    </Label>
                    <Input id="nameId"
                           name="name"
                           onChange={handleChange}
                           invalid={!!inputsData.name.error}
                           value={inputsData.name.value}
                    />
                    {!!inputsData.name.error && (
                        <FormFeedback>{inputsData.name.error}</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="surnameId">
                        Surname
                    </Label>
                    <Input id="surnameId"
                           name="surname"
                           onChange={handleChange}
                           invalid={!!inputsData.surname.error}
                           value={inputsData.surname.value}
                    />
                    {!!inputsData.surname.error && (
                        <FormFeedback>{inputsData.surname.error}</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="emailId">
                        Email
                    </Label>
                    <Input id="emailId"
                           name="email"
                           onChange={handleChange}
                           invalid={!!inputsData.email.error}
                           value={inputsData.email.value}
                    />
                    {!!inputsData.email.error && (
                        <FormFeedback>{inputsData.email.error}</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="passwordId">
                        Password
                    </Label>
                    <Input id="passwordId"
                           name="password"
                           type="password"
                           onChange={handleChange}
                           invalid={!!inputsData.password.error}
                           value={inputsData.password.value}
                    />
                    {!!inputsData.password.error && (
                        <FormFeedback>{inputsData.password.error}</FormFeedback>
                    )}
                </FormGroup>

                <FormGroup>
                    <Label for="confirmId">
                        Confirm Password
                    </Label>
                    <Input id="confirmId"
                           name="confirmPassword"
                           type="password"
                           onChange={handleChange}
                           invalid={!!inputsData.confirmPassword.error}
                           value={inputsData.confirmPassword.value}
                    />
                    {!!inputsData.confirmPassword.error && (
                        <FormFeedback>{inputsData.confirmPassword.error}</FormFeedback>
                    )}
                </FormGroup>
                <Button
                    disabled={!!inputsData.name.error || !!inputsData.surname.error || !!inputsData.email.error || !!inputsData.password.error || !!inputsData.confirmPassword.error}
                >Register</Button>
            </Form>
        </div>
    )
}