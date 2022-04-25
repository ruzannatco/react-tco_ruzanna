import './styles.css'
import {ItemWithImg} from "../../molecules/itemWithImg/ItemWithImg";

const listItems = [
    {
        id: 1,
        description: 'Գրանցվե՛ք մեր կայքում և անվճար ստացե՛ք առաքման հասցեներ',
        src: 'https://onex.am/img/svg/step1.svg'
    },
    {
        id: 2,
        description: 'Օգտագործե՛ք Ձեզ տրամադրված առաքման հասցեները կայքերից գնումներ կատարելիս',
        src: 'https://onex.am/img/svg/step2.svg'
    },
    {
        id: 3,
        description: 'Ստացե՛ք Ձեր գնումները ՀՀ բոլոր քաղաքներում և Արցախում',
        src: 'https://onex.am/img/svg/step3.svg'
    }
]
export function HowToStart() {
    const items = listItems.map((item) =>
        <ItemWithImg key={item.id} description={item.description} dataId={item.id} src={item.src} />
    );
    return (
        <ul className="howToStart-list list-unstyled">
            {items}
        </ul>
    );
}