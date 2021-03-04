import React from 'react';

function Answer(props) {
    console.log('Answer props: ', props)
    const { question, user, author } = props;
    const { optionOne, optionTwo, id } = question;
    const total =
      question.optionOne.votes.length + question.optionTwo.votes.length;
      console.log('USER: ', user)
    const userVote = user.answers[id];
    return (
      <div className="tweet">
        <h3>Asked by {author.name}</h3>
        <h3 className="center">
          <img
            src={user.avatarURL}
            alt={`Avatar of ${user.name}`}
            className="avatar"
          />
          Results: Total Votes ({total})
        </h3>
        <div className="center">
          <div className="tweet-info">
            <h4>
              Would ya rather {optionOne.text}?{' '}
              {userVote === 'optionOne' ? '(Your Vote)' : ''}
            </h4>
            {question.optionOne.votes.length} out of {total} votes
          </div>
          <div className="tweet-info">
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