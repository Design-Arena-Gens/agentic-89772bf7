export default function Brands() {
  return (
    <section id="marques" className="section container">
      <div className="section-header">
        <h2>Nos Marques</h2>
        <p>Des marques embl?matiques, reconnues pour leur go?t, leur qualit? et leur fiabilit?.</p>
      </div>
      <div className="brands-grid">
        <article className="brand-card">
          <div className="brand-visual" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1547592180-85f173990554?q=80&w=1887&auto=format&fit=crop')" }} />
          <div className="brand-body">
            <h3>Amazone</h3>
            <p>Huiles et condiments premium, au service de la cuisine familiale.</p>
          </div>
        </article>
        <article className="brand-card">
          <div className="brand-visual" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1887&auto=format&fit=crop')" }} />
          <div className="brand-body">
            <h3>Pasta World</h3>
            <p>P?tes et semoules d'exception, ? la texture parfaite.</p>
          </div>
        </article>
        <article className="brand-card">
          <div className="brand-visual" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580912370492-1cce04e9eacb?q=80&w=1887&auto=format&fit=crop')" }} />
          <div className="brand-body">
            <h3>Soummam Water</h3>
            <p>Eau min?rale pure, embouteill?e avec les plus hauts standards.</p>
          </div>
        </article>
      </div>
    </section>
  );
}
