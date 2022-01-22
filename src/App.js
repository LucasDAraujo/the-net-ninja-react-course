//ANCHOR  Imports
import Navbar from "./Navbar";
import Home from "./Home";
//ANCHOR Root component
function App() {
    return (
        <div className="App">
            <Navbar />
            <div className="content">
                <Home />
            </div>
        </div>
    );
}

export default App;
