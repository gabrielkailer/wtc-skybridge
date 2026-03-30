export default function Testimonials() {
  const videoDepoimentos = [
    {
      video: "/videos/depoimentos/Depoimento 01.mp4",
      name: "Matheus Pandolfo",
      role: "Head de Marketing"
    },
    {
      video: "/videos/depoimentos/Depoimento 02.mp4",
      name: "Talita Ligeiro",
      role: "Diretora de Produtos e Estratégia"
    },
    {
      video: "/videos/depoimentos/Depoimento 03.mp4",
      name: "Alan Barcelos",
      role: "Consultor e Líder"
    }
  ];

  return (
    <section className="testimonials section light-theme" id="depoimentos" aria-label="Depoimentos e Casos de Sucesso">
      <div className="container">
        <div className="testimonials-header">
          <p className="section-label" style={{ color: "var(--color-cyan)", fontFamily: "var(--font-nav)", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 500 }}>A VOZ DOS CLIENTES</p>
          <h2 className="section-title" style={{ maxWidth: "800px", margin: "0 auto" }}>
            Quem experimenta, confia. Veja o que dizem as empresas parceiras.
          </h2>
        </div>

        <div className="video-testimonials-grid">
          {videoDepoimentos.map((dep, i) => (
            <div key={i} className="video-testimonial-card glass-card">
              <div className="video-wrapper">
                <video 
                   src={dep.video} 
                   controls 
                   preload="metadata" 
                   playsInline
                   className="testimonial-video-player"
                />
              </div>
              <div className="video-testimonial-info">
                <h3 className="video-testimonial-name">{dep.name}</h3>
                <p className="video-testimonial-role">{dep.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
