import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: OPTION_ONE,
      navHome: false,
      answered: false,
    };
  }

  handleOnClick = (e) => {
    e.preventDefault();

    const { dispatch, user } = this.props;

    dispatch(
      handleSaveQuestionAnswer(
        this.props.question.id,
        this.state.selectedOption,
        user
      )
    );

    this.setState(() => ({
      selectedOption: OPTION_ONE,
      navHome: true,
      answered: true,
    }));
  };

  handleOnChange = (e) => {
    const selectedOption = e.target.value;
    this.setState(() => ({ selectedOption }));
  };

  render() {
    const { answered } = this.state;
    const { author, question, user } = this.props;
    const { optionOne, optionTwo } = question;

    if (answered) {
      return <Answer author={author} user={user} question={question} />;
    } else {
      return (
        <div className="tweet">
          <h3 className="center">
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
              className="avatar"
            />{' '}
            {author.name} Asks Would You Rather...
          </h3>
          <div className="center">
            <div>
              <input
                type="radio"
                value={OPTION_ONE}
                name="question"
                checked={
                  this.state.selectedOption === OPTION_ONE ? true : false
                }
                onChange={this.handleOnChange}
              />
              {optionOne.text}
            </div>
            <h3>Or</h3>
            <div>
              <input
                type="radio"
                value={OPTION_TWO}
                name="question"
                checked={
                  this.state.selectedOption === OPTION_TWO ? true : false
                }
                onChange={this.handleOnChange}
              />
              {optionTwo.text}
            </div>
            <div>
              <button className={'submit'} onClick={this.handleOnClick}>
                Submit It
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

function Answer(props) {
  const { question, user, author } = props;
  const { optionOne, optionTwo, id } = question;
  const total =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const userVote = user.answers[id];
  return (
    <div className="tweet-info">
      <h3>Asked by {author.name}</h3>
      <h3 className="center">
        <img
          src={user.avatarURL}
          alt={`Avatar of ${user.name}`}
          className="avatar"
        />
        Results: Total Votes ({total})
      </h3>
      <div className="center">
        <div className="tweet-info">
          <h4>
            Would ya rather {optionOne.text}?{' '}
            {userVote === 'optionOne' ? '(Your Vote)' : ''}
          </h4>
          {question.optionOne.votes.length} out of {total} votes
        </div>
        <div className="tweet-info">
          <h4>
            Would you rather {optionTwo.text}?{' '}
            {userVote === 'optionTwo' ? '(Your Vote)' : ''}
          </h4>
          {question.optionTwo.votes.length} out of {total} votes
        </div>
      </div>
    </div>
  );
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params;
  const question = questions[id];
  const author = users[question.author];
  const user = users[authedUser];

  return {
    question,
    author,
    user,
  };
}
export default withRouter(connect(mapStateToProps)(QuestionForm));
