import {Header} from "./layout/Header";
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./components/Routes";

function App() {
    return (
        <div className="App" id="Wrapper">
            <BrowserRouter>
                <Header/>
                <RoutesComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
