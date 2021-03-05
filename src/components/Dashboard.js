import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from './Answer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
  render() {
    const { answered, unanswered, user } = this.props;
    return (
      <div className="container">
        <div className="center"><h3 >Your Dashboard</h3></div>
        <Tabs id="uncontrolled-tab-example">
          <TabList>
            <Tab title="Unanswered">Unanswered Questions</Tab>
            <Tab title="Answered">Answered Questions</Tab>
          </TabList>

          <TabPanel>
            <div>
              Or I shall live your epitaph to make, Or you survive when I in
              earth am rotten; From hence your memory death cannot take,
              Although in me each part will be forgotten. Your name from hence
              immortal life shall have, Though I, once gone, to all the world
              must die: The earth can yield me but a common grave, When you
              entombed in men's eyes shall lie. Your monument shall be my gentle
              verse, Which eyes not yet created shall o'er-read;
            </div>
            {unanswered.length === 0 ? (
              <h2>You have no unanswered questions</h2>
            ) : (
              ''
            )}
            <ul className="dashboardList">
              {unanswered.map((q) => {
                return (
                  <li key={q.id}>
                    <Question id={q.id} />
                  </li>
                );
              })}
            </ul>
          </TabPanel>
          <TabPanel>
            <div>
              Or I shall live your epitaph to make, Or you survive when I in
              earth am rotten; From hence your memory death cannot take,
              Although in me each part will be forgotten. Your name from hence
              immortal life shall have, Though I, once gone, to all the world
              must die: The earth can yield me but a common grave, When you
              entombed in men's eyes shall lie. Your monument shall be my gentle
              verse, Which eyes not yet created shall o'er-read;
            </div>
            <ul className="dashboardList">
              {answered.map((q) => {
                return (
                  <li key={q.id}>
                    <Answer question={q} user={user} author={q.author} />
                  </li>
                );
              })}
            </ul>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}

function mapStateToProps({ questions, authedUser, users }) {
  const answered = Object.keys(questions)
    .map((key) => {
      return questions[key];
    })
    .filter(
      (question) =>
        question.optionOne.votes.includes(authedUser) ||
        question.optionTwo.votes.includes(authedUser)
    );
  const unanswered = Object.keys(questions)
    .map((key) => {
      return questions[key];
    })
    .filter(
      (question) =>
        !question.optionOne.votes.includes(authedUser) &&
        !question.optionTwo.votes.includes(authedUser)
    );
  const user = users[authedUser];

  return {
    answered,
    unanswered,
    user,
  };
}
export default connect(mapStateToProps)(Dashboard);
