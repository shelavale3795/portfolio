import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from '../../assets/profile.jpeg'

const About = () => {
  return (
    <div id="" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate Frontend Developer with a strong foundation in
              web development technologies. I have gained valuable skills
              through my education and personal projects, and I am eager to
              contribute to a team. I am excited about the opportunity to apply
              my knowledge in a professional setting and to learn from
              experienced colleagues while helping to drive project success.
            </p>
            <p>
              My passion for frontend is not only reflected in my extensive
              experience but also in the enthusiasm and dedication I bring to
              each project
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Express JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>5+</h1>
          <p>TECHNOLOGIES LEARNED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>3+</h1>
          <p>PERSONAL PROJECTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>100%</h1>
          <p>PASSION FOR LEARNING</p>
        </div>
      </div>
    </div>
  );
};

export default About;
