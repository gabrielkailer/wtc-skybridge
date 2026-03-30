export default function CredibilityBar() {
  const brands = ["TIM", "IBM", "Samsung", "Motorola", "Epson", "Mitsui CO"];

  return (
    <section className="credibility-bar" aria-label="Empresas que frequentam o espaço">
      <div className="container" style={{ maxWidth: '100%', overflow: 'hidden', padding: 0 }}>
        <p className="credibility-bar-title">
          Empresas que frequentam o espaço da Sky Bridge
        </p>
        <div className="credibility-marquee">
          {/* Duplicamos os blocos de logos para criar o efeito contínuo infinito (Marquee) */}
          {[1, 2, 3, 4].map((group) => (
            <div key={group} className="credibility-logos" aria-hidden={group !== 1}>
              {brands.map((brand) => (
                <span key={`${group}-${brand}`} className="credibility-logo">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
