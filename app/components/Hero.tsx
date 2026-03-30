import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="WTC Sky Bridge com vista para a Ponte Estaiada"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <span className="hero-badge">Integrado ao complexo WTC São Paulo</span>

        <h1 className="hero-headline">
          Seu evento corporativo no endereço mais icônico de São Paulo — de frente para a{" "}
          <span className="cyan">Ponte Estaiada</span>.
        </h1>

        <p className="hero-subtitle">
          750 m² de espaço premium integrado ao complexo World Trade Center, com
          infraestrutura completa, equipe dedicada e tudo o que seu evento precisa
          em um só lugar.
        </p>

        <div className="hero-ctas">
          <a 
            href="https://evento.wtcclub.com.br/cadastrar.aspx?5796-0-Interesse(evento)" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-cta"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'conversion', {
                  'send_to': 'AW-17721733763/EuMKCOmKvpIcEIPlsIJC',
                  'value': 1.0,
                  'currency': 'BRL'
                });
              }
            }}
          >
            Solicite seu Orçamento
          </a>
          <a href="#espacos" className="btn-secondary--white">
            Conheça nossos espaços
          </a>
        </div>

        <div className="hero-stats">
          <div>
            <div className="hero-stat-number">10.000+</div>
            <div className="hero-stat-label">eventos realizados</div>
          </div>
          <div>
            <div className="hero-stat-number">4.9</div>
            <div className="hero-stat-label">avaliação no Google</div>
          </div>
          <div>
            <div className="hero-stat-number">750m²</div>
            <div className="hero-stat-label">de espaço premium</div>
          </div>
        </div>
      </div>
    </section>
  );
}
