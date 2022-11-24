import React from 'react';
import { benefitsBuy } from '../../data/datas';

export const BenefitsBuy = () => {
  return (
    <div className='container'>
      
      <div className='benefits'>
        <h2 className='benefits__title'>Não está acostumado a<span>comprar pela internet?</span></h2>
        <div className="benefits__content no-margin">
        {benefitsBuy.map((item, index) =>
          <div className='benefits__box' key={index}>
            <img src={item.image} alt="Icones" width={80} height={80}/>
            <span>{item.benefit}</span>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
