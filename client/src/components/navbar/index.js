// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {Logout} from '../logout';

const mapStateToProps = (state) => ({
  numQuestions: state.questions.questions.length,
  route: state.routing.locationBeforeTransitions.pathname,
  authenticated: state.auth.token !== null,
});

const yesAuth = (numQuestions, route) => (
  <div>
    <ul className="nav navbar-nav">
      <li className={route === '/' && 'active'}>
        <Link to="/">Browse questions <span className="badge">{numQuestions}</span></Link>
      </li>
      <li className={route === '/create' && 'active'}>
        <Link to="/create">Create new question</Link>
      </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
      <Logout />
    </ul>
  </div>
);

const noAuth = (numQuestions, route) => (
  <ul className="nav navbar-nav navbar-right">
    <li className={route === '/login' && 'active'}>
      <Link to="/login">Login</Link>
    </li>
    <li className={route === '/register' && 'active'}>
      <Link to="/register">Register</Link>
    </li>
  </ul>
);

const Navbar = ({numQuestions, route, authenticated}) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">Brand</Link>
      </div>
      {authenticated ? yesAuth(numQuestions, route) : noAuth(numQuestions, route)}
    </div>
  </nav>
);

export default connect(mapStateToProps, null)(Navbar);
