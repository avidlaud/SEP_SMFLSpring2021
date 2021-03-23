import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
    RegistrationPage, LoginPage, HomePage, PortfolioChartPage,
} from './components/Pages';
import Header from './components/Header/Header';
import './styles/global.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route path="/user/register">
                        <RegistrationPage />
                    </Route>
                    <Route path="/user/login">
                        <LoginPage />
                    </Route>
                    <Route path="/home">
                        <HomePage />
                    </Route>
                    <Route path="/portfolio/league/username">
                        <PortfolioChartPage />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
