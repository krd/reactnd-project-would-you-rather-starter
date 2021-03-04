import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

class Question extends Component {
  render() {
    const { id, question, user } = this.props;
    
    if (question === null) {
      return <p>This Question doesn't exist</p>;
    }

    return (
      <Link to={`/question/${id}`} className="tweet">
        <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" />
        <div className="tweet-info">
          <h3>{user.name} asks: </h3>
          <p>Would you rather...</p>
          <div>
            <span>{question.optionOne.text}, or...</span>
            <div></div>
          </div>
        </div>
      </Link>
    );
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  const user = users[question.author]
  return { question, user };
}

export default withRouter(connect(mapStateToProps)(Question));
