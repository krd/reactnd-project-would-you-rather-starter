import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User';

class LeaderBoard extends Component {
  render() {
    const { rankings, users } = this.props;
    return (
      <section class="about-section text-center" id="about">
        <div class="col-lg-8 mx-auto">
          <h2 class="text-white mb-4">Leaderboard</h2>
          <p class="text-white-50">
            View the standings for the Would you rather game? . The theme is
            open source, and you can use it for any purpose, personal or
            commercial.
          </p>
        </div>
        <div>
          <ul className="dashboardList">
            {rankings.map((id) => {
              return (
                <li key={id}>
                  <User user={users[id]} />
                </li>
              );
            })}
          </ul>
        </div>

        <div class="container">
          <img class="img-fluid" src="assets/img/ipad.png" alt="" />
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
