import "./styles.css";
import {TASKS_DAMI_LIST} from "../../../../const";
import {Card} from "./Card";

export const Body = () => {
    const cardItem = TASKS_DAMI_LIST.map(card => {
        return <Card key={card.id} card={card}/>
    })
    return (
        <div className="main-body">
            <ul className="card-list">
                {cardItem}
            </ul>
        </div>
    );
};
