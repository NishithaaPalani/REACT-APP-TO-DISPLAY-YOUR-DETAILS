import React from 'react';
import './App.css';
import Info from './Info';
import { BrowserRouter as Router , Switch ,Route } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <div className="App">
      <nav>
        <a class="mee" href="./">NISHITHAA</a> 
        <a class="mee" href="./About">About</a>
      </nav>
      <Router>
       <Switch>
         <Route path="/About" component={About} />
         <Route path="/" component={Info} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;