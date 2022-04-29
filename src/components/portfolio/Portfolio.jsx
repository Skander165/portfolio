import './portfolio.scss';

import { portfolio } from '../../data';

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolioText">
        <h1>Portfolio</h1>
        <span>Here's a sample..</span>
      </div>

      <div className="container">
        {portfolio.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
