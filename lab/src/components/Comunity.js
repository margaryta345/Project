import React from 'react'
import Team from '../media/team.mp4'

function Comunity() {
  return (
    <div className=' items-center justify-center'><video width="100%" height="auto" autoPlay loop muted>
    <source src={Team} type="video/mp4" />
  </video>
    </div>
  )
}

export default Comunity