import { useState } from "react";
import "./TennisLanding.css";

function TennisLanding() {
  // Accordion state
  const [openAccordion, setOpenAccordion] = useState(0);

  // Sports events hover state
  const [activeEventIndex, setActiveEventIndex] = useState(1);

  // Testimonial counter
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const totalTestimonials = 20;

  const nextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % totalTestimonials);
  };

  // Data for sports events
  const sportsEventsData = [
    { title: "Online Tennis Challenge", img: "./img/22.webp", tags: [] },
    {
      title: "Youth Tennis Camp — 20yo",
      img: "./img/16.jpg",
      tags: ["Coach & Trainer", "Solid Community", "Tennis Kit"],
    },
    { title: "Grand Slam Viewing Party", img: "./img/14.webp", tags: [] },
    { title: "Tennis x Game Day", img: "./img/12.webp", tags: [] },
    { title: "Pro Trainer Meet & Greet", img: "./img/13.webp", tags: [] },
  ];

  // Accordion data
  const accordionData = [
    {
      title: "Connections",
      content:
        "Built to connect — with people, purpose, and the momentum that moves you forward.",
    },
    {
      title: "Sport Package",
      content:
        "Premium tennis experience with smart tracking and advanced match analytics.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? -1 : index));
  };

  return (
    <div className="tennis-landing">
      {/* ==================== HERO SECTION ==================== */}
      <section className="hero-section">
        <nav className="hero-navbar">
          <div className="hero-nav-left">
            <div className="hero-logo">TennisX</div>
            <div className="hero-nav-links">
              <a href="#">Program</a>
              <a href="#">
                Product <span className="hero-new-badge">New</span>
              </a>
              <a href="#">Events</a>
              <a href="#">About</a>
            </div>
          </div>
          <div className="hero-nav-right">
            <a href="#" className="hero-touch-btn">GET IN TOUCH</a>
            <div className="hero-icons">
              <div className="hero-icon">◔</div>
              <div className="hero-icon">✦</div>
            </div>
          </div>
        </nav>
        <div className="hero-small-label">CUSTOM WELLNESS</div>
        <div className="hero-content">
          <h1>A new species <br /> of tennis.</h1>
          <div className="hero-sub">
            <div className="hero-orange-icon">✦</div>
            <span>Improve your health – performance well</span>
          </div>
        </div>
        <div className="hero-big-text">TennisX</div>
        <img className="hero-ball" src="./img/2.png" alt="tennis ball" />
      </section>

      {/* ==================== FIRST SECTION ==================== */}
      <div className="first-section">
        <div className="left-card">
          <div className="top-tag"><span></span> THE BENEFIT</div>
          <h1>Explore <img src="./img/2.png" className="title-img" alt="tennis" /> our flexible tennis activity.</h1>
          <div className="tags-row">
            <div className="tag-pill">🎾 Pre-Match Nutrition</div>
            <div className="tag-pill">🎾 Tennis Apparel</div>
          </div>
          <div className="accordion">
            {accordionData.map((item, idx) => (
              <div
                key={idx}
                className={`accordion-item ${openAccordion === idx ? "active" : ""}`}
                onClick={() => toggleAccordion(idx)}
              >
                <div className="accordion-top">
                  <h4>{item.title}</h4>
                  <div className="accordion-icon">{openAccordion === idx ? "−" : "+"}</div>
                </div>
                <div className="accordion-content"><p>{item.content}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="right-card">
          <div>
            <div className="small-text">✦ EST — 1997</div>
            <p className="desc">Smart features designed to move with you — fast, flexible, and built for every match.</p>
            <h2>Visionary <br /> Precision Play</h2>
            <button className="join-btn">Join Now <div className="btn-circle">→</div></button>
          </div>
          <div className="image-box">
            <img src="./img/21.webp" alt="tennis" className="main-img" />
            <div className="sale">February Sale</div>
            <div className="overlay-card">
              <small>Tennis Outdoor</small>
              <h3>86%</h3>
              <div className="progress"><div></div></div>
              <button className="boost">⚡ Boost</button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== SECOND SECTION ==================== */}
      <div className="second-section">
        <div className="top-bar">
          <div className="menu-row"><span>Virtual Challenges</span><span>Community Tournaments</span></div>
          <div className="program-label">THE PROGRAM</div>
        </div>
        <div className="heading-section">
          <div className="heading-lg">Elevate your <img src="./img/1.jpg" className="heading-img" alt="tennis" /> experience <br /> with handpicked tennis.</div>
          <div className="right-text">Your tennis journey starts right here with us and the crew.</div>
        </div>
        <div className="cards-grid">
          <div className="left-info">
            <div className="count"><h1>01</h1><span>/ 8</span></div>
            <div className="event-label">Upcoming Match</div>
            <div className="buttons-row">
              <button className="btn-round btn-light">←</button>
              <button className="btn-round btn-orange">→</button>
            </div>
          </div>
          <div className="black-card">
            <h2>The coach experts and simple software for better tennis performance.</h2>
            <div className="card-footer"><span>Live</span><div className="site-btn">orangeer.com</div></div>
          </div>
          <div className="image-card">
            <img src="./img/2.webp" alt="tennis" />
            <div className="overlay-dark">
              <div className="member-box"><h3>2.88k</h3><p>Membership</p></div>
              <div className="bottom-content"><h2>Tennis Match <br /> Partner</h2><span>NEW YORK, US</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== THIRD SECTION ==================== */}
      <div className="third-section">
        <div className="activity-left-box">
          <img src="./img/5.webp" alt="tennis court" />
          <div className="activity-floating-card">
            <div className="activity-card-top">
              <div className="activity-label"><div className="activity-dot"></div> Activity</div>
              <div className="activity-percent">+87%</div>
            </div>
            <div className="activity-number">2.780 <span>Cal</span></div>
            <div className="activity-sub-text">You improved overall well-being</div>
            <div className="activity-graph">
              <div className="activity-wave">
                <svg viewBox="0 0 500 100" preserveAspectRatio="none">
                  <path d="M0,60 C70,10 120,90 190,50 C260,10 320,90 500,40" stroke="#ff6200" strokeWidth="6" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
            <div className="activity-stats">
              <div className="activity-stat-item"><small>Walking</small><h3>127 <span>Cal</span></h3></div>
              <div className="activity-stat-item"><small>Running</small><h3>386 <span>Cal</span></h3></div>
              <div className="activity-stat-item"><small>Workout</small><h3>249 <span>Cal</span></h3></div>
            </div>
          </div>
        </div>
        <div className="activity-right-box">
          <div className="activity-small-title">FEATURED FEATURES</div>
          <div className="activity-heading">Stay motivated with <br /> activity <img src="./img/2.webp" className="activity-heading-img" alt="activity" /> tracking.</div>
          <div className="activity-icons-row">
            <div className="activity-icon-sm">⌘</div>
            <div className="activity-icon-sm">♔</div>
            <div className="activity-icon-sm">◔</div>
            <div className="activity-icon-sm activity-orange-icon">8+</div>
          </div>
          <div className="activity-content-row">
            <div className="activity-text-side">
              <p>Record — activities to boost your tennis performance.</p>
              <h4>WITH GPT 4.0</h4>
              <button className="activity-circle-btn">↗</button>
              <div className="activity-explore">EXPLORE <br /> MORE</div>
            </div>
            <div className="activity-small-card">
              <img src="./img/7.webp" alt="tennis" />
              <div className="activity-small-overlay">
                <div className="activity-year">• 2025</div>
                <div className="activity-view-btn">View More</div>
                <div className="activity-coming">
                  <h3>COMMING SOON</h3>
                  <div className="activity-mood">Mood Boost</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== FOURTH SECTION (SPORTS EVENTS) ==================== */}
      <div className="sports-events-section">
        <div className="sports-events-top">
          <div className="sports-current">• CURRENT EVENTS</div>
          <div className="sports-events-heading">
            To win over{" "}
            <img
              src="https://images.unsplash.com/photo-1508807526345-15e9b5f4eaff?q=80&w=1200&auto=format&fit=crop"
              className="sports-events-heading-img"
              alt="tennis"
            />{" "}
            tennis-minded consumers with{" "}
            <img
              src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&w=1200&auto=format&fit=crop"
              className="sports-events-heading-img"
              alt="product"
            />{" "}
            products own technology and excellent.
          </div>
        </div>
        <div className="sports-events-wrapper">
          {sportsEventsData.map((event, idx) => (
            <div
              key={idx}
              className={`sports-event-item ${activeEventIndex === idx ? "active-event" : ""}`}
              onMouseEnter={() => setActiveEventIndex(idx)}
            >
              <div className="sports-event-title">{event.title}</div>
              {activeEventIndex !== idx && <div className="sports-event-arrow">↗</div>}
              {activeEventIndex === idx && event.tags.length > 0 && (
                <div className="sports-event-tags">
                  {event.tags.map((tag, tagIdx) => (
                    <div key={tagIdx} className="sports-event-tag">{tag}</div>
                  ))}
                </div>
              )}
              {activeEventIndex === idx && <div className="sports-circle-btn">↗</div>}
              <div className="sports-floating-image">
                <img src={event.img} alt={event.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ==================== TESTIMONIAL SECTION ==================== */}
      <div className="testimonial-section">
        <div className="testimonial-left">
          <div>
            <h1 className="testimonial-heading">
              What <span className="testimonial-ball"></span> people are honestly saying right now
            </h1>
            <div className="testimonial-count">
              ● {testimonialIndex + 1}/20 <span className="testimonial-line"></span>
            </div>
            <p className="testimonial-text">
              "The tennis coaching app keeps me on track, and the community pushes me to keep going. It's the perfect mix of fun and fitness"
            </p>
            <div className="testimonial-stars">★★★★★ <span>4.5</span></div>
          </div>
          <div className="testimonial-bottom">
            <div className="testimonial-user">
              <h3>Benedeta Chan</h3>
              <p>Housewife in China</p>
            </div>
            <button className="testimonial-arrow-btn" onClick={nextTestimonial}>→</button>
          </div>
        </div>
        <div className="testimonial-right">
          <div className="testimonial-side-tags">
            <div className="testimonial-side-tag">● Testimonial</div>
            <div className="testimonial-side-tag">◌ Customer Says</div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-top-tags">
              <div className="testimonial-tag">🎓 Professional Trainer</div>
              <div className="testimonial-tag">👜 Merchandise</div>
            </div>
            <div className="testimonial-date">APR – MAY 2025</div>
            <div className="testimonial-card-content">
              <h1>Tennis Lesson</h1>
              <p>Tennis Training – Beginner</p>
              <div className="testimonial-price">$99 <span>/ Session</span></div>
              <div className="testimonial-full-game">● FULL MATCH</div>
            </div>
            <div className="testimonial-big-arrow">↗</div>
          </div>
        </div>
      </div>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer-wrap">
        <div className="footer-top">
          <div className="footer-left">
            <div className="explore-card">
              <div className="explore-content">
                <div className="explore-sm-text">• NEW EXPERIENCE</div>
                <div className="explore-title">Explore <br /> More</div>
                <div className="arrow-circle">↗</div>
              </div>
            </div>
            <div className="location">San Diego — California <br /> Paris — France</div>
          </div>
          <div className="footer-center">
            <h1 className="footer-heading">We're doing everything for future tennis healthiness.</h1>
            <div className="footer-tags">
              <div className="footer-tag">🧪 Trainer & Coach Access</div>
              <div className="footer-tag">🏆 Priority Event</div>
              <div className="footer-tag">🎧 Badges</div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-menus">
              <div className="footer-menu">
                <a href="#">Program</a><a href="#">Product</a><a href="#">Event</a><a href="#">About</a>
              </div>
              <div className="footer-menu">
                <a href="#">X (Twitter) ↗</a><a href="#">Instagram ↗</a><a href="#">LinkedIn ↗</a>
              </div>
            </div>
            <button className="orange-btn-round">✦</button>
          </div>
        </div>
        <div className="info-row">
          <div>hello@TennisX.com</div><div>©2025 Design by TennisX</div>
        </div>
        <div className="footer-line"></div>
        <div className="logo-section">
          <div className="top-logo-row">
            <div>Privacy Policy</div><div>EST — 2018</div><div>Terms & Conditions</div>
          </div>
          <div className="big-logo">TennisX</div>
        </div>
        <div className="footer-bottom">
          <div className="bottom-left-tags">
            <div className="bottom-tag">⚡ Website Attachment</div>
            <div className="bottom-tag">◌ Resources</div>
          </div>
          <div className="copy">©2025 All Right Reserved</div>
        </div>
      </footer>
    </div>
  );
}

export default TennisLanding;