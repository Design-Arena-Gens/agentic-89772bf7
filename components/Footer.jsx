export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div>
            <strong>Groupe Chikhoune</strong>
            <div className="credits">? {year} ? Tous droits r?serv?s</div>
          </div>
          <nav>
            <a href="#marques">Marques</a>{' '}?{' '}
            <a href="#filiales">Filiales</a>{' '}?{' '}
            <a href="#carriere">Carri?re</a>{' '}?{' '}
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
