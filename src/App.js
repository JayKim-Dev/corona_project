import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Regular from './assets/font/NotoSansKR-Regular.otf';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

// Containers
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'NotoSans-Regular';
    src: url(${Regular}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }
  body {
    font-family: 'NotoSans-Regular';
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route
              path="/"
              name="Home"
              render={(props) => <TheLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
