import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main";
import Home from "../../Home/Home";
import ShowInfo from "../../Shows/ShowInfo";


const routes = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home />},
            { path: '/:id', element: <ShowInfo />},
        ]}
])
export default routes;