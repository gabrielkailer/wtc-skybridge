"use client";

import { useState } from "react";

const faqData = [
  {
    q: "Onde fica o WTC Sky Bridge?",
    a: "Av. das Nações Unidas, 12.551 — 6° andar — Brooklin Novo, São Paulo/SP. Dentro do complexo World Trade Center, ao lado da Marginal Pinheiros, com acesso por trem e estacionamento no prédio.",
  },
  {
    q: "Qual a capacidade máxima do espaço?",
    a: "O maior ambiente (Espaço Golden Gate) comporta até 160 pessoas. No total, o Sky Bridge possui 5 ambientes com capacidades que vão de 17 a 160 pessoas, adaptáveis a diferentes configurações.",
  },
  {
    q: "Quais tipos de evento o espaço atende?",
    a: "Workshops, treinamentos, palestras, confraternizações corporativas, happy hours, lançamentos de produto, assembleias, eventos híbridos e locações audiovisuais. Atendemos exclusivamente eventos corporativos.",
  },
  {
    q: "O que está incluído na locação?",
    a: "Mobiliário básico, Wi-Fi fibra óptica, equipamentos audiovisuais básicos (projetores, TVs, som, microfones), recepcionista, limpeza e equipe de apoio. Serviços adicionais podem ser contratados conforme a necessidade do evento.",
  },
  {
    q: "Vocês oferecem serviço de alimentação?",
    a: "O complexo WTC conta com diversos restaurantes. Além disso, oferecemos a opção de contratar comes e bebes diretamente conosco ou trazer um fornecedor externo de sua preferência.",
  },
  {
    q: "O espaço tem estacionamento?",
    a: "Sim. O prédio do WTC possui estacionamento próprio disponível para os participantes do evento.",
  },
  {
    q: "É possível realizar eventos híbridos (presencial + online)?",
    a: "Sim. O Sky Bridge conta com câmeras, sistema de som dedicado e suporte técnico para transmissão ao vivo profissional.",
  },
  {
    q: "Posso visitar o espaço antes de contratar?",
    a: "Sim. Agende uma visita para conhecer pessoalmente os ambientes, a infraestrutura e a vista para a Ponte Estaiada.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Cada evento recebe uma proposta personalizada. Entre em contato pelo formulário, WhatsApp ou e-mail, e nossa equipe monta o orçamento de acordo com as necessidades específicas do seu evento.",
  },
  {
    q: "Vocês atendem eventos sociais como casamentos ou aniversários?",
    a: "Não. O WTC Sky Bridge é dedicado exclusivamente a eventos corporativos.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq section" id="faq" aria-label="Perguntas frequentes">
      <div className="container faq-container">
        <div className="faq-header">
          <p className="section-label" style={{ color: "var(--color-cyan)", fontFamily: "var(--font-nav)", fontSize: "0.85rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px", fontWeight: 500 }}>DÚVIDAS</p>
          <h2 className="section-title">
            Perguntas frequentes
          </h2>
        </div>

        <div className="faq-list">
          {faqData.map((item, i) => (
            <div key={i} className={`faq-item glass-card ${openIndex === i ? "active" : ""}`}>
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className={`faq-icon ${openIndex === i ? "open" : ""}`}>
                  +
                </span>
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
