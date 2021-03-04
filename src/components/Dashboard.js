import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import Answer from './Answer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class Dashboard extends Component {
  render() {
    
    const { answered, unanswered, user } = this.props;
    console.log('Dashboard props: ', user)
    return (
      <div>
        <h3 className="center">Your Dashboard</h3>
        <Tabs>
          <TabList>
            <Tab>Unanswered Questions</Tab>
            <Tab>Answered Questions</Tab>
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
          <TabPanel>
            <ul className="dashboardList">
              {answered.map((q) => {
                return (
                  <li key={q.id}>
                    <Answer question={q} user={user} author={q.author}/>
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
    const answered = Object.keys(questions).map((key) => {return questions[key]}).filter((question) => question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser) )
    const unanswered = Object.keys(questions).map((key) => {return questions[key]}).filter((question) => !question.optionOne.votes.includes(authedUser) && !question.optionTwo.votes.includes(authedUser) )
    const user = users[authedUser]

  return {
    answered,
    unanswered,
    user,
  };
}
export default connect(mapStateToProps)(Dashboard);
