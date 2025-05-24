import React from 'react'

export default function Features(props) {


  return (
    <section className="features">
      <ul className="features-list">
        <li className="feature-item">
          <img src="./images/icons/delivery.svg" alt="Free Delivery" />
          <h3 className="feature-title">Free Delivery</h3>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dolor sit amet.</p>
        </li>
        <li className="feature-item">
          <img src="./images/icons/payment.svg" alt="100% Secure Payment" />
          <h3 className="feature-title">100% Secure Payment</h3>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dolor sit amet.</p>
        </li>
        <li className="feature-item">
          <img src="./images/icons/quality.svg" alt="Quality Guarantee" />
          <h3 className="feature-title">Quality Guarantee</h3>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dolor sit amet.</p>
        </li>
        <li className="feature-item">
          <img src="./images/icons/savings.svg" alt="Guaranteed Savings" />
          <h3 className="feature-title">Guaranteed Savings</h3>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dolor sit amet.</p>
        </li>
        <li className="feature-item">
          <img src="./images/icons/offers.svg" alt="Daily Offers" />
          <h3 className="feature-title">Daily Offers</h3>
          <p className="feature-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum dolor sit amet.</p>
        </li>
      </ul>
    </section>
  )
}
