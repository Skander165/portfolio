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
              My name is Skander, and I'm a 22-year-old technology consultant
              with a strong background in computer science. I recently graduated
              with a bachelor's degree in Computer Science from the Higher
              Institute of Computer Science in Tunis. During my academic
              journey, I focused on expanding my knowledge and experience in IT,
              specializing in Web Development and Blockchain Decentralized
              Applications Development.
              <br />
              As a technology consultant at EY, I am currently a part of the
              Microsoft team, where I have been honing my skills in Microsoft
              platforms such as Power Platforms and Dynamics CRM. I am proud to
              have obtained four certifications: PL900, PL100, MB910, and MB220,
              which validate my expertise in these areas.
              <br />
              In addition to my work at EY, I am also an alternating student,
              pursuing my studies at the Esprit School of Engineering. This
              unique opportunity allows me to apply the knowledge and skills I
              acquire in real-world scenarios while staying updated with the
              latest industry practices.
              <br />
              Alongside my Microsoft expertise, I have also been actively
              developing my web development skills. I am proficient in various
              JavaScript frameworks such as React, Angular, and Node.js.
              Additionally, I use Springboot, a Java-based framework, to create
              robust and dynamic web applications. Together, these tools enable
              me to deliver exceptional solutions across different technology
              stacks.
              <br />
              Throughout my career, I have consistently demonstrated my ability
              to thrive in challenging environments, meeting deadlines, and
              effectively problem-solving. I pride myself on being a reliable
              and dedicated professional, continuously refining my performance
              and improving my time management skills.
              <br />
              Feel free to explore my portfolio to see examples of my work and
              projects. I am excited about the opportunity to collaborate on new
              and innovative projects in the world of technology. Let's connect
              and discuss how we can leverage my skills to achieve remarkable
              results.
            </p>
            <div className="downloadButtons">
              <a
                href="CV/english/cv.pdf"
                download="Skander Chtioui - CV"
                className="cv"
              >
                Download CV - English
              </a>
              <a
                href="CV/french/cv.pdf"
                download="Skander Chtioui - CV"
                className="cv"
              >
                Download CV - French
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
