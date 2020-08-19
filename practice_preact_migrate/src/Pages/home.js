import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <h2>WELCOME PREACT APP!</h2>
        <Link to='/movie'><h3>MOVIE PAGE</h3></Link>
      </div>
    );
  }
}

export default Home;
