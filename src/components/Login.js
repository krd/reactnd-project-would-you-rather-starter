import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';
import { Button, Modal } from 'react-bootstrap';
import Select from 'react-select';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { options: [], selectedUser: '', show: false };
  }

  handleSignIn = (e) => {
    console.log('handle sign in...');
    const { dispatch } = this.props;
    const id = this.state.selectedUser;
    dispatch(setAuthedUser(id));
  };

  handleSelect = (e) => {
    const selectedUser = e.value;
    this.setState(() => ({
      selectedUser,
    }));
  };

  handleModalDisplay = () => {
    console.log('handleModalDisplay... ', this.state);
    this.setState(() => ({
      show: !this.state.show,
    }));
  };

  initializeSelectOptions = () => {
    const { registeredUsers } = this.props;
    const options = [];
    registeredUsers.map((user) => {
      const { id, name, avatarURL } = user;
      const option = {
        value: id,
        label: (
          <div>
            <img src={avatarURL} height="20px" width="20px" /> {name}
          </div>
        ),
      };
      options.push(option);
    });
    return options;
  };

  render() {
    const options = this.initializeSelectOptions();

    const { show } = this.state;

    return (
      <div>
        <header className="masthead">
          <div className="container d-flex h-100 align-items-center">
            <div className="mx-auto text-center">
              <h1 className="mx-auto my-0 text-uppercase">Would You Rather?</h1>
              <h2 className="text-white-50 mx-auto mt-2 mb-5">
                Explore the inner depths of your mind and soul. Are you a good
                person? A bad one? Time to find out...
              </h2>
              <a
                className="btn btn-primary js-scroll-trigger"
                onClick={this.handleModalDisplay}
              >
                Login
              </a>
            </div>
          </div>
        </header>
        <Modal show={this.state.show} centered onHide={this.handleModalDisplay}>
          <Modal.Header closeButton onClick={this.handleModalDisplay}>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <Select
                options={options}
                onChange={(event) => this.handleSelect(event)}
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleSignIn}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  const registeredUsers = Object.values(users);
  return { registeredUsers };
}

export default withRouter(connect(mapStateToProps)(Login));
