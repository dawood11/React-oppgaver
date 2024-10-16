import App from '../App';
import Contacts from '../pages/Contacts';
import Product from '../pages/Product';
import Products from '../pages/Products';
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
    element: <Products />,
  },
  {
    path: ROUTES.PRODUCT,
    element: <Product />,
    
  },
  {
    path: ROUTES.CONTACT,
    element: <Contacts />,
  },
]);

export default router;