import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header.jsx';
import Places from './Views/Places/Places.jsx'
import routes from './Routes/Routes.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {
          routes.map((prop, key) => {
            if (prop.redirect)
              return <Redirect from={prop.path} to={prop.to} key={key} />
            else return (
              <Route
                path={prop.path}
                key={key}
                exact={true}
                render={(props) => <prop.component  {...props} pageName={prop.name} />}
              />
            );
          })
        }
      </Switch>
    </div>
  );
}

export default App;
