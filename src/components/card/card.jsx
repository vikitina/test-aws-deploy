import React from 'react'
import { Link } from 'react-router-dom'

export default function Card(props) {
const item=props.data

  return (
    <li className="card">
      <Link to={`/goods/${item.id}`} className="card-image-link">
        <img className="card-image" src={`./images/products/${item.photo}`} alt="" />
      </Link>
      <div className="card-container">
      <Link to={`/goods/${item.id}`} className="card-name-link">{item.name}</Link>
        <span className="card-price">${item.price}</span>
      </div>
    </li>
  )
}
