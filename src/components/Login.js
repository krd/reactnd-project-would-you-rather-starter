import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';
import Select from 'react-select'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {options: [], selectedUser: ''};
  }

  handleSignIn = (e) => {
    const { dispatch } = this.props;
    // const id = e.target.value
    const id = this.state.selectedUser
    console.log('ID for sign in: ', id)
    dispatch(setAuthedUser(id));
  };

  handleSelect = (e) => {
    const selectedUser = e.value;
    console.log('Now selecting: ', selectedUser)
    this.setState(() => ({
      selectedUser,
    }));
  };

  initializeSelectOptions = () => {
    const { registeredUsers } = this.props;
    const options = []
    registeredUsers.map((user) => {
        const { id, name, avatarURL } = user
        const label = <div><img src={avatarURL} height="20px" />  {name}</div>;
        const option = {
            value: id,
            label: label,
        }
        options.push(option)
      })
      return options;
  }

  render() {
    
    const options = this.initializeSelectOptions()

    return (
      <div className="login-container">
        Login
        <p className="sign" align="center">
          Sign in
        </p>
        <form>
        <Select options={options} onChange={(event) => this.handleSelect(event)} />
          <a className="submit" align="center" onClick={this.handleSignIn}>
            Sign in
          </a>
        </form>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  const registeredUsers = Object.values(users);
  return { registeredUsers };
}

export default withRouter(connect(mapStateToProps)(Login));
