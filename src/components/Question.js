import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

class Question extends Component {
  render() {
    const { question } = this.props;

    if (question === null) {
      return <p>This Question doesn't exist, dawg</p>;
    }

    console.log('QUESTION: ', question);
    return <div className="center">{this.props.id}</div>;
  }
}

function mapStateToProps({ users, questions }, { id }) {
  const question = questions[id];
  return { question: question, users };
}

export default withRouter(connect(mapStateToProps)(Question))