import { useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Clock3, Instagram, MapPin, Menu as MenuIcon, MessageCircle, X } from 'lucide-react';
import Menu from './Menu';

const logo = '/manus-storage/logo-original_e6903202.png';
const heroArt = '/manus-storage/async-images/lGh2kSyRB2HBXDLBexcJM9/image-1.webp';
const feastArt = '/manus-storage/async-images/lGh2kSyRB2HBXDLBexcJM9/image-2.webp';

function Flower({ className = '' }: { className?: string }) {
  return <span aria-hidden="true" className={`flower ${className}`}>✺</span>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <>
    <div className="announcement"><span>GOOD FOOD. GOOD MOOD. GOOD TO GO.</span><Flower /><span>A LITTLE TASTE OF SOUTH INDIA</span></div>
    <header className="header">
      <a className="brand" href="#home" onClick={close} aria-label="DosaOnWheels home">
        <img src={logo} alt="DosaOnWheels logo" />
        <span className="brand-name">Dosa<span>On</span>Wheels<small>SOUTH INDIAN FOOD TRUCK</small></span>
      </a>
      <nav className={`nav ${open ? 'nav-open' : ''}`} aria-label="Main navigation">
        <a href="#menu" onClick={close}>Our menu</a>
        <a href="#story" onClick={close}>Our story</a>
        <a href="#find-us" onClick={close}>Find us</a>
        <a href="#reviews" onClick={close}>Reviews</a>
        <a className="nav-order" href="#order" onClick={close}>Order online <ArrowUpRight size={16} /></a>
      </nav>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
        {open ? <X size={25} /> : <MenuIcon size={25} />}
      </button>
    </header>
  </>;
}

function Hero() {
  return <section className="hero" id="home">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="eyebrow"><Flower /> SOUTH INDIAN FLAVORS, ON THE MOVE</div>
        <h1>A little taste<br />of <em>home,</em><br />on wheels<span className="period">.</span></h1>
        <p>Crispy dosas, comforting flavors, and a little South Indian sunshine—wherever the road takes us.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#menu">Explore our menu <ArrowRight size={17} /></a>
          <a className="button button-text" href="#find-us"><MapPin size={17} /> Find the truck</a>
        </div>
        <div className="hero-signoff"><span className="short-line" /> MADE WITH HEART <Flower /></div>
      </div>
      <div className="hero-visual">
        <div className="art-halo" />
        <div className="hero-frame"><img src={heroArt} alt="Illustration of a dosa feast with a South Indian temple, elephant and monkey" /></div>
        <div className="round-seal"><span>TRADITION</span><b>✺</b><span>ON WHEELS</span></div>
        <div className="art-caption"><span>FOOD FOR THE SOUL</span><span>✦</span><span>JOY FOR THE JOURNEY</span></div>
      </div>
    </div>
    <div className="hero-bottom"><span>COME HUNGRY, LEAVE HAPPY</span><a href="#menu" aria-label="Scroll to the menu"><ArrowDown size={17} /></a><span>SCROLL TO EXPLORE</span></div>
  </section>;
}

function Story() {
  return <section className="story" id="story">
    <div className="story-inner">
      <div className="story-art-wrap">
        <div className="story-art"><img src={feastArt} alt="Hand-painted illustration of dosa and chutneys on a banana leaf" loading="lazy" /></div>
        <div className="story-stamp"><Flower /><span>A LITTLE<br />TASTE OF<br />HOME</span></div>
      </div>
      <div className="story-copy">
        <div className="eyebrow"><Flower /> OUR LITTLE STORY</div>
        <h2>Rooted in tradition.<br /><em>Ready for the road.</em></h2>
        <p>Some flavors have a way of feeling like home. Inspired by the food and traditions of South India, DosaOnWheels is all about bringing that feeling along for the ride.</p>
        <p>From golden dosas to the little bowls of chutney that make every bite special, there’s always something to look forward to.</p>
        <a className="underlined-link" href="#find-us">Come find us <ArrowRight size={17} /></a>
      </div>
    </div>
  </section>;
}

