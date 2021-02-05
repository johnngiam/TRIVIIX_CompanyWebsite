import logo from './logo.svg';
import './App.css';
import './css/main.css'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <div className="page-loader" id="page-loader">
          <div>
            <div className="icon ion-spin"></div>
            <p>loading</p>
          </div>
        </div>

        {/* <!-- BEGIN OF site header Menu --> */}
      <header className="page-header navbar page-header-alpha scrolled-white menu-right topmenu-right">

        {/* <!-- Begin of menu icon toggler --> */}
        <button className="navbar-toggler site-menu-icon" id="navMenuIcon">
          {/* <!-- Available class : menu-icon-dot / menu-icon-thick /menu-icon-random --> */}
          <span className="menu-icon menu-icon-random">
            <span className="bars">
              <span className="bar1"></span>
              <span className="bar2"></span>
              <span className="bar3"></span>
            </span>
          </span>
        </button>
        {/* <!-- End of menu icon toggler --> */}

        {/* <!-- Begin of logo/brand --> */}
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
                <a className="nav-link" href="./index.php#home">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./index.php#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./index.php#services">Services</a>
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
    </div>
  );
}

export default App;
