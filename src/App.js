import {Services} from "./components/organisms/services/Services";
import {HowToStart} from "./components/organisms/how-to-start/HowToStart";
import {Heading} from "./components/molecules/heading/Heading";



function App() {

    return (
        <div className="App" id="Wrapper">
            <div className="box-shadow">
                <Heading title="Ինչպես օգտվել" subtitle="Ինչպե՞ս կատարել օնլայն գնումներ և ստանալ Հայաստանում արագ և ապահով"/>
                <HowToStart />
            </div>

            <div className="box-shadow">
                <Heading greentitle="Smart" title=" Ծառայություններ" subtitle="Նախքան առաքանու ԱՄՆ կամ Չինաստանի պահեստ հասնելը դուք կարող եք պատվիրել հետևյալ SMART ծառայությունները"/>
                <Services />
            </div>
        </div>
    );
}

export default App;
