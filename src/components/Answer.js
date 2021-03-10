import React from 'react';
import { ProgressBar, Badge } from 'react-bootstrap';

function Answer(props) {

  // TODO:  figure out how to insert className with hooks
  const { question, user, author } = props;
  const { optionOne, optionTwo, id } = question;
  const total =
    question.optionOne.votes.length + question.optionTwo.votes.length;
  const userVote = user.answers[id];
  const optionOnePercent =
    (optionOne.votes.length !== 0 ? optionOne.votes.length / total : 0) * 100;
  const optionTwoPercent =
    (optionTwo.votes.length !== 0 ? optionTwo.votes.length / total : 0) * 100;

      let optionOneVoteClass = 'font-italic vote';
      let optionTwoVoteClass = 'font-italic vote';

    if (userVote === 'optionOne') {
        optionOneVoteClass += ' your-vote'
    } else if (userVote === 'optionTwo') {
        optionTwoVoteClass += ' your-vote'
    }

  return (
    <section className="contact-section">
      <div className="container-fluid">
        <div className="row center">
          <div className="card">
            <div className="card-horizontal">
              <div className="vote-img">
                <img
                  src={author.avatarURL}
                  alt={`Avatar of ${author.name}`}
                  className="avatar-med"
                />
              </div>
              <div>
                <h4 className="text-center">{author.name} Asked...</h4>
                <hr />
                <div className={optionOneVoteClass} id="optionOneBlock">
                  {userVote === 'optionOne' ? (
                    <div className="vote-badge">Your Vote</div>
                    
                  ) : (
                    ''
                  )}
                  Would you rather {optionOne.text}?
                  <div>
                    <ProgressBar
                      now={optionOnePercent}
                      label={`${optionOnePercent}%`}
                      className="vote-progress-bar"
                    />
                  </div>
                  <div>
                    <small>
                      {question.optionOne.votes.length} out of {total} votes
                    </small>
                  </div>
                </div>

                <div className={optionTwoVoteClass} id="optionTwoBlock">
                  Would you rather {optionTwo.text}?
                  {userVote === 'optionTwo' ? (
                    <div className="vote-badge">Your Vote</div>
                  ) : (
                    ''
                  )}
                  <div>
                    <ProgressBar
                      now={optionTwoPercent}
                      label={`${optionTwoPercent}%`}
                      className="vote-progress-bar"
                    />
                  </div>
                  <div className="center">
                    <small>
                      {question.optionTwo.votes.length} out of {total} votes
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Answer;
