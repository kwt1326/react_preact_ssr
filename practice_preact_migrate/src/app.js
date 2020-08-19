import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/home';
import Movie from './Pages/movie';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/movie" component={Movie} />
        <Redirect path="*" to="/" />
      </Switch>
    );
  }
}

export default App;
