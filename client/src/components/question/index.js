import React, {Component} from 'react';
import {connect} from 'react-redux';

import {deleteQuestion} from '../../store/actions';

const NUMBER_ANSWERS_LOADED = 5;

const mapDispatchToProps = dispatch => ({
  onRemoveQuestionClick: questionId => dispatch(deleteQuestion(questionId)),
});

class Question extends Component {
  // let answerInput;
  constructor(props) {
    super(props);
    this.state = {
      answerInput: '',
      numAnswers: this.props.question.answers.length,
      numAnswersShow: NUMBER_ANSWERS_LOADED,
    };
    this.handleClick = this.handleClick.bind(this);
    this.loadMoreAnswers = this.loadMoreAnswers.bind(this);
    this.hideAnswers = this.hideAnswers.bind(this);
  }

  // componentWillReceiveProps(nextProps) {
  //   this.setState({numAnswers: nextProps.question.answers.length});
  // }

  handleClick(e) {
    e.preventDefault();
    this.props.onAnswer({question: this.props.question, answer: this.state.answerInput.value});
    this.state.answerInput.value = '';
    return false;
  }

  loadMoreAnswers(e) {
    e.preventDefault();
    this.setState({numAnswersShow: this.state.numAnswersShow + 5});
  }

  hideAnswers(e) {
    e.preventDefault();
    this.setState({numAnswersShow: 5});
  }

  render() {
    let showAnswers = this.props.question.answers.map((answer, i) => (
      <li className="list-group-item" key={i}>{answer.answer}</li>
    ));
    let loadMoreButton = '';
    let hideButton = <button className="btn btn-xs btn-info pull-right" type="button" onClick={this.hideAnswers}>Hide</button>;
    if (this.state.numAnswersShow < this.state.numAnswers) {
      showAnswers = showAnswers.slice(0, this.state.numAnswersShow);
      loadMoreButton = <button className="btn btn-xs btn-info pull-right" type="button" onClick={this.loadMoreAnswers} style={{marginLeft: '10px'}}>Load more</button>;
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading">{this.props.question.text}
          <button
            className={`btn btn-xs btn-warning glyphicon glyphicon-trash pull-right ${this.props.userId !== this.props.question.owner ? 'hidden' : ''}`}
            onClick={() => this.props.onRemoveQuestionClick(this.props.question.id)}>
          </button>
          <span className="pull-right">Expira el: {this.props.question.expirationDate}</span>
        </div>

        <div className="panel-body">
          {this.props.question.answers.length > 0 ? (
            <div>
              <ul className="list-group">
                {showAnswers}
              </ul>
              {loadMoreButton}
              {hideButton}
            </div>
          ) : 'No answers yet'}
        </div>
        <div className="panel-footer">
          <form className="form-horizontal">
            <div className="input-group col-sm-10">
              <input type="text" className="form-control" id="answerInput" placeholder="Enter your answer..." ref={(i) => { this.state.answerInput = i; }} />
              <span className="input-group-btn">
                <button className="btn btn-info" type="button" onClick={this.handleClick}>Answer</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default connect(null, mapDispatchToProps)(Question);
