"use client";

import { useState } from "react";
import Image from "next/image";

interface SpaceData {
  name: string;
  id: string;
  tagline: string;
  capacity: string;
  area: string;
  idealFor: string[];
  description: string;
}

import spacesImagesRaw from "../spacesData.json";

type SpacesImagesType = {
  [key: string]: {
    [category: string]: string[];
  };
};

const spacesImages: SpacesImagesType = spacesImagesRaw;

const spacesData: SpaceData[] = [
  {
    name: "Golden Gate",
    id: "golden-gate",
    tagline: "O maior e mais versátil",
    capacity: "até 160 pessoas",
    area: "155 m²",
    idealFor: ["grandes apresentações", "coquetéis", "lançamentos"],
    description:
      "O ambiente que transforma sua visão em realidade. Com capacidade para 160 pessoas e configuração flexível, o Golden Gate atende desde apresentações de grande porte até coquetéis corporativos."
  },
  {
    name: "Brooklyn",
    id: "brooklyn",
    tagline: "Vista direta para a Ponte Estaiada",
    capacity: "até 95 pessoas",
    area: "94 m²",
    idealFor: ["workshops", "coquetéis", "reuniões amplas"],
    description:
      "A Sala Brooklyn une infraestrutura completa a uma das vistas mais impactantes de São Paulo. Adaptável para diferentes configurações com a flexibilidade que seu evento exige."
  },
  {
    name: "Cambridge",
    id: "cambridge",
    tagline: "O palco para palestras e fóruns",
    capacity: "até 70 pessoas",
    area: "120 m²",
    idealFor: ["palestras", "fóruns", "treinamentos"],
    description:
      "Com ambiente intimista e estrutura dedicada, a Sala Cambridge foi concebida para conteúdo de excelência. Ideal para quem quer transformar ideias em realizações memoráveis."
  },
  {
    name: "Sala R1",
    id: "r1",
    tagline: "Reuniões estratégicas com privacidade",
    capacity: "até 24 pessoas",
    area: "28 m²",
    idealFor: ["reuniões executivas", "sessões de decisão"],
    description:
      "Design focado em reuniões de alta relevância, oferecendo configurações flexíveis e um ambiente propício à concentração, privacidade e foco absoluto."
  },
  {
    name: "Sala R2",
    id: "r2",
    tagline: "Colaboração em ambiente reservado",
    capacity: "até 17 pessoas",
    area: "23 m²",
    idealFor: ["brainstorming", "reuniões de equipe"],
    description:
      "Ambiente compacto equipado com recursos premium, ideal para trocas de ideias e planejamento ágil em times menores que exigem infraestrutura top de linha."
  },
];

export default function Spaces() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeCategory, setActiveCategory] = useState<string>("Com Pessoas");
  const [currentImage, setCurrentImage] = useState(0);

  const activeData = spacesData[activeTab];
  const roomCategories = spacesImages[activeData.id] || {};
  const categories = Object.keys(roomCategories);

  // Fallback se a categoria ativa não existir para a sala atual
  const safeActiveCategory = categories.includes(activeCategory) ? activeCategory : categories[0] || "";
  const currentImagesList = roomCategories[safeActiveCategory] || [];

  const handleTabChange = (index: number) => {
    const newRoomId = spacesData[index].id;
    const newRoomCats = Object.keys(spacesImages[newRoomId] || {});
    
    // Tenta manter a mesma categoria (ex: "Auditório"), ou pega a primeira disponível
    if (!newRoomCats.includes(activeCategory)) {
      setActiveCategory(newRoomCats[0] || "");
    }
    
    setActiveTab(index);
    setCurrentImage(0); // reset carousel on tab change
  };

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentImage(0); // reset carousel when changing category
  };

  const handleNextImage = () => {
    setCurrentImage((prev) => (prev + 1) % currentImagesList.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? currentImagesList.length - 1 : prev - 1));
  };

  return (
    <section className="spaces section" id="espacos" aria-label="Espaços do WTC Sky Bridge">
      <div className="container">
        <div className="spaces-header">
          <p className="section-label" style={{ color: "var(--color-cyan)" }}>NOSSOS ESPAÇOS</p>
          <h2 className="section-title">
            5 ambientes desenhados<br />para cada formato de evento
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="spaces-tabs">
          {spacesData.map((tab, idx) => (
            <button
              key={idx}
              className={`space-tab-btn ${activeTab === idx ? "active" : ""}`}
              onClick={() => handleTabChange(idx)}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Active Space Content */}
        <div className="space-content-window glass-card">
          <div className="space-details">
            <h3 className="space-tagline">{activeData.tagline}</h3>
            
            <div className="space-quick-specs">
              <div className="spec-badge">
                <span className="spec-icon">👥</span> {activeData.capacity}
              </div>
              <div className="spec-badge">
                <span className="spec-icon">📏</span> {activeData.area}
              </div>
            </div>

            <p className="space-lead-desc">{activeData.description}</p>
            
            <div className="space-ideal-wrapper">
              <p className="ideal-title">PREPARADO PARA:</p>
              <div className="space-tags">
                {activeData.idealFor.map((tag, i) => (
                  <span key={i} className="space-tag">{tag}</span>
                ))}
              </div>
            </div>
            
            {categories.length > 0 && (
              <div className="space-categories-wrapper">
                <p className="category-title">Variações do espaço:</p>
                <div className="space-categories">
                  {categories.map((cat, idx) => (
                    <button
                      key={idx}
                      className={`space-cat-btn ${cat === safeActiveCategory ? "active" : ""}`}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-carousel">
            <div className="carousel-track-wrapper">
              <div 
                className="carousel-track" 
                style={{ transform: `translateX(-${currentImage * 100}%)` }}
              >
                {currentImagesList.map((img, i) => (
                  <div key={i} className="carousel-slide">
                    <Image
                      src={img}
                      alt={`${activeData.name} - ${safeActiveCategory} - imagem ${i + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Controls */}
            {currentImagesList.length > 1 && (
              <>
                <button className="carousel-btn prev" onClick={handlePrevImage}>&#10094;</button>
                <button className="carousel-btn next" onClick={handleNextImage}>&#10095;</button>
                <div className="carousel-dots-wrapper">
                  <div className="carousel-dots">
                    {currentImagesList.map((_, i) => (
                      <button 
                        key={i} 
                        className={`carousel-dot ${i === currentImage ? "active" : ""}`}
                        onClick={() => setCurrentImage(i)}
                      />
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        
      </div>
    </section>
  );
}
