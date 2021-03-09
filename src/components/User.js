import React from 'react';

export default function User(props) {
  const { user } = props;
  return (
    <section className="contact-section bg-black">
      <div className="container">
        <div className="card py-4 h-100">
          <div className="card-body text-center">
            <img
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
              className="avatar"
            />
            <h4 className="text-uppercase m-0">{user.name}</h4>
            <hr className="my-4" />
            <div className="small text-black-50">
            Questions Created {user.questions.length}
            </div>
            <div className="small text-black-50">
            Questions Answered {Object.keys(user.answers).length}
            </div>
            <div className="small text-black-50">
            <h4 className="text-uppercase m-0">Score { user.questions.length + +Object.keys(user.answers).length }</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    // <div >
    //   <img
    //     src={user.avatarURL}
    //     alt={`Avatar of ${user.name}`}
    //     className="avatar"
    //   />
    //   <div >
    //     <h2>{user.name}</h2>
    //     <div >
    //         <span>Questions Created {user.questions.length}</span>
    //     </div>
    //     <div >
    //         <span>Questions Answered {Object.keys(user.answers).length}</span>
    //     </div>
    //   </div>
    //   <div>
    //       <div><span>Score { user.questions.length + +Object.keys(user.answers).length }</span></div>
    //     </div>
    // </div>
  );
}
