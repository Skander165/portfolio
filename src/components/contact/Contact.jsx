import "./contact.scss";
import {
  Person,
  Email,
  Room,
  LinkedIn,
  VisibilityOff,
  GitHub,
} from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact me</h2>
        <div className="links">
          <div className="link">
            <Person className="linkIcon" />
            <div className="linkDesc">
              <span className="linkTitle">Name</span>
              <span className="linkText">Skander Chtioui</span>
            </div>
          </div>
          <div className="link">
            <Email className="linkIcon" />
            <div className="linkDesc">
              <span className="linkTitle">Email</span>
              <span className="linkText">chtioui.sk@gmail.com</span>
            </div>
          </div>
          <div className="link">
            <Room className="linkIcon" />
            <div className="linkDesc">
              <span className="linkTitle">Address</span>
              <span className="linkText">Ariana, Tunisia</span>
            </div>
          </div>
          <div className="link">
            <a
              href="https://github.com/Skander165"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="linkIcon click" />
            </a>
          </div>
          <div className="link">
            <VisibilityOff
              className="linkIcon off"
              style={{ visibility: "hidden" }}
            />
          </div>
          <div className="link">
            <a
              href="https://www.linkedin.com/in/skander-chtioui/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedIn className="linkIcon click" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
