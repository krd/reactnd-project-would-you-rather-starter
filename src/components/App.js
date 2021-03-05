import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import QuestionForm from './QuestionForm';
import Home from './Home';
import NewQuestion from './NewQuestion';
import NavMenu from './NavMenu';
import Nav2 from './Nav2';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    this.props.dispatch(handleInitialData());
  }

  render() {
    const { user } = this.props;
    if (user) {
      console.log(' Going to app: ', this.props);
      return <AppScreen user={user} />;
    }
    console.log('heading to login screen');
    return <LoginScreen />;
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
    <div>
      <Router>
        <Fragment>
          {/* <Home/>
          <LeaderBoard />
          <Dashboard /> */}
          {/* <Nav2 user={props.user} /> */}
          <NavMenu user={props.user} />
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
          <Route path="/question/:id" exact component={QuestionForm} />
          <Route path="/new" exact component={NewQuestion} />
          <Route path="/login" component={Login} />
        </Fragment>
      </Router>
    </div>
  );
}

function mapStateToProps({ users, authedUser }) {
  console.log();
  console.log('authedUser: ', authedUser);
  console.log('usrs: ', users);
  const user = users[authedUser];
  console.log('currentUser: ', user);

  return {
    authedUser,
    user,
  };
}
export default connect(mapStateToProps)(App);
