import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';
import { Container, Row, Col } from 'react-bootstrap'

class LeaderBoard extends Component {
  render() {
    const { rankings, users } = this.props;
    return (
      <section className="dashboard-section text-center" id="about">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-4">Leaderboard</h2>
          <p className="text-white-50">
            View the standings for the Would you rather game? . The theme is
            open source, and you can use it for any purpose, personal or
            commercial.
          </p>
        </div>
        <Container>
          <Row>
          <Col></Col>
          <Col xs={6}>
          <ul className="dashboardList">
            {rankings.map((id) => {
              return (
                <li key={id}>
                  <User user={users[id]} />
                </li>
              );
            })}
          </ul>
          </Col>
          <Col></Col>
          </Row>
        </Container>

        <div className="container">
          <img className="img-fluid" src="assets/img/ipad.png" alt="" />
        </div>
      </section>
    );
  }
}

function mapStateToProps({ users }) {
  const rankings = Object.keys(users).sort((a, b) => {
    return (
      users[b].questions.length +
      +Object.keys(users[b].answers).length -
      (users[a].questions.length + +Object.keys(users[a].answers).length)
    );
  });

  return {
    rankings,
    users,
  };
}
export default connect(mapStateToProps)(LeaderBoard);
