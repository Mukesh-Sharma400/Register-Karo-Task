import Image from "next/image";
import star from "../../public/assets/star.svg";
import { Companies } from "./components/Companies";
import archery from "../../public/assets/archery.svg";
import clients from "../../public/assets/clients.svg";
import playBtn from "../../public/assets/play-btn.svg";
import starBox from "../../public/assets/star-box.svg";
import financial from "../../public/assets/financial.svg";
import personOnDesk from "../../public/assets/person-on-desk.svg";
import backgroundImage from "../../public/assets/background-image.png";

export default function Home() {
  return (
    <div className="page-wrapper">
      <div className="display-wrapper">
        <div className="content-wrapper">
          <div className="rating-wrapper">
            <Image className="star" src={star} alt="Star" />
            <p className="google-rating">Google Rating</p>
            <div className="star-box-wrapper">
              <Image className="star-box" src={starBox} alt="Star Box" />
              <Image className="star-box" src={starBox} alt="Star Box" />
              <Image className="star-box" src={starBox} alt="Star Box" />
              <Image className="star-box" src={starBox} alt="Star Box" />
              <Image className="star-box" src={starBox} alt="Star Box" />
            </div>
          </div>
          <h1 className="heading">
            Your Trusted Partner
            <br />
            For <span>Compliance</span> needs
          </h1>
          <p className="description">
            An online business compliance platform that helps entrepreneurs and
            other individuals with various, <span>registrations</span>,{" "}
            <span>tax filings</span>, and other <span>legal matters</span>.
          </p>
          <div className="features-wrapper">
            <div className="feature">
              <Image
                className="feature-image"
                src={financial}
                alt="Financial"
              />
              <div>
                <p className="feature-number">4.5+</p>
                <p className="feature-text">Customer Rating</p>
              </div>
            </div>
            <div className="feature">
              <Image className="feature-image" src={clients} alt="Clients" />
              <div>
                <p className="feature-number">20,000+</p>
                <p className="feature-text">Clients</p>
              </div>
            </div>
            <div className="feature">
              <Image
                className="feature-image"
                src={financial}
                alt="Financial"
              />
              <div>
                <p className="feature-number">99.8%</p>
                <p className="feature-text">Financial Stability</p>
              </div>
            </div>
          </div>
          <div className="btns-wrapper">
            <button className="get-started-btn">Get Started For Free</button>
            <button className="play-btn">
              <Image className="play-btn-icon" src={playBtn} alt="Play Btn" />
              See how it works
            </button>
          </div>
        </div>
        <div className="floating-features-wrapper">
          <div className="floating-feature">Annual Compliance</div>
          <div className="floating-feature">Payroll Services</div>
          <div className="floating-feature">Company Formation</div>
          <div className="floating-feature">Annual Compliance</div>
        </div>
        <Image
          className="background-image"
          src={backgroundImage}
          alt="Background Image"
        />
        <Image
          className="person-on-desk"
          src={personOnDesk}
          alt="Person On Desk"
        />
        <Image className="archery" src={archery} alt="Archery" />
      </div>
      <Companies />
    </div>
  );
}
