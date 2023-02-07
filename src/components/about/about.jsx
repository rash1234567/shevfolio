import React from 'react'
import "./about.css"
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

      <div className="about__content">
        <div className='about__cards'>
          <article className='about__card'>
            <BsAward className='about__icon'/>
            <h5>Experience</h5>
            <small>3+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>worldwide countries</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>over 50 completed</small>
          </article>
        </div>

        <p>
         I am a software engineer with a passion 
        for developing innovative programs that expedite the 
        efficiency and effectiveness of organizational success.
        Motivated web developer looking for a role as 
        junior dev in reputable organizations. Passionate about 
        building first-class web applications.
         I am also a graduate of agricultural engineering in the university of ilorin.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}
export default about
