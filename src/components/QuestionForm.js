import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { Container, Row, Col, Form } from 'react-bootstrap';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';
const WOULD_YOU_RATHER = 'Would you rather ';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: OPTION_TWO,
      navHome: false,
      answered: false,
      optionOne: null,
      optionTwo: null,
    };
  }

  componentDidMount = () => {
    const { optionOne, optionTwo } = this.props.question;
    const optionOneText = '"Would you rather ' + optionOne.text + '?"';

    this.setState(() => ({
      ...optionOne,
      text: optionOneText,
    }));
    const optionTwoText = '"Would you rather ' + optionTwo.text + '?"';
    this.setState(() => ({
      ...optionTwo,
      text: optionTwoText,
    }));
  };

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

    if (answered) {
      return <Redirect to="/dashboard" />;
    }

    const { author, question } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <div className="card">
        <div className="text-center">
          <div className="vote-img">
            <img
              src={author.avatarURL}
              alt={`Avatar of ${author.name}`}
              className="avatar-med"
            />
          </div>
          <div>
            <h4 className="text-center">{author.name} Asks...</h4>
            <hr className="my-2" />
            <Form.Group controlId="question">
              <div className="font-italic vote" id="optionOneBlock">
                <Form.Check
                  name="question"
                  type="radio"
                  aris-label="radio 1"
                  label={optionOne.text}
                  value={OPTION_ONE}
                  onChange={this.handleOnChange}
                  checked
                />
              </div>
              <h4 className="text-uppercase m-0 text-center">Or</h4>
              <div className="font-italic vote" id="optionTwoBlock">
                <Form.Check
                  name="question"
                  type="radio"
                  aris-label="radio 1"
                  label={optionTwo.text}
                  value={OPTION_TWO}
                  onChange={this.handleOnChange}
                />
              </div>
              <div className="text-center">
                <button
                  className="btn btn-primary center"
                  onClick={this.handleOnClick}
                >
                  Submit Your Vote
                </button>
              </div>
            </Form.Group>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];

  // TODO:  find a more react way to do this
  const optionOne = question.optionOne;
  if (!optionOne.text.startsWith(WOULD_YOU_RATHER)) {
    optionOne.text = WOULD_YOU_RATHER + optionOne.text + '?';
  }

  const optionTwo = question.optionTwo;
  if (!optionTwo.text.startsWith(WOULD_YOU_RATHER)) {
    optionTwo.text = WOULD_YOU_RATHER + optionTwo.text + '?';
  }

  const author = users[question.author];
  const user = users[authedUser];

  return {
    question,
    author,
    user,
    optionOne,
    optionTwo,
  };
}
export default withRouter(connect(mapStateToProps)(QuestionForm));
