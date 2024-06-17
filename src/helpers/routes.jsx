import Header from "../components/header/Header";
import Rates from "../pages/Rates";
import Repair from "../pages/Repair";

export const routes = [
    {
        path: "/",
        element: <Header/>
    },

    {
        path: "/rates",
        element: <Rates/>
    },

    {
        path: "/repair",
        element: <Repair/>
    }
]