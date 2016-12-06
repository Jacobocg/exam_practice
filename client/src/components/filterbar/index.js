// npm packages
import React from 'react';

import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
  numQuestions: state.questions.questions.length,
  route: state.routing.locationBeforeTransitions.pathname,
});


const Filterbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <button className="btn btn-info navbar-btn" type="button" style={{marginRight: '15px'}}>Filtrar</button>
      <button className="btn btn-info navbar-btn" type="button" >Ordenar</button>
      <form className="navbar-form navbar-right">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Search..." />
          <span className="input-group-btn">
            <button className="btn btn-info" type="button">
              <span className="glyphicon glyphicon-search" aria-hidden="true" />
            </button>
          </span>
        </div>
      </form>
    </div>
  </nav>
);

export default connect(mapStateToProps, null)(Filterbar);
