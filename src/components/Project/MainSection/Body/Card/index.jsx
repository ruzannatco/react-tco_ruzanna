import "./styles.css"
import {MoreBtn} from "../MoreBtn";

export const Card = ({card: {name, imgSrc, description, code, createdAt}}) => {
    return (
        <li className="card-item">
            <MoreBtn/>
            <div className="card-img">
                <img src={imgSrc} alt={name}/>
                <p className="card-info">{code}</p>
            </div>
            <div className="card-content">
                <h5 className="">{name}</h5>
                <p className="card-description">{description}</p>
                <p className="card-date">{createdAt}</p>
            </div>
        </li>
    );
}