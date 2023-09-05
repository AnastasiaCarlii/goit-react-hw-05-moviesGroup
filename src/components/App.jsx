import { Routes, Route } from 'react-router-dom';
// import { lazy } from 'react-lazy';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { HomePage } from 'pages/HomePage';

// const HomePage = lazy(() => import(''));
// const MoviesPage = lazy(() => import(''));
// const MovieDetailsPage = lazy(() => import(''));
// const Cast = lazy(() => import(''));
// const Revievs = lazy(() => import(''));

export const App = () => {
  <Routes>
    <Route path="/" element={<SharedLayout />} />
    <Route index element={<HomePage />} />
    <Route />
    <Route />
    <Route />
    <Route />
  </Routes>;
};
