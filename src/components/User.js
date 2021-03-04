import React from 'react';

export default function User(props) {
  const { user } = props;
  return (
    <div className="tweet">
      <img
        src={user.avatarURL}
        alt={`Avatar of ${user.name}`}
        className="avatar"
      />
      <div className="tweet-info">
        <h2>{user.name}</h2>
        <div className="tweet">
            <span>Questions Created {user.questions.length}</span>
        </div>
        <div className="tweet">
            <span>Questions Answered {Object.keys(user.answers).length}</span>
        </div>
      </div>
      <div> 
          <div><span>Score { user.questions.length + +Object.keys(user.answers).length }</span></div>
        </div>
    </div>
  );
}
