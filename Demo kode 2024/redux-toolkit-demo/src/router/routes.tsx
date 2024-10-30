import { RouteObject, createBrowserRouter } from "react-router-dom";

import App from "../App";
import Contacts from "../pages/Contacts";
import Product from "../pages/Products/Product";
import Products from "../pages/Products/Products";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

export const ROUTES = {
    ROOT: '/',
    PRODUCTS: '/products',
    PRODUCT: '/products/:id',
    CONTACT: '/contact',
};


const routes: RouteObject[] = [
  {
    path: ROUTES.ROOT,
    element: <App />,
  },
  {
    path: ROUTES.PRODUCTS,
    element: <ProtectedRoute ><Products /></ProtectedRoute>,
  },
  {
    path: ROUTES.PRODUCT,
    element: <ProtectedRoute ><Product /></ProtectedRoute>,
    
  },
  {
    path: ROUTES.CONTACT,
    element: <Contacts />,
  },
];

const router = createBrowserRouter(routes);

export default router;