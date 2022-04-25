import './styles.css'
import {Stars} from "../stars/Stars";
import {Title} from "../../atoms/title/Title";
import {Subtitle} from "../../atoms/subtitle/Subtitle";

export function Heading(props){
    return (
        <div className="heading-box">
            <Stars />
            <Title title={props.title} greentitle={props.greentitle} />
            <Subtitle subtitle={props.subtitle}/>
        </div>
    );
}
