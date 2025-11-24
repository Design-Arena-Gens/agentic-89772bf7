import Header from '../components/Header';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Brands />
        <section id="filiales" className="section container">
          <div className="section-header">
            <h2>Nos Filiales</h2>
            <p>Un ?cosyst?me int?gr? au service de la qualit? et de la souverainet? alimentaire.</p>
          </div>
          <div className="cards-grid cols-3">
            <article className="card">
              <h3>Chikhoune Agro</h3>
              <p>Transformation, logistique et distribution de produits alimentaires.</p>
            </article>
            <article className="card">
              <h3>Chikhoune Waters</h3>
              <p>Captage, embouteillage et contr?le qualit? des eaux min?rales.</p>
            </article>
            <article className="card">
              <h3>Chikhoune Pasta</h3>
              <p>Production de semoules et p?tes premium pour tous les foyers.</p>
            </article>
          </div>
        </section>

        <section id="carriere" className="section container">
          <div className="section-header">
            <h2>Carri?re</h2>
            <p>Rejoignez un groupe visionnaire qui investit dans les talents.</p>
          </div>
          <div className="careers-strip">
            <div className="strip-item">
              <h3>Culture d'excellence</h3>
              <p>Exigence, respect et esprit d'?quipe au c?ur de notre r?ussite.</p>
            </div>
            <div className="strip-item">
              <h3>D?veloppement</h3>
              <p>Formations, mobilit?, et opportunit?s dans tout le groupe.</p>
            </div>
            <div className="strip-item">
              <h3>Impact</h3>
              <p>Contribuez ? nourrir demain, durablement.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="section container contact">
          <div className="contact-content">
            <h2>Contact</h2>
            <p>Vous souhaitez collaborer avec le Groupe Chikhoune ? Parlons-en.</p>
            <a className="button button-outline" href="mailto:contact@groupe-chikhoune.com">contact@groupe-chikhoune.com</a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
