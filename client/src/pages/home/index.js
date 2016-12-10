// npm packages
import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';

// our packages
import {getAllQuestions, answerQuestion} from '../../store/actions';
import Question from '../../components/question';
import Filterbar from '../../components/filterbar';

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  userId: state.auth.user && state.auth.user.id,
  filterSearch: state.questions.search,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: _.once(() => dispatch(getAllQuestions())),
  doAnswer: payload => dispatch(answerQuestion(payload)),
});


const Home = ({fetchQuestions, doAnswer, questions, userId, filterSearch}) => {
  fetchQuestions();

  return (
    <div>
      <Filterbar />
      {filterSearch ? (<div className="panel panel-default">
        <div className="panel-body">
          Coincidences: <span className="badge">{questions.length}</span>
        </div>
      </div>) : ''}
      <div>
        {questions.map(question => (
          <Question key={question.id} question={question} userId={userId} onAnswer={doAnswer} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
