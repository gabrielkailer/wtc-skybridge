export default function CTAFinal() {
  return (
    <div className="cta-banner-wrapper">
      <div className="container">
        <div className="cta-banner">
          <div className="cta-banner-content">
            <h2 className="cta-banner-title">Seu próximo evento merece o melhor endereço de São Paulo.</h2>
            <p className="cta-banner-subtitle">
              Solicite seu orçamento e descubra como o WTC Sky Bridge pode transformar o seu evento corporativo — e a percepção dos seus convidados.
            </p>
            <p className="cta-banner-contact">
              Precisa de ajuda com o formato? <a href="mailto:contato@wtcskybridge.com.br">contato@wtcskybridge.com.br</a>
            </p>
          </div>
          <div className="cta-banner-action">
            <a
              href="https://evento.wtcclub.com.br/cadastrar.aspx?5796-0-Interesse(evento)"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).gtag) {
                  (window as any).gtag('event', 'ads_conversion_Contact_1');
                }
              }}
            >
              Solicitar Orçamento
            </a>
            <a href="https://wa.me/5511988982108" target="_blank" rel="noopener noreferrer" className="btn-banner-outline">
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
