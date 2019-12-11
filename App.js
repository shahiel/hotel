import React from 'react';
import './App.css';

//import the pages
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar';

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
      {/*lets us use the nav*/}
      <Route exact path="/" component={Home}/>
      <Route exact path="/rooms/" component={Rooms}/>
      <Route exact path="/rooms/:slug" component={SingleRoom}/>
      <Route component={Error}/>{/**Will render when user clicks a page that is not valid */}
      </Switch>
    </div>
  );
};

export default App;