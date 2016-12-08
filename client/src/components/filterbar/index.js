// npm packages
import React from 'react';

import {connect} from 'react-redux';
import {searchQuestions} from '../../store/actions';
import {getAllQuestions} from '../../store/actions';


const mapStateToProps = (state) => ({
  isSearch: state.questions.search,
});

const mapDispatchToProps = dispatch => ({
  onSearchQuestionsClick: tag => dispatch(searchQuestions(tag)),
  onShowAllQuestionsClick: () => dispatch(getAllQuestions()),
});


const Filterbar = ({onSearchQuestionsClick, isSearch, onShowAllQuestionsClick}) => {
  let searchInput;

  const handleClick = (e) => {
    e.preventDefault();
    if (searchInput.value !== '') {
      onSearchQuestionsClick(searchInput.value);
      searchInput.value = '';
    }
    return false;
  };

  const handleClickShowAll = (e) => {
    e.preventDefault();
    onShowAllQuestionsClick();
    return false;
  };

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <button className="btn btn-info navbar-btn" type="button" style={{marginRight: '15px'}}>Filtrar</button>
        <button className="btn btn-info navbar-btn" type="button" >Ordenar</button>
        <form className="navbar-form navbar-right">
          <div className="input-group">
            <input type="text" id="searchInput" className="form-control" placeholder="Search..." ref={(i) => { searchInput = i; }}/>
            <span className="input-group-btn">
              <button className="btn btn-info" type="button" onClick={handleClick}>
                <span className="glyphicon glyphicon-search" aria-hidden="true" />
              </button>
            </span>
          </div>
        </form>
        {isSearch && <button className="btn btn-info navbar-btn pull-right" type="button" onClick={handleClickShowAll}>Show all</button>}
      </div>
    </nav>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Filterbar);
