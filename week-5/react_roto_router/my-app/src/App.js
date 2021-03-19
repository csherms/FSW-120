import React from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Footer from './components/Footer'

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';


export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                    <Switch>
                        <Route exact path="/"><Home /></Route>
                        <Route path="/about"><About /></Route>
                        <Route path="/services"><Services /></Route>
                    </Switch>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

const Home = () => (
    <div className="home-container">
        <h1>Roto Router</h1>
    </div>
)
