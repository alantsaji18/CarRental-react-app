import React from 'react'
import Nav from './Nav'

const Home = () => {
  return (
    <div>
        <Nav/>
        <div
  className="text-center py-5"
  style={{ backgroundColor: "#f8f9fa", minHeight: "80vh" }}
>
  <h1 className="display-4 fw-bold text-primary">
    Your Dream Car
  </h1>

  <p className="lead text-secondary mt-3">
    Grab your Dream Car now...at every journey with affordable rentals
  </p>
</div>

    </div>
  )
}

export default Home