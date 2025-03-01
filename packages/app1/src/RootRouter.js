import { BrowserRouter, Outlet } from "react-router-dom";

export const RootRouter = ({ children }) =>
{
    return (
        <BrowserRouter>
            { children }
            <Outlet />
        </BrowserRouter>
    )
}

