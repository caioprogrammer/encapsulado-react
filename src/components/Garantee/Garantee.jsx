import React from 'react';

import { data } from '../../data/datas';

export const Garantee = () => {
  return (
    <section className='container'>
      <div className='garantee'>
        <h2 className='garantee__title'>
          Emagrecimento Garantido
        </h2>
        <h4 className='garantee__subtitle'>
        O extrato de laranja moro possui registro no ministério da saúde e autorização da 
         para ser comercializado e distribuído por todo o Brasil. 
         O extrato de laranja moro apresenta uma composição contendo ingredientes 100% natural, 
         ingredientes potentes e cuidadosamente selecionados que trabalham juntos para garantir 
         que seu corpo queime gordura de forma rápida e definitiva.
        </h4>
        <div className='garantee__content'>
        { data.map( (item, index) => 
          <div className="garantee__content--box" key={index} >
          <img src={item.image} alt="3" />
          <div className='text'>
            <p>{item.title}</p>
            <span>{item.content}</span>
          </div>
        </div>
        ) }
        </div>
      </div>
    </section>
  )
}
