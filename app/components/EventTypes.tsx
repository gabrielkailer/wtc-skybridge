export default function EventTypes() {
  const types = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      ),
      title: "Workshops e treinamentos",
      desc: "Ambientes preparados com infraestrutura de AV, Wi-Fi de alta velocidade e configurações flexíveis para dinâmicas de grupo.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" y1="19" x2="12" y2="22"/>
          <line x1="8" y1="22" x2="16" y2="22"/>
        </svg>
      ),
      title: "Palestras e fóruns",
      desc: "Estrutura profissional de som, imagem e iluminação para conteúdo de alto impacto.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      title: "Confraternizações",
      desc: "Espaços que combinam sofisticação e descontração para celebrar conquistas em equipe.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
          <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
          <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
          <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
        </svg>
      ),
      title: "Lançamentos de produto",
      desc: "O endereço como palco absoluto para apresentar novidades ao mercado com credibilidade.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      title: "Assembleias e reuniões",
      desc: "Privacidade e recursos técnicos premium para encontros e decisões executivas críticas.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      title: "Locações audiovisuais",
      desc: "Um cenário de altíssimo padrão arquitetônico para locações e produções corporativas.",
    }
  ];

  return (
    <section className="event-types section light-theme" aria-label="Tipos de eventos">
      <div className="container">
        <div className="event-types-header">
          <h2 className="section-title">
            Eventos corporativos de todos os formatos.<br/> Nenhum improviso.
          </h2>
        </div>

        <div className="event-types-grid">
          {types.map((t, i) => (
            <div key={i} className="event-type-card glass-card">
              <div className="event-type-icon">{t.icon}</div>
              <h3 className="event-type-title">{t.title}</h3>
              <p className="event-type-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
