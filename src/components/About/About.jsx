import React from 'react'
import { Button } from '../Button/Button'

export const About = () => {
  return (
    <section className='container'>
      <div className="about">
        <div className="about__title">
          <h2>Mas afinal, o que é <span>Italabs de Laranja?</span></h2>
        </div>
        <div className="about__content">
          <img src={"https://via.placeholder.com/500x450"} alt="teste" />
          <div className='text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Eaque rerum eveniet sunt delectus, iusto porro! 
              Ut pariatur ea animi nobis mollitia possimus consequatur ducimus? 
              Laudantium repudiandae consequuntur porro cumque, officiis veritatis placeat 
              exercitationem incidunt odit, cupiditate expedita dolore quaerat 
              id asperiores facilis similique voluptatum. 
              Reprehenderit exercitationem, consequatur harum tempora aliquam cum perspiciatis 
              sapiente debitis aspernatur sunt molestiae itaque modi, 
              animi sequi corrupti beatae libero esse dolor ipsum consectetur doloribus. 
              Esse eligendi animi perspiciatis laborum corporis quibusdam non illo quaerat maiores, 
              accusantium veniam. Facilis mollitia repellat tenetur ea ad quidem, alias, 
              ex molestias veniam atque iusto aliquam excepturi asperiores voluptatum. Delectus.
            </p>
            <Button image={true}/>
          </div>
        </div>
      </div>
    </section>
  )
}
