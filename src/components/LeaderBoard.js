import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'

class LeaderBoard extends Component {
  render() {
      const { rankings, users } = this.props
    return (
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
