import Head from "next/head";

import Link from "next/link";

const Ratgeber = () => (
  <div>
    <Head>
      <title>
        Unser Ratgeber, kostenlose Informationen rund um das Thema Umzug. Woran
        muss man vor und nach einem Umzug denken?
      </title>
      <meta
        name="description"
        content="Wir bieten Ihnen nicht nur die Möglichkeit eines kostenlosen Angebots. Wir helfen Ihnen auch kostenlos mit Ihren Fragen rund um das Thema Umzug!"
      />
    </Head>
    <div className="hero-head-ratgeber">
      <div className="heading">
        <h1>WAS SOLLTEN SIE BEI EINEM UMZUG BEACHTEN?</h1>
        <p>UND ANDERE THEMEN RUND UM DAS THEMA MÖBEL </p>
      </div>
    </div>
    <div className="seperator">
      <h3>
        <Link href="/kostenloses-angebot">
          <a title="Zum kostenlosen Angebot">
            <img
              src="/static/img/message-icon.png"
              alt="Schreiben Sie uns eine Nachricht"
            />
            Kostenloses Angebot erhalten
          </a>
        </Link>
      </h3>
    </div>
    <div className="wrapper">
      <br />
      <br />
      <br />
      <br />
      <h2>Welche Vorbereitung müssen Sie vor Ihrem Umzug beachten?</h2>
      <br />
      <br />
      <h3>
        Und woran sollten Sie auch <u>nach</u> Ihrem Umzug denken?
      </h3>
      <br />
      <br />
      <p>
        In unserem ersten Beitrag rund um das Thema umziehen möchten wir Ihnen
        eine nützliche Checkliste bereitstellen.
        <br />
        Bei jedem Umzug gibt es allerhand Dinge zu beachten und wir wollen Sie
        vorsorglich Informieren, sodass Sie alles reibungslos Planen können und
        vor allem nicht an unvorhergesehenen Problemen verzeifeln.
        <br />
        <br />
        Lesen Sie also hier über typische Stolpersteine und lassen Sie uns Ihnen
        kostenfrei dabei helfen, Ihren Umzug so entspant wie möglich zu
        gestalten.
        <br />
        Selbstverständlich können Sie uns jederzeit auch persönlich um Rat
        fragen.
      </p>

      <br />
      <br />
      <Link href="/blog/post">
        <a title="Checkliste für Ihren Umzug" className="button">
          Ihre Checkliste
        </a>
      </Link>
      <br />
      <br />
      <br />
      <br />
    </div>
  </div>
);

// Ratgeber.getInitialProps = async function () {
//   const res = await fetch("https://my-awesom-blog-api-crf.herokuapp.com/alex/");
//   const data = await res.json();

//   return {
//     posts: data,
//   };
// };

export default Ratgeber;

{
  /* <br />
      <br />
      <br />
      <br />
      <h2>Welche Vorbereitung müssen Sie vor Ihrem Umzug beachten?</h2>
      <br />
      <br />
      <h3>
        Und woran sollten Sie auch <u>nach</u> Ihrem Umzug denken?
      </h3>
      <br />
      <br />
      <p>
        In unserem ersten Beitrag rund um das Thema umziehen möchten wir Ihnen
        eine nützliche Checkliste bereitstellen.
        <br />
        Bei jedem Umzug gibt es allerhand Dinge zu beachten und wir wollen Sie
        vorsorglich Informieren, sodass Sie alles reibungslos Planen können und
        vor allem nicht an unvorhergesehenen Problemen verzeifeln.
        <br />
        <br />
        Lesen Sie also hier über typische Stolpersteine und lassen Sie uns Ihnen
        kostenfrei dabei helfen, Ihren Umzug so entspant wie möglich zu
        gestalten.
        <br />
        Selbstverständlich können Sie uns jederzeit auch persönlich um Rat
        fragen.
      </p>
 */
}
