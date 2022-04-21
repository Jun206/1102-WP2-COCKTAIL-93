import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import pages
import Home_93 from './pages/Home_93';
import About_93 from './pages/About_93';
import SingleCocktail_93 from './pages/SingleCocktail_93';
import Error_93 from './pages/Error_93';
// import components
import Navbar_93 from './components/Navbar_93';
function App_93() {
  return (
    <Router>
      <Navbar_93 />
      <Switch>
        <Router exact path='/'>
          <Home_93 />
        </Router>
        <Route path='/about'>
          <About_93 />
        </Route>
        <Route path='/cocktail/:93'>
          <SingleCocktail_93 />
        </Route>
        <Route path='*'>
          <Error_93 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App_93;
