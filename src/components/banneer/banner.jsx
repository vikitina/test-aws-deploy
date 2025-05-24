import React from 'react'

export default function Banner(props) {


  return (
    <section className="subscribe-banner">
      <div className="subscribe-content">
        <p className="subscribe-text">Get <strong>20% OFF</strong> on your first purchase</p>
        <p className="subscribe-subtext">Sign up for our newsletter and never miss any offers.</p>
      </div>
      <form className="subscribe-form">
        <input type="email" placeholder="Your email address" required />
        <button type="submit">Subscribe Now</button>
      </form>
    </section>
  )
}
