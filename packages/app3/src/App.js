import { Suspense } from 'react'
import { useRout, Link } from "react-router-dom";

const App = () => <Suspense fallback="loading">
    <div id="sidebar" className="sidebar">
        <nav>
            <ul>
                <li>
                    <Link to="app2" replace>App2</Link>
                </li>
                <li>
                    <Link to="app4" replace>App4</Link>
                </li>
            </ul>
        </nav>
    </div>
</Suspense>
export default App;
