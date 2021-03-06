import React, { Component, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function Home(props) {

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
          </div>
        </div>
      </header>
      <section className="projects-section bg-light" id="projects">
            <div className="container">
                <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src={require('../assets/img/bg-masthead.jpg')} alt="" /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Shoreline</h4>
                            <p className="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                    <div className="col-lg-6"><img className="img-fluid" src={require('../assets/img/demo-image-01.jpg')} alt="" />'</div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Misty</h4>
                                    <p className="mb-0 text-white-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    <hr className="d-none d-lg-block mb-0 ml-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center no-gutters">
                    <div className="col-lg-6"><img className="img-fluid" src={require('../assets/img/demo-image-02.jpg')} alt="" /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Mountains</h4>
                                    <p className="mb-0 text-white-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    <hr className="d-none d-lg-block mb-0 mr-0" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
          <img className="img-fluid" src="assets/img/ipad.png" alt="" />
        </div>
        </section>
      
    </div>
  );
}

export default Home;
