import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class Dashboard extends Component {
  // tie to store
  // retreiving answered and unanswered

  render() {

    return (
      <div>
        <h3 className="center">Your Dashboard</h3>
        <ul className="dashboardList">
          {this.props.questionIds.map((id) => {
            return (
              <li key={id}>
                <Question id={id} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ questions }) {
  return {
    questionIds: Object.keys(questions).sort(
      (a, b) => questions[a].timestamp - questions[b].timestamp
    ),
  };
}
export default connect(mapStateToProps)(Dashboard);
