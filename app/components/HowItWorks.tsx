export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Primeiro contato",
      desc: "Você entra em contato pelo formulário, WhatsApp ou e-mail. Nossa equipe responde para entender o formato, o público e os objetivos do seu evento.",
    },
    {
      number: 2,
      title: "Orçamento personalizado",
      desc: "Com base nas suas necessidades, montamos uma proposta sob medida — sem pacotes genéricos. Cada orçamento é único porque cada evento é único.",
    },
    {
      number: 3,
      title: "Visita ao espaço",
      desc: "Convidamos você a conhecer pessoalmente os ambientes do Sky Bridge. Ver o espaço, a vista, a infraestrutura — e entender por que grandes marcas escolhem este endereço.",
    },
    {
      number: 4,
      title: "Preparação personalizada",
      desc: "Alinhamos cada detalhe: layout, equipamentos, equipe, fornecedores, cronograma. Tudo é planejado em conjunto para que nada fique de fora.",
    },
    {
      number: 5,
      title: "Realização do evento",
      desc: "No dia, nossa equipe está presente do início ao fim. Coordenador, técnico de AV, recepcionista e apoio logístico — tudo funcionando para que você foque no que importa: o conteúdo e os convidados.",
    },
  ];

  return (
    <section className="how-it-works section" id="como-funciona" aria-label="Como funciona">
      <div className="container">
        <div className="how-it-works-header">
          <p className="section-label" style={{ color: "var(--color-cyan)", fontFamily: "var(--font-nav)", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 500 }}>A JORNADA</p>
          <h2 className="section-title">
            Do primeiro contato ao dia do evento — simples, organizado e sem surpresas.
          </h2>
        </div>

        <div className="journey-timeline">
          {/* A trilha laser animada que desce pela página */}
          <div className="journey-line">
            <div className="journey-line-glow" />
          </div>

          {steps.map((step, idx) => (
            <div key={step.number} className="journey-stop glass-card">
              {/* O Nódulo de Interação de cada passo */}
              <div className="journey-node">
                <div className="node-core" />
              </div>
              
              <div className="journey-content">
                <span className="journey-step-label">Passo 0{step.number}</span>
                <h3 className="journey-title">{step.title}</h3>
                <p className="journey-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
