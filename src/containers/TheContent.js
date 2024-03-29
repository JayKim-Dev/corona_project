import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer, CFade } from '@coreui/react';

// routes config
import routes from '../routes';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse" />
  </div>
);

const TheContent = () => (
  <main className="c-main">
    <CContainer fluid>
      <Suspense fallback={loading}>
        <Switch>
          {routes.map(
            (route) => route.component && (
            <Route
              key={route.name}
              path={route.path}
              exact={route.exact}
              name={route.name}
              render={(props) => (
                <CFade>
                  <route.component {...props} />
                </CFade>
              )}
            />
            ),
          )}
          <Redirect from="/" to="/statistics" />
        </Switch>
      </Suspense>
    </CContainer>
  </main>
);

export default React.memo(TheContent);
