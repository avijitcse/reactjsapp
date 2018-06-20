import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

export default class Nav extends Component {
  render() {
    return (
      // <Router>
      <nav className="navbar navbar-default">
        <div className="navbar-header">
        <Link className="navbar-brand" to="/">Chuck Norris World</Link>
        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Food Jokes</Link>
          </li>
          <li>
           <Link to="/feedback">Feedback</Link>
          </li>
        </ul>
        {/* <ul className="nav navbar-nav navbar-right">
          <li><button className="btn btn-info log">Log In</button></li>
          <li><button className="btn btn-danger log">Log out </button></li>
        </ul> */}

        {/* <Switch>
          <Route exact path="/" Component={Home} />
          <Route exact path="/feedback" Component={Feedback} />
        </Switch> */}
      </nav>
      // </Router>
    )
  }
}
