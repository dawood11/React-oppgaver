import App from '../App';
import Contacts from '../pages/Contacts';
import Product from '../pages/Product';
import Products from '../pages/Products';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';
import { createBrowserRouter } from "react-router-dom";

export const ROUTES = {
    ROOT: '/',
    PRODUCTS: '/products',
    PRODUCT: '/products/:id',
    CONTACT: '/contact',
};


const router = createBrowserRouter([
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
]);

export default router;