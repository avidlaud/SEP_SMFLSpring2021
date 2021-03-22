import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RegistrationPage, LoginPage, HomePage } from './components/Pages';
import Header from './components/Header/Header';
import NavigationBar from './components/NavigationBar/NavigationBar';
import './styles/global.scss';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className="site-container">
                    <div className="site-content">
                        <Switch>
                            <Route path="/user/register">
                                <RegistrationPage />
                            </Route>
                            <Route path="/user/login">
                                <LoginPage />
                            </Route>
                            <NavigationBar />
                            <Route path="/home">
                                <HomePage />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
        </Router>
    );
}

export default App;
