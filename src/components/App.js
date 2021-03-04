import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import QuestionForm from './QuestionForm';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    const { authedUser } = this.props;

    if (authedUser) {
      return <AppScreen user={this.props.user} />;
    }
    return <LoginScreen />;
    // return (
    //   <Router>
    //     <div className="container">
    //       <Nav user={this.props.user} />
    //       <Route path="/" exact component={Dashboard} />
    //       <Route path="/leaderboard" component={LeaderBoard} />
    //       <Route path="/question/:id" component={QuestionForm} />
    //       <Route path="/new" component={NewQuestion} />
    //       <Route path="/login" component={Login} />
    //     </div>
    //   </Router>
    // );
  }
}

function LoginScreen() {
  return (
    <Router>
      <Login />
    </Router>
  );
}

function AppScreen(props) {
  return (
    <Router>
      <div className="container">
        <Nav user={props.user} />
        <Route path="/" exact component={Dashboard} />
        <Route path="/leaderboard" component={LeaderBoard} />
        <Route path="/question/:id" component={QuestionForm} />
        <Route path="/new" component={NewQuestion} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

function mapStateToProps({ users, authedUser }) {
  const currentUser = users[authedUser];

  return {
    authedUser,
    user: users[authedUser],
  };
}

export default connect(mapStateToProps)(App);
