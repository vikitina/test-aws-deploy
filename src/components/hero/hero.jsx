import React from 'react'

export default function Hero(props) {


  return (
    <section className="hero">
      <h1 className="visually-hidden">MOLLA</h1>
      <ul className="hero-list">
        <li className="hero-list-item">
          <img src="images/hero/image1.jpg" alt="" className="hero-image" />
        </li>
        <li className="hero-list-item hero-item-1">
          <h2 className="hero-header">Molla collection 2025</h2>
          <a href="" className="hero-link">shop now</a>
        </li>
        <li className="hero-list-item">
          <img src="images/hero/image2.jpg" alt="" className="hero-image" />
        </li>
        <li className="hero-list-item hero-item-2">
          <h2 className="hero-header">Handbags collection 2025</h2>
          <a href="" className="hero-link">shop now</a>
        </li>
        <li className="hero-list-item">
          <img src="images/hero/image3.jpg" alt="" className="hero-image" />
        </li>
        <li className="hero-list-item hero-item-3">
          <h2 className="hero-header">Clothes collection 2025</h2>
          <a href="" className="hero-link">shop now</a>
        </li>
      </ul>
    </section>
  )
}
