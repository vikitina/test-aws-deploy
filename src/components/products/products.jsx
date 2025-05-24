import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../card/card'

export default function Products(props) {


  return (
    <section className="products">
      <h2 className="products-title">{props.title}</h2>
      <ul className="products-list">
        {
          props.list.map((item) => <Card data={item}/>)
        }
      </ul>
    </section>
  )
}
