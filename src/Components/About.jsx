import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faInstagram,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';


function About() {
    return(
      <section className="about" id="about">
      <div className="about-container">
        <div className="about-title">
          <h1>ABOUT</h1>
          <h1>Web Development</h1>
          <h3>
            Web development is the process of creating, building, and
            maintaining websites and web applications that are accessed through
            the internet. It involves a combination of programming, design, and
            technical skills to develop websites that are functional,
            user-friendly, and visually appealing.
          </h3>
          <h1>IMPORTANCE</h1>
        </div>
        <div className="importance-container">
          <div className="imp-box">
            <h1>Global Accessibility and Reach</h1>
            <p>
              Web development enables businesses, organizations, and individuals
              to reach a global audience. A well-designed website makes it
              possible for anyone with internet access to discover, interact
              with, and engage with your content, services, or products from
              anywhere in the world, 24/7.
            </p>
          </div>
          <div className="imp-box">
            <h1>Enhanced User Experience and Engagement</h1>
            <p>
              Through effective web development, websites can be designed to be
              user-friendly, responsive, and visually appealing. This enhances
              the user experience, encouraging visitors to stay longer, explore
              more content, and return in the future. A seamless and enjoyable
              online experience can lead to higher engagement, customer
              satisfaction, and conversions.
            </p>
          </div>
          <div className="imp-box">
            <h1>Business Growth and Credibility</h1>
            <p>
              A professionally developed website can significantly contribute to
              business growth by attracting new customers, generating leads, and
              increasing sales. Additionally, a well-maintained website enhances
              a company's credibility and trustworthiness, making it a crucial
              tool for establishing a strong online presence and brand identity.
            </p>
          </div>
        </div>
      </div>
      <div className="more" id="more">
        <div className="socials">
          <a href="https://www.facebook.com/hellojeanna" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
          <a href="https://www.instagram.com/adlerr.a/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
          <a href="https://github.com/adler-a" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
        </div>
        <div className="more-box">
          <h1>Want to learn more?</h1>
          <h2>
            Let's connect and bring your vision to life ✨. We’re open to
            discussion, ready to push the limits of web development and deliver
            outstanding results.
          </h2>
          <button>Let's talk</button>
        </div>
      </div>
    </section>
    );
}

export default About;