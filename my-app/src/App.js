import React, { Component } from 'react';
import {BrowserRouter,Switch,Route, Link} from 'react-router-dom';
import getcomponents from "./components/getcomponents";
// import postcomponents from "./components/postcomponents";

function App() {
  return (
      <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/">Root</Link>
        </div>
        <div>
          <Link to ="/get">Get All Tracks</Link>
        </div>
        <div>
          {/* <Link to ="/post">Find Track</Link> */}
        </div>
        <Switch>
          <Route path="/get" component={getcomponents}/>
          {/* <Route path="/post" component={postcomponents}/> */}
        </Switch>
      </div>
      </BrowserRouter>
   
  );
}

export default App;
