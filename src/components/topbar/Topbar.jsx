import "./topbar.scss";
// import { NightsStayOutlined } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active ")} >
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Skander
            <br />
            <div style={{ paddingLeft: 15 }} className="chtioui">
              Chtioui
            </div>
          </a>
        </div>

        <div className="right">
          <ul className="items">
            <li className="item">
              <a href="#intro">Home</a>
            </li>
            <li className="item">
              <a href="#about">About</a>
            </li>
            
            <li className="item">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="item">
              <a href="#services">Services</a>
            </li>
            <li className="item">
              <a href="#skills">Skills</a>
            </li>
            <li className="item">
              <a href="#contact">Contact</a>
            </li>
            {/* <li className="item">
              <NightsStayOutlined />
            </li> */}
          </ul>
          <div
            className="hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
