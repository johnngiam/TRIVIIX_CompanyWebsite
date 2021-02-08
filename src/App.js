// import logo from './logo.svg';
import React from "react";
import "./App.css";
import "./css/main.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <script src="./particlejs/particles.min.js"></script>
        <div className="page-loader" id="page-loader">
          <div>
            <div className="icon ion-spin"></div>
            <p>loading</p>
          </div>
        </div>

        <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">
          <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
            <span className="menu-icon menu-icon-random">
              <span className="bars">
                <span className="bar1"></span>
                <span className="bar2"></span>
                <span className="bar3"></span>
              </span>
            </span>
          </button>
          <a className="navbar-brand" href="#home">
            <span className="logo">
              <img className="light-logo" src="img/logo.png" alt="Logo" />
            </span>
            <span className="text">
              <span className="line">De &#8226; AI</span>
              <span className="line sub">AI is the future</span>
            </span>
          </a>
          <div className="all-menu-wrapper" id="navbarMenu">
            <nav className="navbar-mainmenu">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="./index.html#home">
                    Home <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./index.html#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="./index.html#services">
                    Services
                  </a>
                </li>
              </ul>
            </nav>
            <nav className="navbar-sidebar ">
              <ul className="navbar-nav" id="qmenu">
                <li className="nav-item" data-menuanchor="home">
                  <a href="#home">
                    <i className="icon ion-ios-home-outline"></i>
                    <span className="txt">Home</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="about">
                  <a href="#about">
                    <i className="icon ion-ios-information-outline"></i>
                    <span className="txt">About</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="services">
                  <a href="#services">
                    <i className="icon ion-ios-list-outline"></i>
                    <span className="txt">Services</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="projects">
                  <a href="#projects">
                    <i className="icon ion-ios-albums-outline"></i>
                    <span className="txt">Projects</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="register">
                  <a href="#register">
                    <i className="icon ion-ios-compose-outline"></i>
                    <span className="txt">Team</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="contact">
                  <a href="#contact">
                    <i className="icon ion-ios-telephone-outline"></i>
                    <span className="txt">Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <div class="hh-cover page-cover">
          <div
            class="cover-bg bg-img "
            data-image-src="./css/img/bg-default1.jpg"
          ></div>
          <div
            id="particles-js"
            class="cover-bg pos-abs full-size bg-color"
            data-bgcolor="rgba(2, 3, 10, 0.7)"
          ></div>
        </div>

        <main class="page-main page-fullpage main-anim" id="mainpage">
          <div
            class="section section-home fullscreen-md fp-auto-height-responsive "
            data-section="home"
          >
            <div class="section-wrapper">
              <div class="section-content anim">
                <div class="row">
                  <div class="col-12 col-md-6 text-left">
                    <div class="title-desc">
                      <div class="ml14">
                        <span class="text-wrapper">
                          <span class="line line1" id="line"></span>
                          <h2 class="display-4 display-title home-title anim-1 letters">
                            De &#8226; AI
                          </h2>
                          {/* <!-- <span class="line"></span> bordered --> */}
                        </span>
                      </div>
                      {/* <!-- <h2 class="display-4 display-title home-title bordered anim-1">De &#8226; AI</h2> --> */}
                      <div class="ml6">
                        <span class="text-wrapper">
                          <h4 class="letters">AI is the future.</h4>
                        </span>
                      </div>
                    </div>

                    <div class="btns-action anim-3">
                      <a class="btn btn-outline-white btn-round" href="#about">
                        Get started
                      </a>
                    </div>
                  </div>

                  <div class="col-12 col-md-6 right-content hidden-sm center-vh">
                    <div class="section-content">
                      <div class="illustr zoomout-1">
                        <img class="logo" src="img/logo_white.png" alt="Logo" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="section section-description fp-auto-height-responsive "
            data-section="about"
          >
            <div class="section-wrapper center-vh dir-col anim">
              <div class="section-title text-center">
                {/* <!-- <h5 class="title-bg">About</h5> -->
              <!-- <h1 id="txtabout" class="typewrite display-4 display-title anim-2 illustr zoomout-1" data-period="100000" data-type='[ "Everything is possible" ]'> -->
                  <!-- <span class="wrap">display-4 display-title animated animatedFadeInUp fadeInUp</span> 
              </h1>--> */}
                <h2 class="display-4 display-title anim-2 illustr zoomout-1 ml12">
                  Everything is possible
                </h2>
              </div>

              <div class="section-content reduced anim text-center">
                <div class="title-desc anim-3">
                  <p
                    id="txtabout"
                    class="typewriter"
                    data-period="5000"
                    data-type='[ "Dream, dream, dream! Conduct these dreams into thought, and then transform them into action. With us, your dream can put into action." ]'
                  >
                    <span class="wrap"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            class="section section-list-feature fp-auto-height-responsive "
            data-section="about1"
          >
            <div class="section-wrapper twoside anim">
              <div class="section-title text-center">
                <div class="display-4 display-title about">About</div>
                {/* style="animation:bounceInLeft; animation-duration:10s" */}
              </div>

              <div class="row">
                <div class="col- col-md-6 col-lg-6">
                  <div class="section-content zoomout-1 fade-1">
                    <h2>Vision</h2>
                    <ul>1. testing 1 </ul>
                    <ul>2. testing 2</ul>
                    <ul>3. testing 2</ul>
                    <ul>4. testing 2</ul>
                    <ul>5. testing 2</ul>
                    <ul>6. testing 2</ul>
                    <ul>7. testing 2</ul>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div class=" section-content zoomout-1 fade-4">
                    <h2>Mission</h2>
                    <ul>1. testing 1</ul>
                    <ul>2. testing 2</ul>
                    <ul>3. testing 2</ul>
                    <ul>4. testing 2</ul>
                    <ul>5. testing 2</ul>
                    <ul>6. testing 2</ul>
                    <ul>7. testing 2</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="section section-list-feature fp-auto-height-responsive "
            data-section="services"
          >
            <div class="section-wrapper twoside anim">
              <span class="section-title text-center ">
                <h2 class="display-4 display-title ml2">Services</h2>
              </span>
              <p
                id="txtabout"
                class="section-title text-center anim-2 typewriter"
                data-period="5000"
                data-type='[ "What we can provide to you are out of your imagination." ]'
              >
                <span class="wrap"></span>
              </p>

              <div class="item row justify-content-between fade-1">
                <div class="col-12 col-md-6 col-lg-6">
                  <div class="section-content zoomout-1 fade-4">
                    <div class="media">
                      <div class="img d-flex mr-3 text-center">
                        <i class="icon ion-ios-world-outline"></i>
                      </div>
                      <div class="media-body">
                        <h4>Mobile & Web Development</h4>
                        <p class="text-justify">
                          Create alluring and crackerjack mobile application and
                          web development services for you. Your users will be
                          "The Fan of Your Brand"
                        </p>
                      </div>
                    </div>

                    <div class="media">
                      <div class="img d-flex mr-3 text-center">
                        <i class="icon ion-ios-lightbulb-outline"></i>
                      </div>
                      <div class="media-body">
                        <h4>Artificial Intelligence (AI)</h4>
                        <p class="text-justify">
                          Let AI make faster, automated and more accurate
                          decisions for you.
                        </p>
                      </div>
                    </div>

                    <div class="media">
                      <div class="img d-flex mr-3 text-center">
                        <i class="icon ion-ios-gear-outline"></i>
                      </div>
                      <div class="media-body">
                        <h4>Augmented Reality (AR) & Virtual Reality (VR)</h4>
                        <p class="text-justify">
                          Let your users to be able to immerse deeper in your
                          imagination world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-6">
                  <div class="section-content zoomout-1 fade-1">
                    <div class="media">
                      <div class="img d-flex mr-3 text-center">
                        <i class="icon ion-settings"></i>
                      </div>
                      <div class="media-body">
                        <h4>Training Workshop</h4>
                        <p class="text-justify">
                          Having fun and interative training workshop that make
                          sure you will gain something after end of the
                          workshop.
                        </p>
                      </div>
                    </div>

                    <div class="media">
                      <div class="img d-flex mr-3 text-center">
                        <i class="icon ion-ios-monitor-outline"></i>
                      </div>
                      <div class="media-body">
                        <h4>Online Course</h4>
                        <p class="text-justify">
                          Building knowledge, skills and competence in computer
                          science field through virtual classes with our
                          professional trainers.{" "}
                        </p>
                      </div>
                    </div>

                    <div class="media">
                      <div class="img d-flex mr-3 text-center">
                        <i class="icon ion-steam"></i>
                      </div>
                      <div class="media-body">
                        <h4>Internet of Things (IoT)</h4>
                        <p class="text-justify">
                          Feel connected with your devices by getting IoT
                          development services provided by us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="section section-twoside fp-auto-height-responsive "
            data-section="projects"
          >
            <div class="section-wrapper twoside">
              <div class="section-title text-center">
                <h2 class="display-4 display-title">Projects</h2>
                <p class="anim-2">Here are the list of our awesome pages.</p>
              </div>

              <div class="section-body">
                <div class="section-content content-full px-0 anim">
                  <div class="swiper-container slider-simple-a animated">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide slide-item-a">
                        <div class="hover-area">
                          <div class="card">
                            <div class="card__front1"></div>
                            <div class="card__back">
                              <h3>
                                <strong>
                                  e-Commerce Website & Application
                                </strong>
                              </h3>
                              <p>
                                Start your business online today to improve your
                                business services. We provide eCommerce
                                solutions to meet your requirements or budgets.
                                <a
                                  class="btn-transp-arrow btn-round"
                                  href="index.html#home"
                                >
                                  {" "}
                                  –Learn More-{" "}
                                </a>
                                {/* style="background: #b02b4c;" */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide slide-item-a">
                        <div class="hover-area">
                          <div class="card">
                            <div class="card__front2"></div>
                            <div class="card__back">
                              <h3>
                                <strong>
                                  Augmented Reality & Virtual Reality{" "}
                                </strong>
                              </h3>
                              <p>
                                We provide the solutions by integrating the
                                virtual and the real world. Our team is
                                experienced IT professionals who create
                                interactive content as it engaging and immersive
                                experiences that present real-life opportunities
                                for training and development. It all begins
                                here.
                                <a
                                  class="btn-transp-arrow btn-round"
                                  href="index.html#home"
                                >
                                  {" "}
                                  –Learn More{" "}
                                </a>
                                {/* style="background: #b02b4c;" */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="swiper-slide slide-item-a">
                        <div class="hover-area">
                          <div class="card">
                            <div class="card__front3"></div>
                            <div class="card__back">
                              <h3>
                                <strong>3D Model and Training Workshop</strong>
                              </h3>
                              <p>
                                By using photogrammetry techniques and
                                professional tools and we are produced the
                                detailed 3D models in computer. We do provide
                                training workshop!
                                <a
                                  class="btn-transp-arrow btn-round"
                                  href="index.html#home"
                                >
                                  {" "}
                                  –Learn More{" "}
                                </a>
                                {/* style="background: #b02b4c;" */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>

                    <div class="swiper-button-prev slider-btn slider-prev ">
                      <span class="icon ion-md-arrow-back"></span>
                    </div>
                    <div class="swiper-button-next slider-btn slider-next ">
                      <span class="icon ion-md-arrow-forward"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div
          class="section section-twoside fp-auto-height-responsive "
          data-section="register"
        >
          <div class="section-wrapper twoside">
            <div class="section-content anim text-center">
              <div class="swiper-container-team slider-simple-a animated">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <div class="section-content anim translateUp">
                      <div class="images text-center">
                        <div class="img-avatar-alpha">
                          <div class="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                class="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p class="small">Web developer / Designer</p>
                            <div class="icons">
                              <a
                                class="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-instagram"></i>
                              </a>
                              <a
                                class="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="section-content anim translateUp">
                      <div class="images text-center">
                        <div class="img-avatar-alpha">
                          <div class="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                class="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p class="small">Web developer / Designer</p>
                            <div class="icons">
                              <a
                                class="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-instagram"></i>
                              </a>
                              <a
                                class="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="section-content anim translateUp">
                      <div class="images text-center">
                        <div class="img-avatar-alpha">
                          <div class="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                class="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p class="small">Web developer / Designer</p>
                            <div class="icons">
                              <a
                                class="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-instagram"></i>
                              </a>
                              <a
                                class="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="section-content anim translateUp">
                      <div class="images text-center">
                        <div class="img-avatar-alpha">
                          <div class="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                class="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p class="small">Web developer / Designer</p>
                            <div class="icons">
                              <a
                                class="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-instagram"></i>
                              </a>
                              <a
                                class="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="swiper-slide">
                    <div class="section-content anim translateUp">
                      <div class="images text-center">
                        <div class="img-avatar-alpha">
                          <div class="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                class="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div class="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p class="small">Web developer / Designer</p>
                            <div class="icons">
                              <a
                                class="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-instagram"></i>
                              </a>
                              <a
                                class="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i class="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev slider-btn slider-prev ">
                  <span class="icon ion-md-arrow-back"></span>
                </div>
                <div class="swiper-button-next slider-btn slider-next ">
                  <span class="icon ion-md-arrow-forward"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="section section-contact fp-auto-height-responsive no-slide-arrows "
          data-section="contact"
        >
          <div class="slide" id="information" data-anchor="information">
            <div class="section-wrapper">
              <div class="row">
                <div class="col-12 col-md-6">
                  <div class="section-content anim text-left">
                    <div class="title-desc">
                      <div class="anim-2">
                        {/* <h5></h5> */}
                        <h2 class="display-4 display-title">Contact</h2>
                        <p>
                          Interested in learning more about our services?
                          <br />
                          For questions about our company and products, Contact
                          us.
                          <br />
                          We ensure you will receiving the best information
                          possible.
                          <br />
                          From basic questions to complex compliance inquiries,
                          <br />
                          we're here to help!
                        </p>
                      </div>
                    </div>

                    <div class="address-container anim-3">
                      <div class="row">
                        <div class="col-12 col-md-12 col-lg-6">
                          <h4>Contact</h4>
                          <p>Call: 082 753 793</p>
                          <p>Call: 082 753 792</p>
                          <p>Email: tic.unimas@gmail.com</p>
                        </div>
                        <div class="col-12 col-md-12 col-lg-6">
                          <h4>Address</h4>
                          <p>
                            Company address
                            <br />
                            TIC Main Office, FCSIT
                            <br />
                            Universiti Malaysia Sarawak
                            <br />
                            94300 Kota Samarahan, Sarawak.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div class="btns-action anim-4">
                      <a
                        class="btn btn-outline-white btn-round"
                        href="#contact/message"
                      >
                        <span class="txt">Send Message</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6"></div>
              </div>
            </div>
          </div>

          <div class="slide" id="message" data-anchor="message">
            <div class="section-wrapper">
              <div class="row justify-content-between">
                <div class="col-12 col-md-6 center-vh">
                  <div class="section-content anim text-left">
                    <div class="title-desc">
                      <div>
                        {/* <h5></h5> */}
                        <h2 class="display-4 display-title">Email Us</h2>
                        <p>
                          {" "}
                          Want to get more information? Here's how you can reach
                          us by email. Send your enquiries and we will get back
                          to you shortly!{" "}
                        </p>
                      </div>
                    </div>

                    <div class="btns-action">
                      <a
                        class="btn btn-outline-white btn-round"
                        href="#contact/information"
                      >
                        <span class="txt">Information</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div class="col-12 col-md-6 col-lg-5">
                  <div class="section-content anim text-left">
                    <div class="">
                      <div class="form-container form-container-card">
                        <form
                          class="send_message_form message form"
                          method="post"
                          action="ajaxserver/serverfile.php"
                          id="message_form"
                        >
                          <div class="form-group name">
                            <label for="mes-name">Name :</label>
                            <input
                              id="mes-name"
                              name="name"
                              type="text"
                              placeholder=""
                              class="form-control-line form-success-clean"
                              required
                            />
                          </div>
                          <div class="form-group email">
                            <label for="mes-email">Email :</label>
                            <input
                              id="mes-email"
                              type="email"
                              placeholder=""
                              name="email"
                              class="form-control-line form-success-clean"
                              required
                            />
                          </div>
                          <div class="form-group no-border">
                            <label for="mes-text">Message</label>
                            <textarea
                              id="mes-text"
                              placeholder="..."
                              name="message"
                              class="form-control form-control-outline thick form-success-clean"
                              required
                            ></textarea>

                            <div>
                              <p class="message-ok invisible form-text-feedback form-success-visible">
                                Your message has been sent, thank you.
                              </p>
                            </div>
                          </div>

                          <div class="btns">
                            <button
                              id="submit-message"
                              class="btn btn-normal btn-white btn-round btn-full email_b"
                              name="submit_message"
                            >
                              <span class="txt">Send</span>
                              <span class="arrow-icon"></span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer id="site-footer" class="page-footer">
          <div class="footer-left"></div>
          <div class="footer-right">
            <ul class="social">
              <li>
                <a
                  href="https://en-gb.facebook.com/login.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="icon fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i class="icon fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="icon fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
