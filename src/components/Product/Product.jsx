import React from 'react'
import { Button } from '../Button/Button'
import { products } from '../../data/datas'

export const Product = () => {
  return (
    <>
      {products.map((item, index) =>
        <div className={`box`} key={index}>
          <div className='box__header'>
            <h2>{item.headerTitle}</h2>
            {item.headerSubtitle && 
              <h3>{item.headerSubtitle}</h3>
            }
          </div>
          <div className="box__content">
            <img src={item.contentImage} alt="Produto" />
            <h2>
              <span>{item.contentInstallments.parcelado}</span>
              {item.contentInstallments.total}
              <span>{item.contentInstallments.avista}</span>
            </h2>
          </div>
          <div className="box__footer">
            <Button link={item.link}/>
            <span>*Frete grátis para todo Brasil</span>
          </div>
        </div>
      )}
    </>
  )
}
