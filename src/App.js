import React from "react";
import { LandingPage } from './Landing Page/LandingPage';
import {Route, Switch} from 'react-router-dom';
import {Search} from './Search/Search';

function App() {
  return (
    <Switch>
     <Route path='/search' component={Search}/>
     <Route path='/' component={LandingPage}/>

    </Switch>
    
  );
}

export default App;
