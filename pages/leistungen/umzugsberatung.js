import Link from "next/link";
import Head from "next/head";

const Umzugsberatung = () => (
  <div>
    <Head>
      <title>
        Unsere Beratung rund um das Thema Umzug. Rufen Sie uns an und wir stehen
        Ihnen Rede und Antwort rund um Ihre Fragen.
      </title>
      <meta
        name="description"
        content="Sie haben Fragen rund um Ihren Umzug? Wir stehen nicht nur mit Tat sonder auch mit Rat zur Seite!"
      />
    </Head>
    <div className="hero-head-umzugsberatung">
      <div className="heading">
        <h1>Umzugsberatung</h1>
        <p>Gerne stehen wir Ihnen Rede und Antwort rund um das Thema Umzug</p>
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
      <br />
      <br />
      <h2>Professionelle Umzugsberatung – kostenlos und unverbindlich</h2>
      <br />
      <br />
      <p>
        Die Arbeit bei einem Umzug wird oft unterschätzt und fängt schon viele
        Wochen vorher an. Doch womit beginnt man und wann? Damit Sie bei Ihrem
        Umzug nichts vergessen und Sie sich Stress und unnötige Kosten sparen
        können, beraten wir Sie gerne umfassend rund um Ihren Umzug. Wir nehmen
        uns die Zeit und beantworten Ihnen alle Fragen, die im Zusammenhang mit
        Ihrem Umzug stehen und bieten Ihnen Hilfestellungen, damit Ihr Umzug
        erfolgreich verläuft – ohne Zwischenfälle. Denn wir sind eine erfahrene
        Umzugsfirma aus Wolfsburg, die weiß worauf es bei einem Umzug ankommt
        und was beachtet werden sollte. Wir realisieren nicht nur Umzüge aller
        Art zum günstigen Preis, sondern bieten Ihnen auch eine professionelle
        Umzugsberatung. Kontaktieren Sie uns jederzeit. Wir bieten Ihnen einen
        erstklassigen Umzugsservice und professionelle Umzugsberatungen.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Wir unterstützen Sie bei Ihrem Umzug in Wolfsburg</h3>
      <br />
      <br />
      <p>
        Mit uns starten Sie bestens vorbereitet Ihren Umzug. Nach einer
        ausgiebigen Umzugsberatung, wissen Sie, worauf es bei einem Umzug
        ankommt, was wirklich wichtig ist und wie dabei die zeitliche Abfolge
        ist. Zudem erfahren Sie von uns, welche Schritte Sie zuerst tun sollten
        und welche Fristen Sie einhalten müssen. Gerade im Punkt
        Kündigungsfristen können Sie viel Geld einsparen, wenn Sie sich
        rechtzeitig kümmern. Kontaktieren Sie uns und sparen Sie sich unnötigen
        Stress und unnötige Kosten. Denn nichts ist schlimmer, als wenn Sie am
        Umzugstag feststellen, dass Sie etwas Wichtiges vergessen haben. Dann
        geraten Sie in Stress und es entstehen Ihnen oftmals unnötige
        Zusatzkosten. Das muss nicht sein!
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Unverbindliche Umzugsberatung und kostenlose Angebot für Umzüge</h3>
      <br />
      <br />
      <p>
        Für Ihre Planungssicherheit bei Ihrem Umzug kontaktieren Sie uns
        telefonisch oder per E-Mail und wir vereinbaren einen Termin für eine
        kostenlose Umzugsberatung. Wir geben Ihnen nützliche Tipps und
        Hilfestellung. Auf Wunsch erhalten Sie auch ein unverbindliches Angebot
        für Ihren Umzug in Wolfsburg und der Region. Ganz gleich, ob es sich
        dabei um einen Privatumzug oder Firmenumzug handelt, von uns erhalten
        Sie eine kompetente Beratung und faire Preise. Wir von Aust Umzüge
        freuen uns auf Ihren Kontakt!
      </p>
      <br />
      <br />
      <br />
      <br />
      <Link href="/leistungen">
        <a
          className="button"
          title="Zurück zu Leistungen für Umzüge und Haushaltsauflösungen"
        >
          <b>Zurück zur Übersicht</b>
        </a>
      </Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Link href="/kostenloses-angebot">
        <a
          className="button"
          title="Kostenlosees Angebot für Ihren Privatumzug"
        >
          <b>Zum kostenlosen Angebot</b>
        </a>
      </Link>
      <br />
      <br />
      <br />
    </div>
  </div>
);

export default Umzugsberatung;
