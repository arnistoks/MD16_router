import '../../data/styles.scss';

const AboutPage = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">About Rick and Morty</h1>

      <p className="text">Release date: September 4, 2015 (United Kingdom)</p>
      <p className="text">Country of origin: United States</p>
      <p className="text">
        Official sites:
        {' '}
        <a
          className="href"
          href="https://www.hulu.com/series/rick-and-morty-d76d6361-3fbf-4842-8dd7-e05520557280"
          target="_blank"
          rel="noreferrer"
        >
          Hulu
        </a>
        {' '}
        *
        {' '}
        <a
          className="href"
          href="https://www.facebook.com/RickandMorty"
          target="_blank"
          rel="noreferrer"
        >
          Official Facebook
        </a>
      </p>
      <p className="text">Language: English</p>
      <p className="text">Also known as: Rick và Morty</p>
      <p className="text">Filming locations: New York City, New York, USA</p>
      <p className="text">
        Production companies: Williams StreetGreen Portal ProductionsHarmonius Claptrap
      </p>
    </div>
  </section>
);

export default AboutPage;
