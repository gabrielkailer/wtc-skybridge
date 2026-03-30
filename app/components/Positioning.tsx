import Image from "next/image";

export default function Positioning() {
  return (
    <section className="positioning section" aria-label="Sobre o WTC Sky Bridge">
      <div className="container">
        
        <div className="positioning-content">
          
          {/* Lado Esquerdo: Textos */}
          <div className="positioning-text">
            <p className="section-label">QUEM SOMOS</p>
            <h2 className="section-title">
              O espaço que grandes marcas<br/>escolhem para seus eventos
            </h2>
            <p className="positioning-desc">
              O WTC Sky Bridge é um espaço multiuso de 750 m² dedicado a eventos corporativos, locações audiovisuais e experiências exclusivas. Integrado ao complexo World Trade Center São Paulo — um dos endereços mais prestigiados do país — o Sky Bridge une sofisticação, infraestrutura de ponta e praticidade em um único andar.
            </p>
            
            <div className="positioning-list-group">
              <h4>Para quem é o Sky Bridge:</h4>
              <ul className="custom-bullets">
                <li>Empresas que buscam um espaço à altura da sua marca</li>
                <li>Agências de eventos que precisam de estrutura completa e confiável</li>
                <li>Líderes e gestores que querem realizar eventos sem dor de cabeça</li>
              </ul>
            </div>
          </div>

          {/* Lado Direito: Imagem e Card Flutuante */}
          <div className="positioning-visual">
            <div className="positioning-image-box">
              <Image
                src="/images/eventos/about-us.jpg"
                alt="Evento realizado no WTC Sky Bridge"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            
            <div className="floating-stat-card glass-card">
              <div className="stat-content">
                <span className="stat-value">5</span>
                <span className="stat-label">AMBIENTES<br/>VERSÁTEIS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
