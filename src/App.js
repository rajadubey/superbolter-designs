import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "./components/home/home";
import Description from "./components/description/description";
export default function App() {
  return (
    <div className="App">
      <Switch>
          <Route path='/description' render={()=><Description isHome={true}/>}/>
          <Route path='/' component={Home}/>

      </Switch>
    </div>
  );
}