import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

class Question extends Component {
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
                <Link to={`/question/${question.id}`}>
                  <div className="card py-4 h-100">
                    <div className="card-body text-center">
                      <img
                        src={author.avatarURL}
                        alt={`Avatar of ${author.name}`}
                        className="avatar"
                      />
                      <h4 className="text-uppercase m-0">
                        {author.name} Asks Would You Rather...
                      </h4>
                      <h4 className="text-uppercase m-0"> </h4>
                      <hr className="my-2" />
                      <h4>
                        <span>{question.optionOne.text}, or...</span>
                      </h4>
                    </div>
                  </div>
                </Link>
              </div>
            </Col>
            <Col></Col>
          </Row>
        </Container>
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
