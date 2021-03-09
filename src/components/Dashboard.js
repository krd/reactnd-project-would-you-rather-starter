import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from './Answer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
  render() {
    const { answered, unanswered, user, users } = this.props;

    return (
       
      <section className="dashboard-section text-center" id="dashboard">
        <div className="col-lg-8 mx-auto">
          <h2 className="text-white mb-4">Your Dashboard</h2>
          <p className="text-white-50">
            Outlines your current status in the game. Broken down by questions
            you've answered and those unanswered.
          </p>
        </div>
        <div className="container">
          <Tabs id="uncontrolled-tab-example">
            <TabList className="nav nav-tabs nav-fill">
              <Tab title="Unanswered" style={{ background: '#64a19d' }}>
              Unanswered
              </Tab>
              <Tab title="Answered">
                Answered
              </Tab>
            </TabList>

            <TabPanel>
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
            <TabPanel className="center">
              <ul className="dashboardList">
                {answered.map((q) => {
                  const author = users[q.author];
                  return (
                    <li key={q.id}>
                      <Answer question={q} user={user} author={author} />
                    </li>
                  );
                })}
              </ul>
            </TabPanel>
          </Tabs>
        </div>
        <div className="container">
          <img className="img-fluid" src={require('../assets/img/ipad.png')} alt="" />
        </div>
      </section>
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
    users,
  };
}
export default connect(mapStateToProps)(Dashboard);
