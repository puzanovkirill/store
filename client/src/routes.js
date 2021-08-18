import {CART_ROUTE, HOME_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


export const authRoutes = [
    {
        path: CART_ROUTE,
        Component: Cart
    }
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },

    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },

    {
        path: HOME_ROUTE,
        Component: Home
    },

    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    }
]