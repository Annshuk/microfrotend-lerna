import { Link, BrowserRouter } from "react-router-dom";

const App = () => <BrowserRouter basename="/">
    <div id="sidebar" className="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="app2">App2</Link>
                </li>
            </ul>
        </nav>
    </div>
</BrowserRouter>
export default App;
