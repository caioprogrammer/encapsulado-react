import { Button } from '../Button/Button';

export default function Hero() {

  return (
    <div className='hero'>
      <div className='container hero__container'>
        <div className='hero__text'>
          <h2>
            Dê <span>adeus a gordura</span> localizada!
          </h2>
          <h4>Uma nova formula chega ao Brasil!</h4>
          <span>
            O extrato de Italabs é um dos principais ativos para perda de peso.
            Obtenha resultados mais rapidos, seguros e duradouros com Italabs...
          </span>

          <Button image={true} />
        </div>
        <div className="hero__image">
          <img src={"https://reveravit.com.br/img/frascos-principal.png"} alt="teste" />
        </div>
      </div>
    </div>
  )
}
