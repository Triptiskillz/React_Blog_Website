import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Blog from './components/pages/Blog';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Post1 from './components/pages/Post1';
import ThankYou from './components/pages/ThankYou';
import Post2 from './components/pages/Post2';
import Post3 from './components/pages/Post3'

function App() {
  return (
    <>
    <Router>
       <Navbar/>
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/blog' component={Blog}/>
         <Route path='/about' component={About}/>
         <Route path='/contact' component={Contact}/>
         <Route path='/sign-up' component={SignUp}/>
         <Route path='/post1' component={Post1}/>
         <Route path='/post2' component={Post2}/>
         <Route path='/post3' component={Post3}/>
         <Route path='/thank-you' component={ThankYou}/>
       </Switch>
    </Router>
      
    </>
  );
}

export default App;
