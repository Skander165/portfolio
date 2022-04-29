import "./about.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function About() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web Developer",
        "Blockchain DApps Developer",
        "Freelancer",
        "Computer Science Student",
      ],
    });
  }, []);
  return (
    <div className="about" id="about">
      <h1>About Me</h1>
      {/* <hr /> */}
      <div className="container">
        <div className="left">
          <div className="imgContainer">
            <img src="assets/profil.jpg" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>
              I'm Skander and I'm a <span ref={textRef}></span>
            </h2>
            <p>
              I'm Skander, 20 years old, and I'm a student at the high institute
              of computer science in Tunis. I am only one year away from
              obtaining my bachelor degree in Computer Science. My academic
              journey helped me broaden my knowledge and experience in IT, But I
              specialize essentially in Web Development and Blockchain
              Decentralized Applications Development. This year, my main focus
              was directed towards learning new JavaScript Frameworks and Smart
              Contracts Development, and I accomplished this by enrolling in
              various online courses and earning various certificates. I also
              discovered my high potential as a group member and a leader
              through my innovative ideas and my quick thinking in stressful
              situations allowing efficient problem solving results. I've been
              working on various projects during last summer, which was
              admittedly stressful, but I came out of these experiences as a
              capable and reliable person, respecting deadlines and enduring
              harsh working environment while refining my performance and
              improving my time management.
            </p>

            <a href="assets/cv.png" download="cv"  className="cv">Download Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}
