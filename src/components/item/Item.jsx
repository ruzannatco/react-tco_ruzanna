import './styles.css'
import {Img} from "../img/Img";
import {Description} from "../description/Description";

export function Item(props) {
    return (
        <li className="Item" data-id={props.id}>
            <Img src={props.src}/>
            <Description description={props.description}/>
        </li>
    );
}