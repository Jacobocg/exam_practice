// npm packages
import React from 'react';
import _ from 'lodash';

import {connect} from 'react-redux';

// our packages
import {getAllQuestions, answerQuestion} from '../../store/actions';
import Question from '../../components/question';
import Navbar from '../../components/navbar';

const mapStateToProps = (state) => ({
  questions: state.questions.questions,
  userId: state.auth.user && state.auth.user.id,
});

const mapDispatchToProps = (dispatch) => ({
  fetchQuestions: _.once(() => dispatch(getAllQuestions())),
  doAnswer: payload => dispatch(answerQuestion(payload)),
});


const Home = ({fetchQuestions, doAnswer, questions, userId}) => {
  fetchQuestions();

  return (
    <div>

      <div>
        {questions.map(question => (
          <Question key={question.id} question={question} userId={userId} onAnswer={doAnswer} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
