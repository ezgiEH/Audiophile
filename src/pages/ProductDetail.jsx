import React from 'react'
import { useParams } from 'react-router-dom'
import Categories from '../components/Categories'
import About from '../components/About'
import Footer from '../components/Footer'
import Product from '../components/Product'

const ProductDetail = () => {
    const {id} = useParams()

  return (
    <div>
    <Product id={id}/>
    <Categories />
    <About />
    <Footer />
    </div>
  )
}

export default ProductDetail