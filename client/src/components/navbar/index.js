// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {Logout} from '../logout';

const mapStateToProps = (state) => ({
  numQuestions: state.questions.questions.length,
  route: state.routing.locationBeforeTransitions.pathname,
});

const Navbar = ({numQuestions, route}) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">Brand</Link>
      </div>

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
  </nav>
);

export default connect(mapStateToProps, null)(Navbar);
