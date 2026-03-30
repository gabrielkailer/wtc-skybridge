export default function NumbersBar() {
  const numbers = [
    { value: "10.000+", label: "eventos realizados" },
    { value: "750m²", label: "de espaço premium" },
    { value: "5", label: "ambientes versáteis" },
    { value: "4.9", label: "avaliação no Google" },
  ];

  return (
    <section className="numbers-bar" aria-label="Números do Sky Bridge">
      <div className="container">
        <div className="numbers-grid">
          {numbers.map((n, i) => (
            <div key={i} className="numbers-item">
              <div className="numbers-item-value">{n.value}</div>
              <div className="numbers-item-label">{n.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
