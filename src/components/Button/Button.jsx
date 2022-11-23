import React from 'react'
import meiosDePagamento from '../../images/meiosdepagamento.png'

export const Button = (props) => {
  return (
    <>
      <button>
        <p>Comprar agora</p>
      </button>
      { props.image &&
        <img src={meiosDePagamento} width={400} alt="Formas de pagamento aceitas" />
      }
    </>
  )
}
