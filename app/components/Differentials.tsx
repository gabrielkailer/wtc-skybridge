export default function Differentials() {
  const items = [
    {
      number: "01",
      title: "Integrado ao World Trade Center São Paulo",
      desc: "Não é apenas um espaço de eventos. É um andar inteiro dentro de um dos complexos empresariais mais respeitados do mundo. O mesmo espaço que recebe o WTC Club — frequentado por executivos de grandes marcas como TIM, IBM, Samsung, Motorola, Epson e Mitsui CO.",
    },
    {
      number: "02",
      title: "Equipe completa, não apenas um espaço",
      desc: "Enquanto a maioria dos espaços entrega uma sala e uma chave, a Sky Bridge entrega uma operação. Coordenador de evento, técnico de AV, recepcionista dedicada e apoio logístico de montagem a desmontagem. Tudo incluso. Tudo integrado.",
    },
    {
      number: "03",
      title: "Vista para a Ponte Estaiada",
      desc: "Poucas experiências em São Paulo se comparam a realizar um evento de frente para um dos marcos mais reconhecidos da cidade. Um diferencial visual que agrega valor à experiência de cada convidado.",
    },
    {
      number: "04",
      title: "Localização estratégica na região da Berrini",
      desc: "Av. das Nações Unidas, Brooklin Novo — com Marginal Pinheiros, trem e shopping integrado ao complexo. Acesso fácil para quem vem de qualquer ponto de São Paulo. Restaurantes, estacionamento e serviços — tudo dentro do mesmo endereço.",
    },
    {
      number: "05",
      title: "100% personalizável",
      desc: "Cada evento é único e tratado como tal. Não existe pacote fechado. A estrutura, os serviços e o formato são montados sob medida para a necessidade de cada cliente.",
    },
  ];

  return (
    <section className="differentials section light-theme" aria-label="Diferenciais">
      <div className="container">
        <div className="differentials-header">
          <p style={{ color: "var(--color-cyan)", fontFamily: "var(--font-nav)", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 500 }}>Vantagens Competitivas</p>
          <h2 className="section-title" style={{ textAlign: "left", maxWidth: "800px", margin: "0" }}>
            O que diferencia o Sky Bridge de qualquer outro espaço de eventos em São Paulo
          </h2>
        </div>

        <div className="differentials-grid">
          {items.map((item) => (
            <div key={item.number} className="differential-card glass-card">
              <div className="differential-number">{item.number}</div>
              <h3 className="differential-title">{item.title}</h3>
              <p className="differential-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
