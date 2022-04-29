import "./skills.scss";

export default function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        <div className="card">
          <div className="box">
            <span>Main Skills</span>
            <div className="boxIcons">
              <img src="/assets/html.svg" alt="HTML" className="boxIcon" />
              <img src="/assets/css.svg" alt="CSS" className="boxIcon" />
              <img src="/assets/javascript.svg" alt="JavaScript" className="boxIcon" />
              <img src="/assets/react.svg" alt="React.js" className="boxIcon" />
              <img src="/assets/next.png" alt="Next.js" className="boxIcon" />
              <img src="/assets/vue.svg" alt="Vue.js" className="boxIcon" />
              <img src="/assets/node.svg" alt="Node.js" className="boxIcon" />
              <img src="/assets/solidity.svg" alt="Solidity" className="boxIcon" />
              <img src="/assets/mongodb.svg" alt="MongoDB" className="boxIcon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <span>Secondary Skills</span>
            <div className="boxIcons">
              <img src="/assets/c.svg" alt="C" className="boxIcon" />
              <img src="/assets/c++.svg" alt="C++" className="boxIcon" />
              <img src="/assets/php.svg" alt="PHP" className="boxIcon" />
              <img src="/assets/python.svg" alt="Python" className="boxIcon" />
              <img src="/assets/java.svg" alt="Java" className="boxIcon" />
              <img src="/assets/wordpress.svg" alt="Wordpress" className="boxIcon" />
              <img
                style={{ backgroundColor: "white" }}
                src="/assets/wix.svg"
                alt="Wix"
                className="boxIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
