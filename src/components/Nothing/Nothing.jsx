import React from 'react'

export const Nothing = () => {
  return (
    <section className='nothing'>
      <div className='container nothing__content'>
        <img src={"https://reveravit.com.br/img/frascos-principal.png"} alt="" />
        <div className='nothing__content--text'>
          <h3>Você não tem nada a perder</h3>
          <p>
            Na compra de 3 potes você ganha garantia de 90 dias, 
            nós devolvemos 100% do seu dinheiro,
            de acordo com os termos e condições
          </p>
          <b>Você terá até 90 dias após a entrega para solicitar devolução.</b>
        </div>
      </div>
    </section>
  )
}
