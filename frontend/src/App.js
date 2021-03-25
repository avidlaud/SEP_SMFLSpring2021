import React from 'react';
import {
    BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import {
    RegistrationPage,
    LoginPage,
    HomePage,
    CreateLeaguePage,
    PortfolioChartPage,
    IndividualStockPage,
    TradePage,
    CurrentLeaguesPage,
    SymbolLookupPage,
} from './components/Pages';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './styles/global.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="site-container">
                    { ['/user/register', '/user/login'].indexOf(window.location.pathname) < 0 && <NavigationBar /> }
                    <div className="site-content">
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
                            <Route path="/portfolio">
                                <PortfolioChartPage />
                            </Route>
                            <Route path="/league/create">
                                <CreateLeaguePage />
                            </Route>
                            <Route path="/stock">
                                <IndividualStockPage />
                            </Route>
                            <Route path="/trade">
                                <TradePage />
                            </Route>
                            <Route path="/league/view">
                                <CurrentLeaguesPage />
                            </Route>
                            <Route path="/lookup">
                                <SymbolLookupPage />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
