import "./App.css";
import Body from "./components/body/Body";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
    return (
        <div className="app">
            <div className="app_kyc">
                <Sidebar />
                <Body />
            </div>
        </div>
    );
}

export default App;
