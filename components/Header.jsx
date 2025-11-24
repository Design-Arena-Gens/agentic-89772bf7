export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="brand" aria-label="Groupe Chikhoune">
          <span className="brand-mark" aria-hidden />
          <span className="brand-name">Groupe Chikhoune</span>
        </a>
        <nav className="nav" aria-label="Navigation principale">
          <a href="#" title="Accueil">Accueil</a>
          <a href="#marques" title="Nos marques">Nos Marques</a>
          <a href="#filiales" title="Nos filiales">Nos Filiales</a>
          <a href="#carriere" title="Carri?re">Carri?re</a>
          <a href="#contact" title="Contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
