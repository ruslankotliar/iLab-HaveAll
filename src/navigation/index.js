import React from 'react';

import routes from '../routes/index';

import { ROUTER_KEYS } from '../constants/index';

import { Provider } from 'react-redux';

import { store } from '../app/store';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LayoutComponent from '../components/layout/LayoutComponent';

const MainRouter = () => (
  <Router>
    <Provider store={store}>
      <LayoutComponent>
        <Routes>
          {routes.map((route) => {
            const { element: Component, path, key } = route;
            return (
              <Route key={key}>
                <Route element={<Component />} path={ROUTER_KEYS[path]} />
              </Route>
            );
          })}
        </Routes>
      </LayoutComponent>
    </Provider>
  </Router>
);

export default MainRouter;
