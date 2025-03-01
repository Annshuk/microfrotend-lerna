import { Suspense } from 'react'
import { Link } from "react-router-dom";

const App = () => <Suspense fallback="loading">
    <div id="sidebar" className="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="app2" relative="path">App2</Link>
                </li>
            </ul>
        </nav>
    </div>
</Suspense>
export default App;
