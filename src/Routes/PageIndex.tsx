import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthenticationPage from '../pages/AuthenticationPage';
import ErrorPage from '../pages/ErrorPage';
import AccountPage from '../pages/AccountPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import WishlistPage from '../pages/WishlistPage';
import AllProductsPage from '../pages/AllProductsPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} errorElement={<ErrorPage />} />
      <Route path='/auth' element={<AuthenticationPage />} errorElement={<ErrorPage />} />
      <Route path='/account' element={<AccountPage />} errorElement={<ErrorPage />} />
      <Route path='/cart' element={<ShoppingCartPage />} errorElement={<ErrorPage />} />
      <Route path='/wishlist' element={<WishlistPage />} errorElement={<ErrorPage />} />
      <Route path='/products' element={<AllProductsPage />} errorElement={<ErrorPage />} />
    </>
  )
);
