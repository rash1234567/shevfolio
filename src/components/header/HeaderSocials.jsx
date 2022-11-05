import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/sherif-okunade-526896229" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Lawdshev" target="_blank"><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials
