import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestions } from '../actions/questions';

class NewQuestion extends Component {
  state = {
    navHome: false,
    disabled: true,
  };

  handleOnClick = (e) => {
    e.preventDefault();
    const { dispatch, authedUser } = this.props;
    const question = { author: authedUser, optionOneText: this.optionOne.value, optionTwoText: this.optionTwo.value }
    dispatch(handleAddQuestions(question)) 
    this.setState(() => ({ ...this.state, navHome: true }));
  };

  render() {

    const { navHome } = this.state
    
    // TODO:  should I be redirecting to home or showing question summary?
    if (navHome) {
        return <Redirect to='/' />
    }

    return (
      <div className="center">
        <h2>CREATE NEW QUESTION</h2>
        <div>Would you rather...</div>
        <input
          type="text"
          placeholder="Option one..."
          ref={(input) => (this.optionOne = input)}
        />
        <h4>OR</h4>
        <input
          type="text"
          placeholder="...option two?"
          ref={(input) => (this.optionTwo = input)}
        />
        <div>
          <button className="btn" onClick={this.handleOnClick} type="submit" >
          {/* disabled={this.optionOne.value === '' || this.optionTwo.value === ''} */}
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
    return {
      authedUser
    };
  }
export default  connect(mapStateToProps)(NewQuestion)