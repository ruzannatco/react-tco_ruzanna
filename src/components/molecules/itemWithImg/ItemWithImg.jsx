import './styles.css'
import {Img} from "../../atoms/img/Img";
import {Description} from "../../atoms/description/Description";

export const ItemWithImg = (props) => {
    return (
        <li className="Item" data-id={props.id}>
            <Img src={props.src}/>
            <Description description={props.description}/>
        </li>
    );
}