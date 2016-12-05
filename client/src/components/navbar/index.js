// npm packages
import React from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

import {Logout} from '../logout';

const mapStateToProps = (state) => ({
  numQuestions: state.questions.questions.length,
});

const Navbar = ({numQuestions}) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">Brand</Link>
      </div>

      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Browse questions <span className="badge">{numQuestions}</span></Link>
        </li>
        <li>
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
