import "./styles.css"
import {ContactForm} from "../../components/ContactForm";
export const ContactPage = () => {
  return (
    <div className="contact-layout">
        <div className="container">
            <h1>Contact Page</h1>
            <ContactForm/>
        </div>
    </div>
  );
};
