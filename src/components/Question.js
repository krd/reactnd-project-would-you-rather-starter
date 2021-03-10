import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionForm from './QuestionForm'
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  handleModalDisplay = () => {
    console.log('handleModalDisplay... ', this.state);
    this.setState(() => ({
      show: !this.state.show,
    }));
  };


  render() {
    const { question, author } = this.props;

    if (question === null) {
      return <p>The question you selected no longer exists.</p>;
    }

    return (
      <section className="contact-section">
        <Container>
          <Row>
            <Col></Col>
            <Col xs={6}>
              <div className="container">
                <a onClick={this.handleModalDisplay} className="modal-link">
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className="avatar"
                      />
                      <h4 className="text-uppercase m-0">
                        {author.name} Asks:
                      </h4>
                      <h4 className="text-uppercase m-0"> </h4>
                      <hr className="my-2" />
                      <h4>
                        <i>"Would You Rather {question.optionOne.text}, or..."</i>
                      </h4>
                    </div>
                  </div>
                </a>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <Modal show={this.state.show} centered onHide={this.handleModalDisplay}>
          <Modal.Header closeButton onClick={this.handleModalDisplay}>
            <Modal.Title>Cast Your Vote</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <QuestionForm id={question.id}/>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const author = users[question.author];
  return { question, author };
}

export default withRouter(connect(mapStateToProps)(Question));
