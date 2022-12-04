import './index.css'
import {BiDotsVerticalRounded} from 'react-icons/bi'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const TechServices = () => (
  <>
    <div className="tech-sol-div-cont">
      <div className="tech-banner-div">
        <img
          alt="tech-sol"
          src="https://res.cloudinary.com/dj2ghn49v/image/upload/v1668843010/cld-sample.jpg"
        />
      </div>
      <div className="tech-content-div">
        <div className="tech-get-div">
          <BiDotsVerticalRounded />
          <span>Get to know us</span>
        </div>
        <h2>
          Easy solutions for your <br /> IT problems
        </h2>
        <p className="tech-para">
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without
        </p>
        <div className="tech-check-icon-div">
          <BsFillCheckCircleFill className="tech-check-icon" />
          <div className="tech-para-check-div">
            <h4>Lorem ipsum is a placeholder </h4>
            <p>Lorem ipsum is a placeholder text commonly</p>
          </div>
        </div>
        <div className="tech-check-icon-div-2 ">
          <BsFillCheckCircleFill className="tech-check-icon" />
          <div className="tech-para-check-div">
            <h4>Lorem ipsum is a placeholder </h4>
            <p>Lorem ipsum is a placeholder text commonly</p>
          </div>
        </div>
      </div>
    </div>
  </>
)

export default TechServices
