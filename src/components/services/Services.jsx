import './services.scss';
import { useState } from 'react';
import { ArrowForwardIos } from '@material-ui/icons';

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/globe.png',
      title: 'Web Development',
      desc: 'I can develop Web Apps with various JavaScript Frameworks such as React.js and Next.js for Frontend and Node.js for Backend',
      img: './assets/web-design.jpeg',
      link: 'https://github.com/Skander165/',
    },
    {
      id: '2',
      icon: './assets/contract.png',
      title: 'Smart Contracts ',
      desc: 'I develop Smart Contracts using the Solidity Programming Language in order to build Blockchain Decentralized Applications',
      img: './assets/smart-contract.jpg',
      link: 'https://github.com/Skander165/All-BLockchain-Projects/tree/main',
    },
  ];
  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : data.length - 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="service" id="services">
      <h1>Services</h1>
      <div className="services">
        <div
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
        >
          {data.map((d) => (
            <div className="container" key={d.id}>
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={d.icon} alt="" />
                    </div>
                    <h2>{d.title}</h2>
                    <p>{d.desc}</p>
                    <span>
                      <a
                        href={d.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none' }}
                      >
                        Projects
                      </a>
                    </span>
                  </div>
                </div>
                <div className="right">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ArrowForwardIos
          onClick={() => handleClick('right')}
          className="arrow right"
        />
        <ArrowForwardIos
          onClick={() => handleClick('left')}
          className="arrow left"
        />
      </div>
    </div>
  );
}
