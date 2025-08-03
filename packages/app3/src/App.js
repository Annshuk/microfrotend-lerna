import { Suspense } from 'react'
import { NavLink } from "react-router-dom";


const App = () => <Suspense fallback="loading">
    <div id="sidebar" className="sidebar">
        <nav>
            <ul>
                <li>
                    <NavLink to="app2">App2</NavLink>
                </li>
                <li>
                    <NavLink to="app4">App4</NavLink>
                </li>
            </ul>
        </nav>
    </div>

</Suspense>
export default App;
