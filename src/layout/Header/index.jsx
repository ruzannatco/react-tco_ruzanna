import {Navbar} from "../Navbar";
import "./styles.css";
import {Logo} from "./Logo";

export const Header = () => {
    return (
        <header className="main-header">
            <Logo/>
            <Navbar/>
        </header>
    );
};
