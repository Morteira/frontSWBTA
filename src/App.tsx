import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import UserLog from './components/auth/Index';
import routes from './routes';
import Loader from './common/Loader';

import Home from './pages/Home/Home';
import useAuth from './hooks/useAuth';

const DefaultLayout = lazy(() => import('./layout/DefaultLayout'));

export default function App() {

  const token = useAuth();

  return (
    <>
      <Routes>
        <Route path="/auth/signin-signup" element={<UserLog/> } />

        <Route element={<DefaultLayout />}>
          <Route index element={<Home token={token} />} />
          {routes.map((routes, index) => {
            const { path, component: Component } = routes;
            return (
              <Route
                key={index}
                path={path}
                element={
                  <Suspense fallback={<Loader />}>
                    <Component token={token} />
                  </Suspense>
                }
              />
            );
          })}
        </Route>
      </Routes>
    </>
  );
}