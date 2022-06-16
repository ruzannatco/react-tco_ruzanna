import {BACKEND_URL, NAVBAR_LINKS} from "../../const";
import {NavItem} from "./NavItem";
import "./styles.css";
import {Button} from "reactstrap";

const {project, contact, aboutMe, registration, login} = NAVBAR_LINKS;

export const Navbar = () => {
    const handleLogout = () => {
        console.log(localStorage)
        const loginToken = localStorage.getItem('token')
        fetch(`${BACKEND_URL}/user/sign-out`, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                jwt: loginToken
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data)
                if (data.errors || data.error) {
                    throw new Error('Error')
                }

            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <NavItem label={aboutMe.label} link={aboutMe.link}/>
                <NavItem label={project.label} link={project.link}/>
                <NavItem label={contact.label} link={contact.link}/>
                <NavItem label={registration.label} link={registration.link}/>
                <NavItem label={login.label} link={login.link}/>
            </ul>
            <Button className="logout-btn" onClick={handleLogout}>Log Out</Button>
        </nav>
    );
};
