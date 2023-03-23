import React from 'react'
import BackendProj from './BackendProj'
import { Link } from 'react-router-dom'
import { backendProjects } from './data'

function Backend() {
  return (
      <div>
          <div className="w-[65%] md:w-[60%] flex items-center justify-between mt-2">
              <Link to='/'><i className="fa-regular fa-circle-left text-3xl md:text-5xl ml-2"></i></Link>
              <h1 className="text-center text-2xl md:text-4xl">Serverside Projects</h1>
          </div>
          <div className="flex-wrap flex items-start p-4">
              {
                  backendProjects?.map(datum => {
                      return <BackendProj key={datum.title} {...datum} />
                  })
              }
          </div>
      </div>
  )
}

export default Backend