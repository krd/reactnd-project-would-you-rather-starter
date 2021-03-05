import React from 'react';

function Answer(props) {
  const { question, user, author } = props;
  const { optionOne, optionTwo, id } = question;
  const total =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const userVote = user.answers[id];
  return (
    <div >
      <h3>Asked by {user.name}</h3>
      <h3 className="center">
        Results: Total Votes ({total})
      </h3>
      <div className="center">
      <div className="circle"><img src={user.avatarURL} alt={`Avatar of ${user.name}`} className="avatar" /></div>
        <div>
          <h4>
            Would you rather {optionOne.text}?{' '}
            {userVote === 'optionOne' ? '(Your Vote)' : ''}
          </h4>
          {question.optionOne.votes.length} out of {total} votes
        </div>
        <div >
          <h4>
            Would you rather {optionTwo.text}?{' '}
            {userVote === 'optionTwo' ? '(Your Vote)' : ''}
          </h4>
          {question.optionTwo.votes.length} out of {total} votes
        </div>
      </div>
    </div>
  );
}
export default Answer;
