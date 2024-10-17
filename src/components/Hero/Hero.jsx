import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>I'm Pallavi Shelavale,</span> frontend developer based in India.</h1>
      <p>I am a passionate frontend developer from Maharashtra, India, with a strong foundation in modern web technologies.I have worked on several academic and personal projects, demonstrating my ability to build responsive, user-friendly web applications. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
