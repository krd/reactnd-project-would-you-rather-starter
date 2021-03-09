import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestions } from '../actions/questions';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class NewQuestion extends Component {
  state = {
    navHome: false,
    disabled: true,
  };

  handleOnClick = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const question = {
      author: authedUser,
      optionOneText: this.optionOne.value,
      optionTwoText: this.optionTwo.value,
    };
    dispatch(handleAddQuestions(question));
    this.setState(() => ({ ...this.state, navHome: true }));
  };

  render() {
    const { navHome } = this.state;

    // TODO:  should I be redirecting to home or showing question summary?
    if (navHome) {
      return <Redirect to="/dashboard" />;
    }

    return (
      <section className="dashboard-section text-center" id="about">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-4">Create a New Quesion</h2>
        </div>
        <section className="contact-section">
          <Container>
            <Row>
              <Col></Col>
              <Col xs={6}>
                <div className="container">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <h4 className="text-uppercase m-0">
                        Would You Rather...
                      </h4>
                      <h4 className="text-uppercase m-0"> </h4>
                      <hr className="my-2" />
                      <Form>
                        <Form.Group controlId="formBasicEmail">
                          <Form.Label>Option One</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter first option..." ref={(input) => (this.optionOne = input)}
                          />
                          <Form.Text className="text-muted">
                            OR
                          </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                          <Form.Label>Option Two</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter second option..."
                            ref={(input) => (this.optionTwo = input)}
                          />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.handleOnClick}>
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </section>
        <div className="container">
          <img className="img-fluid" src="assets/img/ipad.png" alt="" />
        </div>
      </section>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}
export default connect(mapStateToProps)(NewQuestion);
