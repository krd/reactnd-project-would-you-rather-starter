import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import QuestionForm from './QuestionForm';
import Home from './Home';
import NewQuestion from './NewQuestion';
import NavMenu from './NavMenu';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import Tabs from './Tabs';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { user: '' };
    this.props.dispatch(handleInitialData());
  }

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }

//   handleScroll = () => {
//     if (window.scrollY > 20) {
//       document.querySelector(".navbar").className = "navbar scroll";
//     } else {
//       document.querySelector(".navbar").className = "navbar";
//     }
//   };


  render() {
    const { user } = this.props;
    if (user) {
      return <AppScreen user={user} />;
    }
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
          <NavMenu user={props.user} />
          <div>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/question/:id" component={QuestionForm} />
          <Route path="/new" exact component={NewQuestion} />
          <Route path="/login" component={Login} />
          <Route path="/tabs" component={Tabs} />
          </Switch>
          </div>
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
