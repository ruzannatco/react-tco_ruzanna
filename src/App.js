import {Header} from "./layout/Header";
import {BrowserRouter} from "react-router-dom";
import {RoutesComponent} from "./components/Routes";
import {Provider} from "react-redux";
import {store} from "./redux/store";

function App() {
    return (
        <div className="App" id="Wrapper">
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <RoutesComponent />
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
