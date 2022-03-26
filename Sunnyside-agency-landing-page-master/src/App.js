import './App.css';
import React, { useState } from 'react'
import menu from '../src/assets/icon-hamburger.svg';
import close from '../src/assets/icon-close.svg';
import logo from '../src/assets/logo.svg';
import egg from '../src/assets/mobile/image-transform.jpg';
import arrow from '../src/assets/icon-arrow-down.svg';
import standOut from '../src/assets/mobile/image-stand-out.jpg';
import emily from '../src/assets/image-emily.jpg';
import jennie from '../src/assets/image-jennie.jpg';
import thomas from '../src/assets/image-thomas.jpg';
import cone from '../src/assets/mobile/image-gallery-cone.jpg';
import sugar from '../src/assets/mobile/image-gallery-sugar-cubes.jpg';
import orange from '../src/assets/mobile/image-gallery-orange.jpg';
import bottle from '../src/assets/mobile/image-gallery-milkbottles.jpg';




function App() {

  const [drawerVisibility, setDrawerVisibility] = useState(false);
  const [active, setactive] = useState("Home")

  window.addEventListener("scroll",(e) => {
    var y = window.scrollY;
    if (y < 500 && y > 0) {
      setactive("Home")
    } 
    else if(y > 500 && y < 2000) {
      setactive("Services")
    }
    else if(y > 2000 && y < 2700) {
      setactive("About")

    }
    else if(y > 2700 && y < 4600) {
      setactive("Projects")

    }
  })

  return (
    <div className="App">
    {drawerVisibility && (
    <div className="drawer">
    <div className="drawer-close-btn">
    <img src={close} onClick={() => setDrawerVisibility(false)} alt="" />
    </div>
      <div className="options">
      <a onClick={() => setDrawerVisibility(false)} className='contact' href="#content">Home</a>
      <a onClick={() => setDrawerVisibility(false)} className='contact' href="#about">About</a>
      <a onClick={() => setDrawerVisibility(false)} className='contact' href="#services">Services</a>
      <a onClick={() => setDrawerVisibility(false)} className='contact' href="#projects">Projects</a>
      <a onClick={() => setDrawerVisibility(false)} className='contact' href="#footer">Contact</a>
      </div>
    </div>
    )}
    <div className="header">
    <div className="header-items">
    <img src={logo} alt="" className="logo" />
    
    {!drawerVisibility && (<img src={menu} onClick={() => setDrawerVisibility(true)} alt="menu" className="menu" />)}
    <div className="navbar-items">
    <a onClick={() => setactive("Home")} className={active == "Home"?"active":'links'} href="#content">Home</a>
    <a onClick={() => setactive("About")} className={active == "About"?"active":'links'} href="#about">About</a>
    <a onClick={() => setactive("Services")} className={active == "Services"?"active":'links'} href="#services">Services</a>
    <a onClick={() => setactive("Projects")}  className={active == "Projects"?"active":'links'} href="#projects">Projects</a>
    <a onClick={() => setactive("Contact")} className={active == "Contact"?"active":'links'} href="#footer">Contact</a>
    </div>
    </div>
    <div className="content" id='content'>
    <span className="content-text">WE ARE CREATIVES</span>
    <img src={arrow} alt="" className="arrow" />
    </div>
    </div>
    <div className="services" id='services'>
    <div className="transform">
    <img src={egg} alt="" className="egg" />
    <div className="desc">
    <span className="heading">Transform your brand</span>
    <p className="text">We are creatives Transform your brand We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you</p>
    <span className="link">Learn More</span>
    </div>
    </div>
    <div className="stand-out">
    <img src={standOut} alt="" className="stand-out-img" />
    <div className="desc-stand-out">
    <span className="heading-stand-out">Stand out to the right audience</span>
    <p className="text">Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.</p>
    <span className="link">Learn More</span>
    </div>
    </div>
    <div className="row">
    <div className="design">
    <span className="heading-design">Graphic design</span>
    <p className="text-design">Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.</p>
    </div>
    <div className="orange">
    <span className="heading-orange">Photography</span>
    <p className="text-orange">Increase your credibility by getting the most stunning, high-quality photos that improve your business image.</p>
    </div>
    </div>
    </div>
    <span className='clients'>CLIENT TESTIMONIALS</span>
    <div className="clients-list" id='about'>
    <div className="client">
    <img src={emily} alt="" />
    <p className="details">We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
    <span className="name">Emily R.</span>
    <span className="position">Marketing Director</span>
    </div>
    <div className="client">
    <img src={thomas} alt="" />
    <p className="details">Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
    <span className="name">Thomas S.</span>
    <span className="position">Chief Operating Officer</span>
    </div>
    <div className="client">
    <img src={jennie} alt="" />
    <p className="details">Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
    <span className="name">Jennie F.</span>
    <span className="position">Business Owner</span>
    </div>
    </div>
    <div className="grid" id='projects'>
    <img src={bottle} alt="" className="gallery-items" />
    <img src={orange} alt="" className="gallery-items" />
    <img src={cone} alt="" className="gallery-items" />
    <img src={sugar} alt="" className="gallery-items" />
    </div>
    <div className="footer" id='footer'>
    <div className="footer-logo"></div>
    <div className="items-row">
    <span className="footer-items">About</span>
    <span className="footer-items">Services</span>
    <span className="footer-items">Projects</span>
    </div>
    <div className="socialMedia-row">
    <div  className="icons-fb" ></div>
    <div  className="icons-insta" ></div>
    <div  className="icons-twitter" ></div>
    <div  className="icons-pin" ></div>
    </div>
    </div>
    </div>
  );
}

export default App;
