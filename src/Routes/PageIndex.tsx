import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import AuthenticationPage from '../pages/AuthenticationPage';
import ErrorPage from '../pages/ErrorPage';
import AccountPage from '../pages/AccountPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<HomePage />} errorElement={<ErrorPage />} />
      <Route path='/auth' element={<AuthenticationPage />} errorElement={<ErrorPage />} />
      <Route path='/account' element={<AccountPage />} errorElement={<ErrorPage />} />
    </>
  )
);
