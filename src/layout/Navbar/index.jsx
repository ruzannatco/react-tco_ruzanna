import {NAVBAR_LINKS} from "../../const";
import {NavItem} from "./NavItem";
import "./styles.css";

const {project, contact, aboutMe} = NAVBAR_LINKS;

export const Navbar = () => {

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <NavItem label={aboutMe.label} link={aboutMe.link}/>
                <NavItem label={project.label} link={project.link}/>
                <NavItem label={contact.label} link={contact.link}/>
            </ul>
        </nav>
    );
};
