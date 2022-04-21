import React from 'react'
import { Link } from 'react-router-dom'

const Error_93 = () => {
  return (
    <section className='section about-section'>
      <div className='error-page section'>
        <h1>Opps! It's a dead end</h1>
        <Link to='/' className='btn btn-primary'>Back Home</Link>
      </div>
    </section>
  )
}

export default Error_93
