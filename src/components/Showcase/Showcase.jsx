import React from 'react'
import { products } from '../../data/datas'
import { Product } from '../Product/Product'

const Showcase = () => {
  return (
    <section className='showcase'>
      <div className='container showcase-content'>
        <div className='showcase-content__title'>
          <h2>
            Aproveite as ofertas especiais e
            <span>escolha a melhor opção para você</span>
          </h2>
          <h5>Oferta por tempo limitado</h5>
        </div>
        <div className={`showcase-content__boxes ${products.length > 3 ? 'slider-true' : 'slider-false'}`}>
          <Product />
        </div>
      </div>
    </section>
  )
}

export default Showcase