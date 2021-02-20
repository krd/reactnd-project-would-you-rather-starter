import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Dashboard from './Dashboard';
import Question from './Question';
import NewQuestion from './NewQuestion';
import Nav from './Nav';
import LeaderBoard from './LeaderBoard';
import Login from './Login';
import { handleInitialData } from '../actions/shared'

class App extends Component {
  componentDidMount() {
      this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Route path="/" exact component={Dashboard} />
          <Route path="/leaderboard" component={LeaderBoard} />
          <Route path="/question/:id" component={Question} />
          <Route path="/new" component={NewQuestion} />
          <Route path="/login" component={Login} />
        </div>
      </Router>
    );
  }
}

//   function mapStateToProps ({ authedUser }) {
//     return {
//       loading: authedUser === null
//     }
//   }

export default connect()(App);
