import React from 'react'
import meiosDePagamento from '../../images/meiosdepagamento.png'

export const Button = (props) => {
  return (
    <>
      <a className='cta' href={props.link}>
        <p>Comprar agora</p>
      </a>
      { props.image &&
        <img src={meiosDePagamento} width={400} alt="Formas de pagamento aceitas" />
      }
    </>
  )
}
