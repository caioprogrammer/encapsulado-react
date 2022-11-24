import React from 'react';
import { benefits } from '../../data/datas';

export const Benefits = () => {
  return (
    <div className='container'>
      <div className='benefits'>
        <div className='benefits__content'>
        {benefits.map((item, index) =>
          <div className='benefits__box' key={index}>
            <img src={item.image} alt="Icones" width={60} height={60}/>
            <span>{item.benefit}</span>
          </div>
        )}
        </div>
      </div>
    </div>
  )
}
