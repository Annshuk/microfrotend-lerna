import { Suspense } from 'react'
import { BrowserRouter, Link } from "react-router-dom";

const App = () => <Suspense fallback="loading">

    <div id="sidebar" className="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="app2">App2</Link>
                </li>
                <li>
                    <Link to="app4">App4</Link>
                </li>
            </ul>
        </nav>
    </div>

</Suspense>
export default App;
