import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { loginUser } from '../actions/users';
import { setAuthedUser } from '../actions/authedUser';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = '';
  }

  handleSignIn = (e) => {
    const { dispatch } = this.props;
    dispatch(setAuthedUser(this.state.selectedUser));
  };

  handleSelect = (e) => {
    const selectedUser = e.target.value;
    this.setState(() => ({
      selectedUser,
    }));
  };

  render() {
    const { registeredUsers } = this.props;

    return (
      <div className="center">
        Login
        <p className="sign" align="center">
          Sign in
        </p>
        <form className="form1">
          <select className="vodiapicker" onChange={this.handleSelect}>
            <option value="none"> -- Select User --</option>
            {registeredUsers.map((user) => {
              return (
                <option value={user.id} key={user.id}>
                  {user.name}
                </option>
              );
            })}

            {/* <option value="en" class="test" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/LetterA.svg/2000px-LetterA.svg.png">English</option>
            <option value="au" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/NYCS-bull-trans-B.svg/480px-NYCS-bull-trans-B.svg.png">Engllish (AU)</option>
            <option value="uk" data-thumbnail="https://glot.io/static/img/c.svg?etag=ZaoLBh_p">Chinese (Simplified)</option>
            <option value="cn" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/NYCS-bull-trans-D.svg/2000px-NYCS-bull-trans-D.svg.png">German</option>
            <option value="de" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MO-supp-E.svg/600px-MO-supp-E.svg.png">Danish</option>
            <option value="dk" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/F_icon.svg/267px-F_icon.svg.png">French</option>
            <option value="fr" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2000px-Google_%22G%22_Logo.svg.png">Greek</option>
            <option value="gr" data-thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/4H_Emblem.svg/1000px-4H_Emblem.svg.png">Italian</option> */}
          </select>

          {/* <input
            class="un "
            type="text"
            align="center"
            placeholder="Username"
          />
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
          /> */}
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
