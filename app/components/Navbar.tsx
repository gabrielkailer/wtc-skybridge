"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Block scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} role="navigation" aria-label="Navegação principal">
      <div className="navbar-inner">
        <div className="navbar-left">
          <a href="#" className="navbar-logo" aria-label="WTC Sky Bridge - Página inicial">
            <Image
              src="/logos/sky-bridge-logo.png"
              alt="WTC Sky Bridge"
              width={280}
              height={84}
              style={{ width: 'auto', height: '84px' }}
              priority
            />
          </a>
        </div>

        <div className="navbar-center-group">
          <div className="navbar-links">
            <a href="#espacos" className="navbar-link">Espaços</a>
            <a href="#beneficios" className="navbar-link">Benefícios</a>
            <a href="#como-funciona" className="navbar-link">Como Funciona</a>
            <a href="#depoimentos" className="navbar-link">Depoimentos</a>
          </div>
          <a href="#cta-final" className="btn-cta navbar-cta desktop-only">
            Solicite seu Orçamento
          </a>
        </div>

        <div className="navbar-right">
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`navbar-mobile-menu ${menuOpen ? "open" : ""}`}>
        <a href="#espacos" className="navbar-link" onClick={() => setMenuOpen(false)}>Espaços</a>
        <a href="#beneficios" className="navbar-link" onClick={() => setMenuOpen(false)}>Benefícios</a>
        <a href="#como-funciona" className="navbar-link" onClick={() => setMenuOpen(false)}>Como Funciona</a>
        <a href="#depoimentos" className="navbar-link" onClick={() => setMenuOpen(false)}>Depoimentos</a>
        <a href="#cta-final" className="btn-cta" onClick={() => setMenuOpen(false)}>
          Solicite seu Orçamento
        </a>
      </div>
    </nav>
  );
}
