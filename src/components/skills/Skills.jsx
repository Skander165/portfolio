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
              <img src="/assets/html.svg" alt="" className="boxIcon" />
              <img src="/assets/css.svg" alt="" className="boxIcon" />
              <img src="/assets/javascript.svg" alt="" className="boxIcon" />
              <img src="/assets/php.svg" alt="" className="boxIcon" />
              <img src="/assets/react.svg" alt="" className="boxIcon" />
              <img src="/assets/vue.svg" alt="" className="boxIcon" />
              <img src="/assets/node.svg" alt="" className="boxIcon" />
              <img src="/assets/solidity.svg" alt="" className="boxIcon" />
              <img src="/assets/mongodb.svg" alt="" className="boxIcon" />
            </div>
          </div>
        </div>
        <div className="card">
          <div className="box">
            <span>Secondary Skills</span>
            <div className="boxIcons">
              <img src="/assets/c.svg" alt="" className="boxIcon" />
              <img src="/assets/c++.svg" alt="" className="boxIcon" />
              <img src="/assets/python.svg" alt="" className="boxIcon" />
              <img src="/assets/java.svg" alt="" className="boxIcon" />
              <img src="/assets/wordpress.svg" alt="" className="boxIcon" />
              <img
                style={{ backgroundColor: "white" }}
                src="/assets/wix.svg"
                alt=""
                className="boxIcon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
