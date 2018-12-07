/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyle from '../../global-styles';

const HomePage = lazy(() => import('containers/HomePage'));
const NotFoundPage = lazy(() => import('containers/NotFoundPage'));

export default function App() {
  return (
    <div>
      <Suspense fallback={<div>{null}</div>}>
        <Switch>
          <Route exact path="/" component={props => <HomePage {...props} />} />
          <Route component={props => <NotFoundPage {...props} />} />
        </Switch>
      </Suspense>
      <GlobalStyle />
    </div>
  );
}