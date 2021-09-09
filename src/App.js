import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Home from './components/pages/HomePage/Home';
import Footer from './components/pages/Footer/Footer';
import About from './components/pages/About/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' component={About}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;