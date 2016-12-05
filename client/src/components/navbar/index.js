// npm packages
import React from 'react';
import {Link} from 'react-router';

import {Logout} from '../logout';


export default () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link to="/" className="navbar-brand">Brand</Link>
      </div>

      <ul className="nav navbar-nav">
        <li>
          <Link to="/">Browse questions</Link>
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
