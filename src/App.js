import React from 'react';


import Animals from "./container/Animals"
import MainMenu from './components/menus/MainMenu';
import { Route, Switch } from 'react-router';
import Details from './components/detail/Details';
import Register from './container/login/Register';


function App() {
  return (
    <div className="App">
      <MainMenu />
      
    <Switch>
      <Route path="/" exact component={Animals}/>
      <Route path ="/details" exact component={Details}/>
      <Route path="/register" exact component={Register}/>
    </Switch>

    </div>
  );
}

export default App;
