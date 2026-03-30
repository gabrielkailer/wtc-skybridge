export default function Benefits() {
  const benefits = [
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      title: "Localização incomparável",
      desc: "No 6° andar do complexo WTC, na Av. das Nações Unidas — coração da região da Berrini. Ao lado da Marginal Pinheiros, com shopping integrado, restaurantes no complexo, estacionamento no prédio e fácil acesso por trem. Seu convidado chega sem atrito.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
      title: "Tudo em um só lugar",
      desc: "Equipamentos de áudio e vídeo, projetores, TVs, câmeras, sistema de som profissional, Wi-Fi fibra óptica, climatização em todos os ambientes, mobiliário, recepcionista e equipe de apoio. Você não precisa contratar nada por fora — a não ser que queira.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Equipe integrada do início ao fim",
      desc: "Coordenador de evento dedicado, técnico de audiovisual, recepcionista exclusiva, apoio logístico para montagem e desmontagem. A Sky Bridge opera junto com você, não apenas entrega uma sala vazia.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01" />
          <path d="M16 6h.01" />
          <path d="M12 6h.01" />
          <path d="M12 10h.01" />
          <path d="M12 14h.01" />
          <path d="M16 10h.01" />
          <path d="M16 14h.01" />
          <path d="M8 10h.01" />
          <path d="M8 14h.01" />
        </svg>
      ),
      title: "O endereço fala por você",
      desc: "O WTC São Paulo é sinônimo de excelência corporativa. Realizar seu evento aqui transmite seriedade, sofisticação e credibilidade antes mesmo de o primeiro convidado entrar na sala.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
      title: "Vista para a Ponte Estaiada",
      desc: "A Sala Brooklyn oferece uma das vistas mais emblemáticas de São Paulo: seu evento acontece de frente para a Ponte Estaiada. Um cenário que impressiona e marca.",
    },
    {
      icon: (
        <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
          <line x1="6" y1="1" x2="6" y2="4" />
          <line x1="10" y1="1" x2="10" y2="4" />
          <line x1="14" y1="1" x2="14" y2="4" />
        </svg>
      ),
      title: "Catering sob medida",
      desc: "Do coffee break executivo ao coquetel premium. Oferecemos opções gastronômicas adaptadas ao perfil do seu evento, garantindo que a qualidade do serviço à mesa acompanhe o nível da sua marca.",
    },
  ];

  return (
    <section className="benefits section light-theme" id="beneficios" aria-label="Benefícios">
      <div className="container">
        <h2 className="section-title" style={{ textAlign: "center", marginBottom: "4rem", maxWidth: "800px", marginInline: "auto" }}>
          Por que o Sky Bridge é a escolha de quem entende de eventos corporativos
        </h2>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="benefit-card glass-card">
              <div className="benefit-icon">{b.icon}</div>
              <h3 className="benefit-title">{b.title}</h3>
              <p className="benefit-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
