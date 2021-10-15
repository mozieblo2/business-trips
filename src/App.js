import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from 'pages/homePage/HomePage';
import LoginPage from 'pages/loginPage/LoginPage';
import { ROUTERS } from 'router/router';

function App() {
    const { HOME, LOGIN } = ROUTERS;

    return (
        <Router>
            <Switch>
                <Route path={LOGIN}>
                    <LoginPage />
                </Route>
                <Route path={HOME}>
                    <HomePage />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
