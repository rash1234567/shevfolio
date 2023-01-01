import React from 'react'

function Project({img,title,github,demo}) {
  return (
    <article className='portfolio__item mt-4 lg:ml-10 md:mx-auto'>
      <div className='portfolio__item-image md:w-[500px] lg:w-[350px] md:max-h-[230px] max-h-[180px] lg:max-h-[180px] overflow-hidden'>
      <img src={img} alt="image" />
      </div>
      <h3 className='font-bold'>{title}</h3>
      <div className='portfolio__item-cta flex justify-between'>
      <a href={github} className='btn' target='_blank'>Github</a>
      <a href={demo} className='btn btn-primary' id='demo' target='_blank'> <span id='span1'>Live Demo</span> <span id='span2' className='hidden'><i class="fa-solid fa-right-long font-[40px]"></i> <i class="fa-solid fa-right-long font-[40px]"></i> <i class="fa-solid fa-right-long font-[40px]"></i></span> </a>
      </div>
    </article>
  )
}
export default Project;