function Order() {
  return <section className="order-section" id="order">
    <div className="order-decoration left" aria-hidden="true">✺</div><div className="order-decoration right" aria-hidden="true">✺</div>
    <div className="order-inner">
      <div className="light-kicker"><Flower /> YOUR DOSA, YOUR WAY <Flower /></div>
      <h2>Good food is never<br /><em>too far away.</em></h2>
      <p>When our delivery partners are ready, you’ll find the links right here.</p>
      <div className="order-options" aria-label="Ordering platforms">
        <div className="order-option"><span className="order-logo uber">Uber <strong>Eats</strong></span><span className="coming">LINK COMING SOON <ArrowUpRight size={15} /></span></div>
        <div className="order-option"><span className="order-logo doordash">DOORDASH</span><span className="coming">LINK COMING SOON <ArrowUpRight size={15} /></span></div>
        <div className="order-option"><span className="order-logo other">More ways to order</span><span className="coming">STAY TUNED <ArrowUpRight size={15} /></span></div>
      </div>
      <div className="order-note">Ordering links will be added once available.</div>
    </div>
  </section>;
}

function Reviews() {
  return <section className="reviews" id="reviews">
    <div className="review-inner">
      <div className="review-mark" aria-hidden="true">“</div>
      <div className="eyebrow"><Flower /> WORD ON THE STREET</div>
      <h2>The best stories are<br /><em>shared over food.</em></h2>
      <p>We can’t wait to share what our community has to say.</p>
      <div className="review-placeholder"><MessageCircle size={20} /><span>Real customer reviews will be added here soon.</span></div>
      <div className="ornament-line"><span></span><Flower /><span></span></div>
    </div>
  </section>;
}

function FindUs() {
  return <section className="find-section" id="find-us">
    <div className="find-inner">
      <div className="find-heading"><div className="eyebrow"><Flower /> COME SAY HELLO</div><h2>Find us out<br /><em>and about.</em></h2><p>Great food is always worth the trip. Check back for our current stop and serving hours.</p></div>
      <div className="info-panel">
        <div className="info-row"><div className="info-icon"><MapPin size={22} /></div><div><h3>Where to find us</h3><p>Location details coming soon.</p><span>TRUCK LOCATION TO BE CONFIRMED</span></div></div>
        <div className="info-row"><div className="info-icon"><Clock3 size={22} /></div><div><h3>When we’re serving</h3><p>Hours will be shared soon.</p><span>DAYS & TIMES TO BE CONFIRMED</span></div></div>
        <div className="info-row"><div className="info-icon"><MessageCircle size={22} /></div><div><h3>Get in touch</h3><p>Contact details coming soon.</p><span>PHONE, EMAIL & SOCIALS TO BE ADDED</span></div></div>
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-inner"><div className="footer-brand"><img src={logo} alt="DosaOnWheels" /><div><strong>DosaOnWheels</strong><p>A little taste of home, on wheels.</p></div></div>
      <div className="footer-links"><a href="#menu">Menu</a><a href="#story">Our story</a><a href="#find-us">Find us</a><a href="#order">Order</a></div>
      <div className="footer-social"><Instagram size={18} /><span>Social links coming soon</span></div></div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} DOSAONWHEELS</span><span>MADE WITH A WHOLE LOT OF HEART <Flower /></span></div>
  </footer>;
}

export default function App() {
  return <><Header /><main><Hero /><div className="marquee" aria-hidden="true"><span>CRISPY DOSAS</span><Flower /><span>COMFORTING FLAVORS</span><Flower /><span>GOOD FOOD ON THE GO</span><Flower /><span>CRISPY DOSAS</span><Flower /><span>COMFORTING FLAVORS</span></div><Menu /><Story /><Order /><Reviews /><FindUs /></main><Footer /></>;
}
