import Head from "next/head";
import Link from "next/link";
import Navbar from "../components/navigation/navigation";

function MyApp({ Component, pageProps }) {
  const navLinks = [
    {
      text: "Startseite",
      path: "/",
      key: "1",
    },
    {
      text: "Leistungen",
      path: "/leistungen",
      key: "2",
    },
    {
      text: "Kontakt",
      path: "/kontakt",
      key: "4",
    },
  ];
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          defer
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/img/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/img/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/img/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/img/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link href="/static/css/style.css" rel="stylesheet" async />
      </Head>

      <Navbar navLinks={navLinks} />

      <div className="kontakt">
        <div className="wrapper">
          <b>
            Haben Sie Fragen?
            <a
              href="tel:017670745281"
              title="Rufen Sie uns unverbindlich an - Hier klicken"
            >
              0176 – 70745281{" "}
            </a>
            <span className="hide">|</span> Montag - Freitag von 09:00 - 19:00
            Uhr
          </b>
        </div>
      </div>
      <Component {...pageProps} />
      <div className="divider_small"></div>
      <div className="wrapper">
        <div className="footer">
          <div>
            <h2>Kontakt</h2>
            <h3>Aust Umzüge & Haushaltsäuflösungen</h3>
            <br /> <br />
            <p>
              Alex Aust
              <br />
              <br />
              Mobil: 0176 – 70745281
              <br />
              E-Mail: info@aust-umzuege.de
              <br />
              <br />
            </p>
          </div>
          <div>
            <h2>Bürozeiten</h2>
            <p>
              Montag – Freitag: 09:00 – 19:00 Uhr <br />
              Samstag nach Vereinbarung
              <br />
              Sonntag geschlossen <br />
              <br />
              <Link href="/rechtliches/impressum">
                <a title="Impressum">Impressum</a>
              </Link>
              <br />
              <br />
              <Link href="/rechtliches/datenschutz">
                <a title="Datenschutzerklärung">Datenschutzerklärung</a>
              </Link>
              <br />
              <br />
              <Link href="/rechtliches/agbs">
                <a title="Unsere AGBs">AGBs</a>
              </Link>
              <br />
              <br />
            </p>
          </div>
          <div className="right">
            <a
              href="https://profis.check24.de/profil/aust-umzuge-haushaltsauflosungen/qyekqm"
              target="_blank"
              rel="noreferrer"
              title="Check24 Seite"
            >
              <img
                src="/static/img/check24.png"
                alt="Check 24 Bewertungen über uns"
                className="social"
              />
            </a>
            <div>
              <a
                href="https://www.instagram.com/austumzuege/"
                rel="noreferrer"
                target="_blank"
                title="Unsere Instagramseite"
              >
                <img
                  src="/static/img/instagram-icon.png"
                  className="social"
                  alt="Bild Link zu Instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/Austumzuege/"
                rel="noreferrer"
                target="_blank"
                title="Unsere Facebookseite"
              >
                <img
                  src="/static/img/facebook-icon.png"
                  className="social"
                  alt="Bild Link zu Facebook"
                />{" "}
              </a>
              <br />
              <br />
              <a
                href="https://www.clemensfabig.com"
                target="_blank"
                rel="noreferrer"
                title="Webdesign made by Clemens Fabig"
              >
                Made with ❤ by Clemens Fabig
              </a>
              <br />
              <br />
              <Link href="/rechtliches/impressum">
                <a target="_blank" rel="noreferrer" title="Impressum">
                  © 2020, by Alex Aust
                </a>
              </Link>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyApp;

{
  /* <nav>
<ul>
  <li>
    <Link href="/">
      <a title="Startseite">Home</a>
    </Link>
  </li>
  <li>
    <Link href="/leistungen">
      <a title="Unsere Leistungen für Umzüge und Haushaltsauflösungen">
        Leistungen
      </a>
    </Link>
  </li>
  <li>
    <Link href="/bewertungen">
      <a title="Bewertungen unserer Kunden">Bewertungen</a>
    </Link>
  </li>
  <li>
    <Link href="/ratgeber">
      <a title="Unser Ratgeber für Ihren Umzug">Ratgeber</a>
    </Link>
  </li>
  <li>
    <Link href="/kontakt">
      <a title="Ihr Kontakt zu Ihrem Partner für Umzüge">Kontakt</a>
    </Link>
  </li>
  <li>
    <Link href="/kostenloses-angebot">
      <a title="Ihr kostenloses Angebot" className="button">
        Kostenloses Angebot
      </a>
    </Link>
  </li>
</ul>
</nav> */
}
