import React, { Component } from 'react';
import { ArrowRight, House } from 'react-bootstrap-icons'

class Tabs extends Component {
   
    componentDidMount() {
        // window.
    }
  
    render() {
    return (
      <header className="masthead">
        {/* <section style="background:#efefe9;"> */}
        <section>
          <div className="">
            <div className="row">
              <div className="board-krd">
                <div className="board-inner">
                  <ul className="nav-krd" id="myTab">
                    <div className="liner"></div>
                    <li >
                      <a href="#home" title="welcome">
                        <span className="round-tabs one">
                        <House />
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="#profile" title="profile">
                        <span className="round-tabs two">
                        <House />
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#messages"
                        
                        title="bootsnipp goodies"
                      >
                        <span className="round-tabs three">
                          <House />
                        </span>{' '}
                      </a>
                    </li>

                    <li >
                      <a href="#settings" title="blah blah">
                        <span className="round-tabs four">
                          <House className="round-tabs four"/>
                        </span>
                      </a>
                    </li>

                    <li>
                      <a href="#doner"  title="completed">
                        <span className="round-tabs five">
                          <ArrowRight  />
                        </span>{' '}
                      </a>
                    </li>
                  </ul>
                </div>

                {/* <div className="tab-content">
                  <div className="tab-pane fade " id="home">
                    <h3 className="head text-center">
                      Welcome to Bootsnipp{' '}
                      <span className="krd-icon-color">♥</span>
                    </h3>
                    <p className="narrow text-center">
                      Lorem ipsum dolor sit amet, his ea mollis fabellas
                      principes. Quo mazim facilis tincidunt ut, utinam saperet
                      facilisi an vim.
                    </p>

                    <p className="text-center">
                      <a
                        href=""
                        className="btn btn-success btn-outline-rounded green"
                      >
                        {' '}
                        start using bootsnipp{' '}
                        <span className="glyphicon glyphicon-send krd-glyph-margin"></span>
                      </a>
                    </p>
                  </div>
                  <div className="tab-pane fade " id="profile">
                    <h3 className="head text-center">
                      Create a Bootsnipp<sup>™</sup> Profile
                    </h3>
                    <p className="narrow text-center">
                      Lorem ipsum dolor sit amet, his ea mollis fabellas
                      principes. Quo mazim facilis tincidunt ut, utinam saperet
                      facilisi an vim.
                    </p>

                    <p className="text-center"></p>
                  </div>
                  <div className="tab-pane fade " id="messages">
                    <h3 className="head text-center">Bootsnipp goodies</h3>
                    <p className="narrow text-center">
                      Lorem ipsum dolor sit amet, his ea mollis fabellas
                      principes. Quo mazim facilis tincidunt ut, utinam saperet
                      facilisi an vim.
                    </p>

                    <p className="text-center">
                      <a
                        href=""
                        className="btn btn-success btn-outline-rounded green"
                      >
                        {' '}
                        start using bootsnipp{' '}
                        <span className="glyphicon glyphicon-send krd-glyph-margin"></span>
                      </a>
                    </p>
                  </div>
                  <div className="tab-pane fade" id="settings">
                    <h3 className="head text-center">Drop comments!</h3>
                    <p className="narrow text-center">
                      Lorem ipsum dolor sit amet, his ea mollis fabellas
                      principes. Quo mazim facilis tincidunt ut, utinam saperet
                      facilisi an vim.
                    </p>

                    <p className="text-center">
                      <a
                        href=""
                        className="btn btn-success btn-outline-rounded green"
                      >
                        {' '}
                        start using bootsnipp{' '}
                        <span className="glyphicon glyphicon-send krd-glyph-margin"></span>
                      </a>
                    </p>
                  </div>
                  <div className="tab-pane fade " id="doner">
                    <div className="text-center">
                      <i className="img-intro icon-checkmark-circle"></i>
                    </div>
                    <h3 className="head text-center">
                      thanks for staying tuned!{' '}
                      <span className="krd-icon-color">♥</span> Bootstrap
                    </h3>
                    <p className="narrow text-center">
                      Lorem ipsum dolor sit amet, his ea mollis fabellas
                      principes. Quo mazim facilis tincidunt ut, utinam saperet
                      facilisi an vim.
                    </p>
                  </div>
                  <div className="clearfix"></div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </header>
    );
  }
}
export default Tabs;
