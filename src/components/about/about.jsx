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
            <small>2+ Years Working</small>
          </article>

          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>6+ worldwide countries</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>30+ Completed</small>
          </article>
        </div>

        <p>
         I am an experienced software engineer with a passion 
        for developing innovative programs that expedite the 
        efficiency and effectiveness of organizational success.
        Motivated junior web developer looking for a role as 
        full-stack web developer at SoftwareX. Passionate about 
        building first-class web applications.
         Developed an e-commerce website for a local fashion retailer
          while at University X. Relevant skills include DNS Management, Database, Debugging, and more.
        </p>

        <a href="#contact" className='btn btn-primary'>Let's Talk</a>

      </div>
    </div>
    </section>
  )
}
export default about
