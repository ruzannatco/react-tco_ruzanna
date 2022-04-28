import {Services} from "./components/organisms/services/Services";
import {HowToStart} from "./components/organisms/how-to-start/HowToStart";
import {BestShops} from "./components/organisms/BestShops/BestShops";

function App() {

    return (
        <div className="App" id="Wrapper">
            <HowToStart/>
            <Services/>
            <BestShops/>
        </div>
    );
}

export default App;
