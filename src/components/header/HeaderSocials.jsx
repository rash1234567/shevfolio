import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {FaDribbble} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/ajayi-oluwapamilerin-b08024166" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Moklite/Moklite" target="_blank"><BsGithub/></a>
      <a href="https://dribble.com"><FaDribbble/></a>
    </div>
  )
}

export default HeaderSocials
