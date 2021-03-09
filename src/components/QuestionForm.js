import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleSaveQuestionAnswer } from '../actions/questions';
import { Container, Row, Col, Form } from 'react-bootstrap';

const OPTION_ONE = 'optionOne';
const OPTION_TWO = 'optionTwo';

class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: OPTION_TWO,
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
    console.log('changed to option: ', selectedOption)
    this.setState(() => ({ selectedOption }));
    console.log('selected option in state: ', this.state.selectedOption)
  };

  render() {
    const { answered } = this.state;

    if (answered) {
        return <Redirect to='/dashboard' />
    }

    const { author, question, user } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <section className="dashboard-section text-center" id="about">
          <div className="col-lg-8 mx-auto">
            <h2 className="text-white mb-4">Question Form</h2>
            <p className="text-white-50">
              Answer the question, Claire. Answer the question, Claire. Answer
              the question, Claire. Answer the question, Claire. Answer the
              question, Claire. Answer the question, Claire. Answer the
              question, Claire.
            </p>
          </div>
          <div className="container">
            <img className="img-fluid" src="assets/img/ipad.png" alt="" />
          </div>
        </section>
        <section className="contact-section bg-secondary">
          <Container>
            <Row>
              <Col></Col>
              <Col xs={6}>
                <div className="container">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className="avatar"
                      />{' '}
                      <h4 className="text-uppercase m-0">{author.name}</h4>
                      <h4 className="text-uppercase m-0">
                        {' '}
                        Asks Would You Rather...
                      </h4>
                      <hr className="my-2" />
                      <div className="small text-black-50">
                        <div className="center">
                          <Form.Group controlId="question">
                            <div>
                            <Form.Check name="question" type="radio" aris-label="radio 1" label={optionOne.text} value={OPTION_ONE} onChange={this.handleOnChange}/>
                             </div>
                            <h4 className="text-uppercase m-0">Or</h4>
                            <div>
                              <Form.Check name="question" type="radio" aris-label="radio 2" label={optionTwo.text} value={OPTION_TWO} onChange={this.handleOnChange}/>
                            </div>
                            <div>
                              <button className="btn btn-primary " onClick={this.handleOnClick}>
                                Submit Your Answer
                              </button>
                            </div>
                          </Form.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </section>
      </div>
    );
  }
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
