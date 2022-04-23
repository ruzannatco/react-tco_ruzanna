import { Title } from "./components/title/Title";
import { Subtitle } from "./components/subtitle/Subtitle";
import { Item } from "./components/item/Item";

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

function App() {
    const items = listItems.map((item) =>
        <Item key={item.id} description={item.description} dataId={item.id} src={item.src} />
    );
    return (
        <div className="App" id="Wrapper">
            <Title />
            <Subtitle />
            <ul className="info-list">
                {items}
            </ul>
        </div>
    );
}

export default App;
