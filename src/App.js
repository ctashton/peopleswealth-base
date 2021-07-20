import React, {useState} from 'react';
import './App.css';
import Home from './pages/index'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SigninPage from './pages/signin'
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <Switch>
        <Route path="/" component = {Home} exact />
        <Route path="/signin" component = {SigninPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
