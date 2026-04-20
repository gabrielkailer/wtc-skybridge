import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <Image
              src="/logos/sky-bridge-logo.png"
              alt="WTC Sky Bridge"
              width={160}
              height={45}
              style={{ objectFit: "contain" }}
            />
            <p className="footer-desc">
              Espaço premium para eventos corporativos integrado ao complexo World Trade Center São Paulo. Uma experiência imersiva e de alto padrão para sua empresa.
            </p>
          </div>

          <div className="footer-col">
            <h4 className="footer-heading">Endereço</h4>
            <p className="footer-text">
              Av. das Nações Unidas, 12.551<br />
              6° Andar — Brooklin Novo<br />
              São Paulo — SP, 04578-000
            </p>
          </div>

          <div className="footer-col">
            <div className="footer-socials">
              <a href="https://www.instagram.com/wtcskybridge/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Image src="/logos/instagram-icon.png" alt="Instagram" width={20} height={20} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Image src="/logos/linkedin-icon.png" alt="LinkedIn" width={20} height={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            &copy; {new Date().getFullYear()} WTC Sky Bridge. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
