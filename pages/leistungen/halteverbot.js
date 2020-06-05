import Head from "next/head";
import Link from "next/link";

const Halteverbot = () => (
  <div>
    <Head>
      <title>
        Bei jedem Umzug gibt es viele Dinge zu beachten. Benötigen Sie Kartons?
        Gibt es ausreichend Parkmöglichkeiten? Benötigen Sie eventuell ein
        Halteverbot? Gerne helfen wir Ihnen beim Beantragen.
      </title>
      <meta
        name="description"
        content="Bei einem Umzug gibt es allerlei zu beachten. Parkmöglichkeiten sind oft ein unterschätzten Thema, also klären Sie rechtzeitig, ob Sie ein Halteverbot benötigen!"
      />
    </Head>
    <div className="hero-head-halteverbot">
      <div className="heading">
        <h1>Halteverbot</h1>
        <p>Oder sonstige Probleme erwarten Sie regelmäßig bei einem Umzug</p>
      </div>
    </div>
    <div claclassNamess="seperator">
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
      <h2>
        Wir kümmern uns auch gerne um sonstige Vorbereitungen wie
        Parkmöglichkeiten bei Ihrem anstehenden Umzug.
      </h2>
      <br />
      <br />
      <p>
        Sie stehen kurz vor Ihrem Umzug und müssen noch viel erledigen? Dann
        machen Sie sich Ihren Umzug einfacher, mit einem professionellen
        Umzugsunternehmen. Fleißige Umzugshelfer von Aust Umzüge erledigen den
        Umzug in Wolfsburg und Umgebung im Handumdrehen für Sie! Sie wohnen
        städtisch und in einer dicht bebauten Straße mit wenigen
        Parkmöglichkeiten? Was machen Sie dann am Umzugstag, wo parken Sie den
        Transporter, der Ihr Umzugsgut von A nach B bringen soll? Für jene, die
        kaum Parkmöglichkeiten vor der Haustür haben, bieten wir Ihnen die
        Einrichtung einer Halteverbotszone am Umzugstag an. Dies erspart Ihnen
        unnötige Laufwege und Schlepperei am Umzugstag. Schließlich muss Ihr
        gesamtes Hab und Gut verladen werden. Wenden Sie sich an uns, wir sind
        ein erfahrenes Umzugsunternehmen aus Wolfsburg und haben schon viele
        Umzüge aller Art erfolgreich erledigt.
      </p>
      <br />
      <br />
      <h3>Alles für Ihren Umzug</h3>
      <br />
      <br />
      <p>
        Ein Umzug ist schon anstrengend genug. Da sind kurze Laufwege von der
        Wohnung oder dem Haus zum Umzugswagen eine echte Erleichterung. Wenn Sie
        also nicht garantieren können, dass am Umzugstag selbst eine
        ausreichende Parkfläche vor der Haustür für den Transporter zur
        Verfügung steht, sollten Sie ein Halteverbot einrichten lassen. Doch wie
        richtet man ein Halteverbot ein? Wir beantragen das Halteverbot für Sie
        bei der zuständigen Behörde (Stadt oder Gemeinde im Wohnort). Dieses
        sollte möglichst früh beantragt werden, denn Sie müssen etwas
        Bearbeitungszeit in Kauf nehmen. Damit Sie bei Ihrem Umzug keine langen
        Laufwege haben oder womöglich noch im Halteverbot parken müssen und
        sogar noch einen Strafzettel kassieren, wenden Sie sich an uns. Wir
        kümmern uns um die Einrichtung einer Halteverbotszone in Wolfsburg und
        der gesamten Region.
      </p>
      <br />
      <br />
      <h3>Kostenlose Angebote für Ihren Umzug</h3>
      <br />
      <br />
      <p>
        Bei uns erhalten Sie ein kostenloses und unverbindliches Angebot für die
        Einrichtung einer Halteverbotszone am Umzugstag. Wir sind Ihre
        Umzugspartner und garantieren Ihnen nicht nur einen erstklassigen
        Umzugsservice, sondern auch einen fairen Preis. Fordern Sie jetzt hier
        bei uns ein Angebot für Ihren bevorstehenden Umzug an!
        <br />
        <br />
        <br />
        <br />
      </p>
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

export default Halteverbot;
