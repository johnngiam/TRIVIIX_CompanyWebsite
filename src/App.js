// import logo from './logo.svg';
import React from "react";
import "./App.css";
import "./css/main.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
// import './fullpage.scrollHorizontally.min' // Optional. When using fullpage extensions
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// import ScrollAnimation from 'react-animate-on-scroll';
// import "../node_modules/animate.css/animate.min.css";

// import ReactAnime from 'react-animejs';
import Particles from 'react-particles-js';
// import Swiper from "swiper";
// import Swiper, { Navigation, Pagination } from 'swiper';

class App extends React.Component {
  render() {
    // const {Anime} = ReactAnime
    // AOS.init();
    return (
      <div className="App">
        <div style={{ position: 'absolute'}}>
        <Particles height="100vh" width="100vw"  
          params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 3
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    }
                }
            }}} />
        </div>
        {/* <Anime /> */}
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
                    <span className="txt">Area of Expertise</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="projects">
                  <a href="#projects">
                    <i className="icon ion-ios-albums-outline"></i>
                    <span className="txt">Projects</span>
                  </a>
                </li>
                <li className="nav-item" data-menuanchor="collaboration">
                  <a href="#collaboration">
                    <i className="icon ion-ios-compose-outline"></i>
                    <span className="txt">Collaborations</span>
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

        <div className="hh-cover page-cover">
          <div
            className="cover-bg bg-img "
            data-image-src="./css/img/bg-default1.jpg"
          ></div>
          <div
            id="particles-js"
            className="cover-bg pos-abs full-size bg-color"
            data-bgcolor="rgba(2, 3, 10, 0.7)"
          ></div>
        </div>

        <main className="page-main page-fullpage main-anim" id="mainpage">
          <div
            className="section section-home fullscreen-md fp-auto-height-responsive "
            data-section="home"
          >
            <div className="section-wrapper">
              <div className="section-content anim">
                <div className="row">
                  <div className="col-12 col-md-6 text-left">
                    <div className="col-12 col-md-6 right-content hidden-sm center-vh">
                      <div className="section-content">
                        <div className="illustr zoomout-1">
                          <img className="logo" src="img/logo_white.png" alt="Logo" />
                        </div>
                      </div>
                    </div>
                    <div className="title-desc">
                      <div className="ml14">
                        <span className="text-wrapper">
                          <span className="line line1" id="line"></span>
                          <h2 className="display-4 display-title home-title anim-1 letters">
                            De &#8226; AI
                          </h2>
                          {/* <!-- <span className="line"></span> bordered --> */}
                        </span>
                      </div>
                      {/* <!-- <h2 className="display-4 display-title home-title bordered anim-1">De &#8226; AI</h2> --> */}
                      <div className="ml6">
                        <span className="text-wrapper">
                          <h4 className="letters">AI is the future.</h4>
                        </span>
                      </div>
                    </div>

                    <div className="btns-action anim-3">
                      <a className="btn btn-outline-white btn-round" href="#about">
                        Get started
                      </a>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 ">
                  <img className="img" src="img/motherboard.jpg" alt="" height="400px" width="550px" />
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-12"
                    data-section="home"
                  >
                    <div className="section-wrapper twoside anim">
                      <div className="section-title text-center">
                        <div className="display-4 display-title about">About Us</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section section-description fp-auto-height-responsive "
            data-section="about"
          >
            <div className="section-wrapper center-vh dir-col anim">
              <div className="section-title text-center">
                {/* <!-- <h5 className="title-bg">About</h5> -->
              <!-- <h1 id="txtabout" className="typewrite display-4 display-title anim-2 illustr zoomout-1" data-period="100000" data-type='[ "Everything is possible" ]'> -->
                  <!-- <span className="wrap"></span> 
              </h1>--> */}
                <h2 className="display-4 display-title anim-2 illustr zoomout-1 ml12">
                  Everything is possible
                </h2>
              </div>

              <div className="section-content reduced anim text-center">
                <div className="title-desc anim-3">
                  <p
                    id="txtabout"
                    className="typewriter"
                    data-period="5000"
                    data-type='[ "Dream, dream, dream! Conduct these dreams into thought, and then transform them into action. With us, your dream can put into action." ]'
                  >
                    <span className="wrap"></span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="section section-list-feature fp-auto-height-responsive "
            data-section="about1"
          >
            <div className="section-wrapper twoside anim">
              <div className="section-title text-center">
                <div className="display-4 display-title about">About</div>
                {/* style="animation:bounceInLeft; animation-duration:10s" */}
              </div>

              <div className="row sec-about">
                <div className="col- col-md-6 col-lg-6">
                  <div className="section-content zoomout-1 fade-1">
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

                <div className="col-12 col-md-6 col-lg-6">
                  <div className=" section-content zoomout-1 fade-4">
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
            className="section section-list-feature fp-auto-height-responsive "
            data-section="services"
          >
            <div className="section-wrapper twoside anim">
              {/* <span className="section-title text-center ">
                <h2 className="display-4 display-title ml2">Area of Expertise</h2>
              </span>

              <p
                id="txtabout"
                className="section-title text-center anim-2 typewriter"
                data-period="5000"
                data-type='[ "What we can provide to you are out of your imagination." ]'
              >
                <span className="wrap"></span>
              </p> */}
              
              <div className="expert-container" >
                {/* <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> delay-2s*/}
                <div className="child-expert1 animated bounceInLeft delay-2s" >
                {/* data-aos="fade-right" 
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="4000" */}
                  <div className="">
                    <h4 className="main_title" >
                      <i className="icon ion-ios-world-outline"></i> Mobile & Web Development</h4>
                    <p className="text-justify content" >
                      Create alluring and crackerjack mobile application and
                      web development services for you. Your users will be
                      "The Fan of Your Brand"
                    </p>
                  </div>
                </div>
                {/* </ScrollAnimation> */}

                <div className="child-expert2 animated bounceInDown delay-2s" > 
                {/* data-aos="fade-down"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="4000" */}
                  <div className="">
                  <h4 className="main_title"><i className="icon ion-ios-world-outline"></i> Artificial Intelligence(AI) </h4>
                    <p className="text-justify content">
                      Let AI make faster, automated and more accurate
                      decisions for you.
                    </p>
                  </div>
                </div>
                <div className="child-expert3 animated bounceInRight delay-2s" >
                {/* data-aos="fade-left"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="4000" */}
                  <div className="">
                  <h4 className="main_title"><i className="icon ion-ios-world-outline"></i> Augmented Reality(AR) & Virtual Reality(VR) </h4>
                    <p className="text-justify content">
                      Let your users to be able to immerse deeper in your
                      imagination world.
                    </p>
                  </div>
                </div>
              </div>

              <div className=" section-wrapper twoside anim section-title text-center" margin-top="1vw">
                <img className="img" src="img/cpu.jpg" alt="" height="340px" width="600px" position="relative"/>
              </div>

              <div className="expert-container" >
                {/* <ScrollAnimation animateIn='fadeIn' animateOut='fadeOut'> delay-2s*/}
                  <div className="child-expert4 animated bounceInLeft delay-2s" >
                  {/* data-aos="fade-right" 
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="4000" */}
                    <div className="">
                      <h4 className="main_title" >
                        <i className="icon ion-ios-world-outline"></i> Training Workshop </h4>
                      <p className="text-justify content" >
                        Having fun and interative training workshop that make
                        sure you will gain something after end of the
                        workshop.
                      </p>
                    </div>
                  </div>
                {/* </ScrollAnimation> */}

                <div className="child-expert5 animated bounceInUp delay-2s" > 
                {/* data-aos="fade-down"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="4000" */}
                  <div className="">
                  <h4 className="main_title"><i className="icon ion-ios-world-outline"></i> Online Course </h4>
                    <p className="text-justify content">
                      Building knowledge, skills and competence in computer
                      science field through virtual classes with our
                      professional trainers.{" "}
                    </p>
                  </div>
                </div>

                <div className="child-expert6 animated bounceInRight delay-2s" >
                {/* data-aos="fade-left"
                 data-aos-offset="200"
                 data-aos-delay="50"
                 data-aos-duration="4000" */}
                  <div className="">
                  <h4 className="main_title"><i className="icon ion-ios-world-outline"></i> Internet of Things(IoT) </h4>
                    <p className="text-justify content">
                      Feel connected with your devices by getting IoT
                      development services provided by us.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* <div className="item row justify-content-between fade-1">
                <div className="col-12 col-md-6 col-lg-6">
                  <div className="section-content zoomout-1 fade-4">
                    <div className="media">
                      <div className="img d-flex mr-3 text-center">
                        <i className="icon ion-ios-world-outline"></i>
                      </div>
                      <div className="media-body">
                        <h4>Mobile & Web Development</h4>
                        <p className="text-justify">
                          Create alluring and crackerjack mobile application and
                          web development services for you. Your users will be
                          "The Fan of Your Brand"
                        </p>
                      </div>
                    </div>

                    <div className="media">
                      <div className="img d-flex mr-3 text-center">
                        <i className="icon ion-ios-lightbulb-outline"></i>
                      </div>
                      <div className="media-body">
                        <h4>Artificial Intelligence (AI)</h4>
                        <p className="text-justify">
                          Let AI make faster, automated and more accurate
                          decisions for you.
                        </p>
                      </div>
                    </div>

                    <div className="media">
                      <div className="img d-flex mr-3 text-center">
                        <i className="icon ion-ios-gear-outline"></i>
                      </div>
                      <div className="media-body">
                        <h4>Augmented Reality (AR) & Virtual Reality (VR)</h4>
                        <p className="text-justify">
                          Let your users to be able to immerse deeper in your
                          imagination world.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-6">
                  <div className="section-content zoomout-1 fade-1">
                    <div className="media">
                      <div className="img d-flex mr-3 text-center">
                        <i className="icon ion-settings"></i>
                      </div>
                      <div className="media-body">
                        <h4>Training Workshop</h4>
                        <p className="text-justify">
                          Having fun and interative training workshop that make
                          sure you will gain something after end of the
                          workshop.
                        </p>
                      </div>
                    </div>

                    <div className="media">
                      <div className="img d-flex mr-3 text-center">
                        <i className="icon ion-ios-monitor-outline"></i>
                      </div>
                      <div className="media-body">
                        <h4>Online Course</h4>
                        <p className="text-justify">
                          Building knowledge, skills and competence in computer
                          science field through virtual classes with our
                          professional trainers.{" "}
                        </p>
                      </div>
                    </div>

                    <div className="media">
                      <div className="img d-flex mr-3 text-center">
                        <i className="icon ion-steam"></i>
                      </div>
                      <div className="media-body">
                        <h4>Internet of Things (IoT)</h4>
                        <p className="text-justify">
                          Feel connected with your devices by getting IoT
                          development services provided by us.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          <div
            className="section section-twoside fp-auto-height-responsive "
            data-section="projects"
          >
            <div className="section-wrapper twoside">
              <div className="expert-container" >
                <div className="child-expert1 animated fadeIn delay-2s" >
                  <div className="">
                    <p
                      className="section-title typewrite"
                      data-period="5000"
                      data-type='[ "<h5><strong> e-Commerce Website & Application</strong></h5> Start your business online today to improve your business services. We provide eCommerce solutions to meet your requirements or budgets." ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </div>
                </div>

                {/* <div className="child-expert2 animated fadeIn delay-2s" >
                  <div className="">
                    <p
                      className="section-title typewrite"
                      data-period="5000"
                      data-type='[ "<h4><strong> e-Commerce Website & Application</strong></h4> Start your business online today to improve your business services. We provide eCommerce solutions to meet your requirements or budgets." ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </div>
                </div> */}

                <div className="child-expert3 animated fadeIn delay-2s" >
                  <div className="">
                    <p
                      className="section-title typewrite"
                      data-period="5000"
                      data-type='[ "<h5><strong>Augmented Reality & Virtual Reality</strong></h5> We provide the solutions by integrating the virtual and the real world. Our team is experienced IT professionals who create interactive content as it engaging and immersive experiences that present real-life opportunities for training and development. It all begins here." ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" section-wrapper twoside anim section-title text-center" margin-top="1vw">
                <img className="img" src="img/chipset.jpg" alt="" height="340px" width="550px" position="relative"/>
              </div>

              <div className="expert-container" >
                <div className="child-expert4 project animated fadeIn delay-2s" >
                  <div className="">
                    <p
                      className="section-title typewrite"
                      data-period="5000"
                      data-type='[ "<h5><strong>3D Model and Training Workshop</strong></h5> By using photogrammetry techniques and professional tools and we are produced the detailed 3D models in computer. We do provide training workshop!" ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </div>
                </div>

                {/* <div className="child-expert5 project animated fadeIn delay-2s" >
                  <div className="">
                    <p
                      className="section-title typewrite"
                      data-period="5000"
                      data-type='[ "<h3><strong> e-Commerce Website & Application</strong></h3> Start your business online today to improve your business services. We provide eCommerce solutions to meet your requirements or budgets." ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </div>
                </div>

                <div className="child-expert6 project animated fadeIn delay-2s" >
                  <div className="">
                    <p
                      className="section-title typewrite"
                      data-period="5000"
                      data-type='[ "<h3><strong> e-Commerce Website & Application</strong></h3> Start your business online today to improve your business services. We provide eCommerce solutions to meet your requirements or budgets." ]'
                    >
                      <span className="wrap"></span>
                    </p>
                  </div>
                </div> */}
              </div> 

              {/* <div className="section-body">
                <div className="section-content content-full px-0 anim">
                  <div className="swiper-container slider-simple-a animated">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide slide-item-a">
                        <div className="hover-area">
                          <div className="card">
                            <div className="card__front1"></div>
                            <div className="card__back">
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
                                  className="btn-transp-arrow btn-round"
                                  href="index.html#home"
                                >
                                  {" "}
                                  –Learn More-{" "}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide slide-item-a">
                        <div className="hover-area">
                          <div className="card">
                            <div className="card__front2"></div>
                            <div className="card__back">
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
                                  className="btn-transp-arrow btn-round"
                                  href="index.html#home"
                                >
                                  {" "}
                                  –Learn More{" "}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="swiper-slide slide-item-a">
                        <div className="hover-area">
                          <div className="card">
                            <div className="card__front3"></div>
                            <div className="card__back">
                              <h3>
                                <strong>3D Model and Training Workshop</strong>
                              </h3>
                              <p>
                                By using photogrammetry techniques and
                                professional tools and we are produced the
                                detailed 3D models in computer. We do provide
                                training workshop!
                                <a
                                  className="btn-transp-arrow btn-round"
                                  href="index.html#home"
                                >
                                  {" "}
                                  –Learn More{" "}
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev slider-btn slider-prev ">
                      <span className="icon ion-md-arrow-back"></span>
                    </div>
                    <div className="swiper-button-next slider-btn slider-next ">
                      <span className="icon ion-md-arrow-forward"></span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        

        <div className="section section-twoside fp-auto-height-responsive" data-section="collaboration" >
          <div className="section-wrapper twoside">
            <div className="section-content anim text-center">
              <div className="swiper-container-team slider-simple-a animated">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="section-content anim translateUp">
                      <div className="images text-center">
                        <div className="img-avatar-alpha">
                          <div className="img-1 shadow">
                            <a href="index.html#collaboration">
                              <img
                                className="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p className="small">Web developer / Designer</p>
                            <div className="icons">
                              <a
                                className="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-instagram"></i>
                              </a>
                              <a
                                className="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="section-content anim translateUp">
                      <div className="images text-center">
                        <div className="img-avatar-alpha">
                          <div className="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                className="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p className="small">Web developer / Designer</p>
                            <div className="icons">
                              <a
                                className="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-instagram"></i>
                              </a>
                              <a
                                className="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="section-content anim translateUp">
                      <div className="images text-center">
                        <div className="img-avatar-alpha">
                          <div className="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                className="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p className="small">Web developer / Designer</p>
                            <div className="icons">
                              <a
                                className="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-instagram"></i>
                              </a>
                              <a
                                className="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="section-content anim translateUp">
                      <div className="images text-center">
                        <div className="img-avatar-alpha">
                          <div className="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                className="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p className="small">Web developer / Designer</p>
                            <div className="icons">
                              <a
                                className="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-instagram"></i>
                              </a>
                              <a
                                className="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="section-content anim translateUp">
                      <div className="images text-center">
                        <div className="img-avatar-alpha">
                          <div className="img-1 shadow">
                            <a href="index.html#register">
                              <img
                                className="img"
                                src="img/items/img-people1-square.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="legend text-center pos-abs">
                            <h5>Flavien Dupon</h5>
                            <p className="small">Web developer / Designer</p>
                            <div className="icons">
                              <a
                                className="icon-btn"
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-instagram"></i>
                              </a>
                              <a
                                className="icon-btn"
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                              >
                                <i className="icon fa fa-twitter"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev slider-btn slider-prev ">
                  <span className="icon ion-md-arrow-back"></span>
                </div>
                <div className="swiper-button-next slider-btn slider-next ">
                  <span className="icon ion-md-arrow-forward"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section section-contact fp-auto-height-responsive no-slide-arrows" data-section="contact">
          <div className="slide" id="information" data-anchor="information">
            <div className="section-wrapper">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="section-content anim text-left">
                    <div className="title-desc">
                      <div className="anim-2">
                        {/* <h5></h5> */}
                        <h2 className="display-4 display-title">Contact</h2>
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

                    <div className="address-container anim-3">
                      <div className="row">
                        <div className="col-12 col-md-12 col-lg-6">
                          <h4>Contact</h4>
                          <p>Call: 082 753 793</p>
                          <p>Call: 082 753 792</p>
                          <p>Email: tic.unimas@gmail.com</p>
                        </div>
                        <div className="col-12 col-md-12 col-lg-6">
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

                    <div className="btns-action anim-4">
                      <a
                        className="btn btn-outline-white btn-round"
                        href="#contact/message"
                      >
                        <span className="txt">Send Message</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6"></div>
              </div>
            </div>
          </div>

          <div className="slide" id="message" data-anchor="message">
            <div className="section-wrapper">
              <div className="row justify-content-between">
                <div className="col-12 col-md-6 center-vh">
                  <div className="section-content anim text-left">
                    <div className="title-desc">
                      <div>
                        {/* <h5></h5> */}
                        <h2 className="display-4 display-title">Email Us</h2>
                        <p>
                          {" "}
                          Want to get more information? Here's how you can reach
                          us by email. Send your enquiries and we will get back
                          to you shortly!{" "}
                        </p>
                      </div>
                    </div>

                    <div className="btns-action">
                      <a
                        className="btn btn-outline-white btn-round"
                        href="#contact/information"
                      >
                        <span className="txt">Information</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-5">
                  <div className="section-content anim text-left">
                    <div className="">
                      <div className="form-container form-container-card">
                        <form
                          className="send_message_form message form"
                          method="post"
                          action="ajaxserver/serverfile.php"
                          id="message_form"
                        >
                          <div className="form-group name">
                            <label htmlFor ="mes-name">Name :</label>
                            <input
                              id="mes-name"
                              name="name"
                              type="text"
                              placeholder=""
                              className="form-control-line form-success-clean"
                              required
                            />
                          </div>
                          <div className="form-group email">
                            <label htmlFor ="mes-email">Email :</label>
                            <input
                              id="mes-email"
                              type="email"
                              placeholder=""
                              name="email"
                              className="form-control-line form-success-clean"
                              required
                            />
                          </div>
                          <div className="form-group no-border">
                            <label htmlFor ="mes-text">Message</label>
                            <textarea
                              id="mes-text"
                              placeholder="..."
                              name="message"
                              className="form-control form-control-outline thick form-success-clean"
                              required
                            ></textarea>

                            <div>
                              <p className="message-ok invisible form-text-feedback form-success-visible">
                                Your message has been sent, thank you.
                              </p>
                            </div>
                          </div>

                          <div className="btns">
                            <button
                              id="submit-message"
                              className="btn btn-normal btn-white btn-round btn-full email_b"
                              name="submit_message"
                            >
                              <span className="txt">Send</span>
                              <span className="arrow-icon"></span>
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
        </main>

        <footer id="site-footer" className="page-footer">
          <div className="footer-left"></div>
          <div className="footer-right">
            <ul className="social">
              <li>
                <a
                  href="https://en-gb.facebook.com/login.php"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                  <i className="icon fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="icon fa fa-instagram"></i>
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
