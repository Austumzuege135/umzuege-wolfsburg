import Link from "next/link";
import Head from "next/head";

const Haushaltsaufloesungen = () => (
  <div>
    <Head>
      <title>
        Sie planen die Auflösung eines Haushalts? Sie sind sich aber nicht
        sicher wie Sie es am besten anstellen? Keine Sorge wir kümmern uns um
        Ihre Haushaltsauflösung vom Anfang bis zum Ende
      </title>
      <meta
        name="description"
        content="Sie möchten aus irgendwelchen Gründen Ihren Haushalt auflösen? Rufen Sie uns an und holen Sich ihr Angebot, damit Sie sich um wichtigere Dinge kümmern können."
      />
    </Head>
    <div className="hero-head-haushaltsauflösung">
      <div className="heading">
        <h1>Haushaltsauflösungen</h1>
        <p>
          Auch Auflösungen eines Haushalts sind manchmal nötig und auch das
          erledigen wir reibungslos
        </p>
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
      <h2>Professionelle Haushalstauflösungen in Wolfsburg und Umgebung</h2>
      <br />
      <br />
      <p>
        Sie benötigen Hilfe bei einer Haushaltsauflösung in Wolfsburg? Dann sind
        Sie hier bei Aust Umzüge genau an der richtigen Adresse! Denn als
        professionelles Umzugsunternehmen aus Wolfsburg kümmern wir uns nicht
        nur um Umzüge und der Gleichen sondern führen auch Haushaltsauflösungen
        jeder Art durch. Haushaltsauflösungen sind oft emotional, denn sie
        finden meistens unfreiwillig statt und an allen Gegenständen in einer
        Wohnung oder einem Haus hängt eine Geschichte. Zudem ist die Auflösung
        einer Wohnung oder eines Hauses eine körperlich sehr große Anstrengung.
        Es muss alles raus transportiert werden, daher ist es für viele Menschen
        besser, wenn diese schweren Arbeiten ein seriöses Unternehmen übernimmt.
        Kontaktieren Sie uns jederzeit, wir übernehmen die Haushaltsauflösung
        und erledigen professionell und nach Absprache alles für Sie.
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Umfassender Service zum fairen Preis</h3>
      <br />
      <br />
      <p>
        Wir garantieren Ihnen professionelle Haushaltsauflösungen zum fairen
        Preis. Zu aller erst vereinbaren wir einen gemeinsamen
        Besichtigungstermin. Dieser ist natürlich kostenlos und absolut
        unverbindlich für Sie! Nach der Abstimmung beginnen wir dann zum
        vereinbarten Termin mit unserer Arbeit.
        <br />
        <br />
        Wir übernehmen Haushaltsauflösungen, Entrümpelungen und Entsorgungen an
        folgenden Orten:
        <br />
        <br />
        • Dachboden
        <br />
        <br />
        • Keller oder Kellerräumen
        <br />
        <br />
        • Gartenhaus oder Geräteschuppen
        <br />
        <br />
        • Garagen
        <br />
        <br />
        • Lagerhallen
        <br />
        <br />
        • Freigelände
        <br />
        <br />
        • Häuser
        <br />
        <br />
        • Wohnungen
        <br />
        <br />
        Zu jeder Haushaltsauflösung zählt bei uns das Entfernen von allen
        Gegenständen, für eine besenreine Übergabe. Eingeschlossen sind auch
        Entfernungen von:
        <br />
        <br />
        • Tapeten
        <br />
        <br />
        • Teppichböden
        <br />
        <br />
        • Laminat
        <br />
        <br />
        • Deckenpanelen
        <br />
        <br />
        • Wandfliesen
        <br />
        <br />
        • Bodenfliesen
        <br />
        <br />
        • Nägel, Schrauben und Einbauten
        <br />
        <br />
        Vereinbaren Sie einen Termin für eine Besichtigung vorab. Wir freuen uns
        Ihnen behilflich sein zu können!
      </p>
      <br />
      <br />
      <br />
      <br />
      <h3>Kostenlose Angebote für Haushaltsauflösungen</h3>
      <br />
      <br />
      <p>
        Für Ihre finanzielle Planungssicherheit fordern Sie hier bei uns
        kostenlos und unverbindlich ein Angebot für eine Haushaltsauflösung an.
        Das Beste ist, bei uns bekommen Sie nicht nur Angebote mit absolut
        fairen Preisen, sondern auch eine Festpreisgarantie! Unser fleißiges
        Team sorgt für Platz und Ordnung zum günstigen Preis. Rufen Sie uns
        gerne an für eine Terminvereinbarung und fordern Sie bei uns Ihr
        kostenloses Angebot mit Festpreisgarantie an!
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

export default Haushaltsaufloesungen;
