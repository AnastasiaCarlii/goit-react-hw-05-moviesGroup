import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react-lazy';

const HomePage = lazy(() => import(''));
const MoviesPage = lazy(() => import(''));
const MovieDetailsPage = lazy(() => import(''));
const Cast = lazy(() => import(''));
const Revievs = lazy(() => import(''));

export const App = () => {
  <Routes>
    <Route />
    <Route />
    <Route />
    <Route />
    <Route />
    <Route />
  </Routes>;
};
