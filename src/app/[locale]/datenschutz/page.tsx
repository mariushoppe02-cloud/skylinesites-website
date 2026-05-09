import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-bold text-white font-[var(--font-jakarta)]">{title}</h2>
      <div className="text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl bg-[#18181b] border border-zinc-800 text-zinc-400 text-sm leading-relaxed space-y-2">
      {children}
    </div>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <p>
      <span className="text-zinc-500 font-medium">{label}:</span>{" "}
      <span className="text-zinc-300">{value}</span>
    </p>
  );
}

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main className="bg-[#09090b] min-h-screen">
      <Navigation />

      {/* Page header */}
      <div className="bg-[#0d0d10] border-b border-zinc-800/60 pt-28 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href={`/${locale}`} className="inline-flex items-center gap-1 text-[#C9963B] text-sm hover:underline mb-4 block">
            ← Zurück zur Startseite
          </Link>
          <h1 className="text-4xl font-extrabold font-[var(--font-jakarta)] text-white mb-3">Datenschutzerklärung</h1>
          <div className="h-1 w-16 bg-gradient-to-r from-[#C9963B] to-[#E8B84B] rounded" />
          <p className="text-zinc-500 text-sm mt-4">Stand: 09. Mai 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Verantwortlicher */}
        <Section title="Verantwortlicher">
          <Card>
            <p className="font-semibold text-white">HAM Handelsgesellschaft GbR</p>
            <p>Gesellschafter: Marius Hoppe, Hamsa Sarwari, Ayan Mubarak</p>
            <p>Offenbacherstraße 14, 63303 Dreieich, Deutschland</p>
            <p>
              E-Mail:{" "}
              <a href="mailto:info@skylinesites.de" className="text-[#C9963B] hover:underline">
                info@skylinesites.de
              </a>
            </p>
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Übersicht */}
        <Section title="Übersicht der Verarbeitungen">
          <p>
            Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer
            Verarbeitung zusammen.
          </p>
          <Card>
            <p className="font-semibold text-white mb-2">Arten der verarbeiteten Daten</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Kontaktdaten (Name, E-Mail-Adresse, Telefonnummer)</li>
              <li>Inhaltsdaten (Nachrichten, Projektbeschreibungen)</li>
              <li>Vertragsdaten</li>
              <li>Nutzungsdaten (Seitenaufrufe, Verweildauer)</li>
              <li>Meta-, Kommunikations- und Protokolldaten (IP-Adressen, Zugriffszeiten)</li>
            </ul>
          </Card>
          <Card>
            <p className="font-semibold text-white mb-2">Zwecke der Verarbeitung</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten</li>
              <li>Kommunikation und Beantwortung von Anfragen</li>
              <li>Sicherheitsmaßnahmen</li>
              <li>Bereitstellung unseres Onlineangebotes</li>
              <li>Büro- und Organisationsverfahren</li>
            </ul>
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Rechtsgrundlagen */}
        <Section title="Maßgebliche Rechtsgrundlagen">
          <p>
            Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis
            wir personenbezogene Daten verarbeiten.
          </p>
          <Card>
            <ul className="space-y-3">
              <li>
                <span className="text-white font-medium">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 lit. b DSGVO)</span>
                <p className="mt-1">Die Verarbeitung ist für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person erforderlich.</p>
              </li>
              <li>
                <span className="text-white font-medium">Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c DSGVO)</span>
                <p className="mt-1">Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, der der Verantwortliche unterliegt.</p>
              </li>
              <li>
                <span className="text-white font-medium">Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)</span>
                <p className="mt-1">Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten notwendig, sofern die Interessen der betroffenen Person nicht überwiegen.</p>
              </li>
            </ul>
          </Card>
          <p>
            Zusätzlich gelten nationale Datenschutzregelungen in Deutschland, insbesondere das
            Bundesdatenschutzgesetz (BDSG).
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Sicherheitsmaßnahmen */}
        <Section title="Sicherheitsmaßnahmen">
          <p>
            Wir treffen nach Maßgabe der gesetzlichen Vorgaben geeignete technische und organisatorische
            Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten. Dazu gehören die
            Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten.
          </p>
          <Card>
            <p className="font-semibold text-white">TLS-/SSL-Verschlüsselung (HTTPS)</p>
            <p className="mt-1">
              Unser Onlineangebot ist durch ein SSL-/TLS-Zertifikat gesichert. Alle Datenübertragungen
              zwischen Ihrem Browser und unserem Server werden verschlüsselt. Dies wird durch das
              HTTPS-Protokoll in der URL signalisiert.
            </p>
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Datenspeicherung */}
        <Section title="Allgemeine Informationen zur Datenspeicherung und Löschung">
          <p>
            Wir löschen personenbezogene Daten, sobald die zugrundeliegenden Einwilligungen widerrufen
            werden oder keine weiteren rechtlichen Grundlagen für die Verarbeitung bestehen. Ausnahmen
            gelten, wenn gesetzliche Pflichten eine längere Aufbewahrung erfordern.
          </p>
          <Card>
            <p className="font-semibold text-white mb-3">Gesetzliche Aufbewahrungsfristen (deutsches Recht)</p>
            <ul className="space-y-2">
              <li><span className="text-[#C9963B] font-semibold">10 Jahre</span> — Bücher, Aufzeichnungen, Jahresabschlüsse (§ 147 AO, § 257 HGB)</li>
              <li><span className="text-[#C9963B] font-semibold">8 Jahre</span> — Buchungsbelege, Rechnungen, Kostenbelege (§ 147 AO, § 257 HGB)</li>
              <li><span className="text-[#C9963B] font-semibold">6 Jahre</span> — Übrige Geschäftsunterlagen, Handels- und Geschäftsbriefe (§ 147 AO, § 257 HGB)</li>
              <li><span className="text-[#C9963B] font-semibold">3 Jahre</span> — Daten zur Geltendmachung von Ansprüchen (§§ 195, 199 BGB – reguläre Verjährungsfrist)</li>
            </ul>
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Rechte der Betroffenen */}
        <Section title="Rechte der betroffenen Personen">
          <p>
            Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich aus Art. 15 bis
            21 DSGVO ergeben:
          </p>
          <Card>
            <ul className="space-y-3">
              {[
                ["Widerspruchsrecht", "Sie haben das Recht, aus Gründen Ihrer besonderen Situation jederzeit gegen die Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen, soweit diese auf Art. 6 Abs. 1 lit. e oder f DSGVO beruht."],
                ["Widerrufsrecht bei Einwilligungen", "Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen."],
                ["Auskunftsrecht", "Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden, und auf Auskunft über diese Daten sowie auf eine Kopie."],
                ["Recht auf Berichtigung", "Sie haben das Recht, die Vervollständigung oder Berichtigung der Sie betreffenden unrichtigen Daten zu verlangen."],
                ["Recht auf Löschung und Einschränkung", "Sie haben das Recht zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht werden, oder alternativ eine Einschränkung der Verarbeitung zu verlangen."],
                ["Recht auf Datenübertragbarkeit", "Sie haben das Recht, Sie betreffende Daten in einem strukturierten, maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen Verantwortlichen zu fordern."],
                ["Beschwerderecht", "Sie haben das Recht auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes."],
              ].map(([right, desc]) => (
                <li key={right}>
                  <span className="text-white font-medium">{right}</span>
                  <p className="mt-0.5">{desc}</p>
                </li>
              ))}
            </ul>
          </Card>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
            <a href="mailto:info@skylinesites.de" className="text-[#C9963B] hover:underline">
              info@skylinesites.de
            </a>
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Geschäftliche Leistungen */}
        <Section title="Geschäftliche Leistungen">
          <p>
            Wir verarbeiten personenbezogene Daten unserer Vertrags- und Geschäftspartner (Kunden,
            Auftraggeber, Interessenten) zur Anbahnung, Durchführung und Abwicklung von
            Vertragsverhältnissen sowie vergleichbaren Rechtsverhältnissen. Dies umfasst vorvertragliche
            Maßnahmen und die Kommunikation im Zusammenhang mit dem jeweiligen Vertragsverhältnis.
          </p>
          <p>
            Verarbeitet werden insbesondere Stammdaten wie Name und Kontaktdaten, Vertrags- und
            Leistungsdaten, Zahlungsdaten sowie Kommunikationsinhalte.
          </p>
          <Card>
            <MetaRow label="Verarbeitete Datenarten" value="Bestandsdaten, Zahlungsdaten, Kontaktdaten, Vertragsdaten, Inhaltsdaten" />
            <MetaRow label="Betroffene Personen" value="Leistungsempfänger, Auftraggeber, Interessenten, Geschäfts- und Vertragspartner" />
            <MetaRow label="Zwecke" value="Erbringung vertraglicher Leistungen, Kommunikation, Büro- und Organisationsverfahren" />
            <MetaRow label="Aufbewahrung" value="Entsprechend gesetzlicher Aufbewahrungsfristen (siehe oben)" />
            <MetaRow label="Rechtsgrundlagen" value="Art. 6 Abs. 1 lit. b) DSGVO (Vertragserfüllung), Art. 6 Abs. 1 lit. c) DSGVO (Rechtliche Verpflichtung), Art. 6 Abs. 1 lit. f) DSGVO (Berechtigte Interessen)" />
          </Card>
          <p>
            Agenturdienstleistungen: Wir verarbeiten die Daten unserer Kunden im Rahmen unserer
            vertraglichen Leistungen, zu denen konzeptionelle und strategische Beratung,
            Webdesign und -entwicklung, SEO sowie verwandte Dienstleistungen gehören können.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Webhosting */}
        <Section title="Bereitstellung des Onlineangebots und Webhosting">
          <p>
            Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen
            zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist,
            um die Inhalte unserer Online-Dienste an den Browser oder das Endgerät des Nutzers zu
            übermitteln.
          </p>
          <Card>
            <p className="font-semibold text-white mb-2">Hostinger</p>
            <p>
              Für die Bereitstellung unseres Onlineangebotes nutzen wir Speicherplatz und
              Rechenkapazität des Hosting-Anbieters Hostinger.
            </p>
            <div className="mt-3 space-y-1">
              <MetaRow label="Dienstanbieter" value="Hostinger International Ltd., 61 Lordou Vironos Street, 6023 Larnaca, Zypern" />
              <MetaRow label="Website" value="https://www.hostinger.de" />
              <MetaRow
                label="Datenschutzerklärung"
                value="https://www.hostinger.com/privacy-policy"
              />
              <MetaRow label="Rechtsgrundlage" value="Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)" />
            </div>
          </Card>
          <Card>
            <p className="font-semibold text-white mb-2">Erhebung von Zugriffsdaten und Logfiles</p>
            <p>
              Der Zugriff auf unser Onlineangebot wird in Form von Server-Logfiles protokolliert.
              Hierzu gehören Adresse und Name der abgerufenen Seiten, Datum und Uhrzeit, übertragene
              Datenmengen, Browsertyp und -version, Betriebssystem, Referrer URL sowie IP-Adressen.
              Logfile-Informationen werden für die Dauer von maximal 30 Tagen gespeichert und danach
              gelöscht oder anonymisiert.
            </p>
            <MetaRow label="Rechtsgrundlage" value="Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)" />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Kontaktformular */}
        <Section title="Kontakt- und Anfrageverwaltung">
          <p>
            Bei der Kontaktaufnahme mit uns (z. B. per Kontaktformular oder E-Mail) werden die Angaben
            der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und
            etwaiger angefragter Maßnahmen erforderlich ist.
          </p>
          <Card>
            <p className="font-semibold text-white mb-2">Kontaktformular</p>
            <p>
              Bei Kontaktaufnahme über unser Kontaktformular verarbeiten wir die übermittelten
              personenbezogenen Daten (Name, E-Mail-Adresse, Telefonnummer, gewünschte Leistung,
              Nachricht) zur Beantwortung und Bearbeitung Ihres Anliegens. Die Daten werden
              ausschließlich für den angegebenen Zweck der Kontaktaufnahme genutzt und nicht an
              Dritte weitergegeben. Es erfolgt keine Speicherung in einer Datenbank; die Daten werden
              ausschließlich per E-Mail an uns weitergeleitet.
            </p>
            <div className="mt-3 space-y-1">
              <MetaRow label="Verarbeitete Daten" value="Name, E-Mail-Adresse, Telefonnummer (optional), Leistungsauswahl, Nachricht" />
              <MetaRow label="Zweck" value="Beantwortung von Anfragen, vorvertragliche Kommunikation" />
              <MetaRow label="Speicherung" value="Bis zur Erledigung der Anfrage, danach nach gesetzlichen Fristen" />
              <MetaRow label="Rechtsgrundlagen" value="Art. 6 Abs. 1 lit. b) DSGVO, Art. 6 Abs. 1 lit. f) DSGVO" />
            </div>
          </Card>
          <p>
            Sie können uns jederzeit per E-Mail an{" "}
            <a href="mailto:info@skylinesites.de" className="text-[#C9963B] hover:underline">
              info@skylinesites.de
            </a>{" "}
            kontaktieren, um Auskunft über die zu Ihrer Person gespeicherten Daten zu erhalten oder
            deren Löschung zu beantragen.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Werbliche Kommunikation */}
        <Section title="Werbliche Kommunikation via E-Mail">
          <p>
            Wir verarbeiten personenbezogene Daten zu Zwecken der werblichen Kommunikation entsprechend
            den gesetzlichen Vorgaben. Die Empfänger haben das Recht, erteilte Einwilligungen jederzeit
            zu widerrufen oder der werblichen Kommunikation jederzeit kostenlos zu widersprechen.
          </p>
          <Card>
            <MetaRow label="Verarbeitete Daten" value="Bestandsdaten, Kontaktdaten" />
            <MetaRow label="Betroffene Personen" value="Kommunikationspartner" />
            <MetaRow label="Zweck" value="Direktmarketing, Absatzförderung" />
            <MetaRow label="Rechtsgrundlagen" value="Art. 6 Abs. 1 lit. a) DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f) DSGVO (Berechtigte Interessen)" />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Webanalyse / Google Analytics */}
        <Section title="Webanalyse, Monitoring und Optimierung">
          <p>
            Die Webanalyse dient der Auswertung der Besucherströme unseres Onlineangebots und kann
            Verhalten, Interessen oder demografische Informationen zu den Besuchern als pseudonyme Werte
            umfassen. IP-Adressen der Nutzer werden durch IP-Masking-Verfahren pseudonymisiert. Es werden
            keine Klardaten der Nutzer (wie E-Mail-Adressen oder Namen) gespeichert.
          </p>
          <Card>
            <MetaRow label="Verarbeitete Daten" value="Nutzungsdaten, Meta- und Protokolldaten" />
            <MetaRow label="Betroffene Personen" value="Nutzer (Webseitenbesucher)" />
            <MetaRow label="Zwecke" value="Reichweitenmessung, Nutzungsprofile, Verbesserung des Onlineangebots" />
            <MetaRow label="Aufbewahrung" value="Cookies bis zu 2 Jahren; Löschung entsprechend Abschnitt Datenspeicherung" />
            <MetaRow label="Sicherheitsmaßnahmen" value="IP-Masking (Pseudonymisierung der IP-Adresse)" />
            <MetaRow label="Rechtsgrundlagen" value="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)" />
          </Card>
          <Card>
            <p className="font-semibold text-white mb-2">Google Analytics</p>
            <p>
              Wir verwenden Google Analytics zur Messung und Analyse der Nutzung unseres Onlineangebotes
              auf der Grundlage einer pseudonymen Nutzeridentifikationsnummer. Diese Identifikationsnummer
              enthält keine eindeutigen Daten wie Namen oder E-Mail-Adressen. Sie dient dazu,
              Analyseinformationen einem Endgerät zuzuordnen, um zu erkennen, welche Inhalte die Nutzer
              aufgerufen haben, welche Suchbegriffe sie verwendet haben und wie sie mit unserem Angebot
              interagiert haben. Google Analytics protokolliert und speichert keine individuellen
              IP-Adressen für EU-Nutzer. Beim EU-Datenverkehr werden alle IP-Abfragen auf EU-basierten
              Servern durchgeführt, bevor der Verkehr zur Verarbeitung an Analytics-Server weitergeleitet
              wird.
            </p>
            <div className="mt-3 space-y-1">
              <MetaRow label="Dienstanbieter" value="Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland" />
              <MetaRow label="Rechtsgrundlage" value="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)" />
              <MetaRow label="Sicherheitsmaßnahmen" value="IP-Masking" />
              <MetaRow label="Drittlandtransfer" value="Data Privacy Framework (DPF), Standardvertragsklauseln" />
            </div>
            <div className="mt-3 space-y-1 text-xs">
              <p>
                Website:{" "}
                <a href="https://marketingplatform.google.com/intl/de/about/analytics/" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline break-all">
                  https://marketingplatform.google.com/intl/de/about/analytics/
                </a>
              </p>
              <p>
                Datenschutzerklärung:{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline">
                  https://policies.google.com/privacy
                </a>
              </p>
              <p>
                Opt-Out-Plugin:{" "}
                <a href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline break-all">
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
              </p>
              <p>
                Werbepersonalisierung deaktivieren:{" "}
                <a href="https://myadcenter.google.com/personalizationoff" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline break-all">
                  https://myadcenter.google.com/personalizationoff
                </a>
              </p>
            </div>
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Onlinemarketing */}
        <Section title="Onlinemarketing">
          <p>
            Wir verarbeiten personenbezogene Daten zum Zweck des Onlinemarketings, worunter insbesondere
            die Darstellung werbender Inhalte anhand potenzieller Interessen der Nutzer sowie die Messung
            ihrer Effektivität fallen. Zu diesen Zwecken werden Nutzerprofile angelegt und in Cookies
            oder ähnlichen Verfahren gespeichert. IP-Adressen werden durch IP-Masking-Verfahren
            pseudonymisiert; Klardaten der Nutzer werden nicht gespeichert.
          </p>
          <p>
            <span className="text-white font-medium">Widerspruch (Opt-Out):</span> Sofern keine explizite
            Opt-Out-Möglichkeit beim jeweiligen Anbieter angegeben ist, können Sie Cookies in den
            Browser-Einstellungen deaktivieren. Zusätzlich empfehlen wir folgende Opt-Out-Möglichkeiten:
          </p>
          <Card>
            <ul className="space-y-1.5">
              <li>
                <span className="text-zinc-300">Europa:</span>{" "}
                <a href="https://www.youronlinechoices.eu" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline">
                  https://www.youronlinechoices.eu
                </a>
              </li>
              <li>
                <span className="text-zinc-300">Kanada:</span>{" "}
                <a href="https://youradchoices.ca/" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline">
                  https://youradchoices.ca/
                </a>
              </li>
              <li>
                <span className="text-zinc-300">USA:</span>{" "}
                <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline">
                  https://optout.aboutads.info/
                </a>
              </li>
              <li>
                <span className="text-zinc-300">Gebietsübergreifend:</span>{" "}
                <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-[#C9963B] hover:underline">
                  https://optout.aboutads.info
                </a>
              </li>
            </ul>
            <div className="mt-3 space-y-1">
              <MetaRow label="Verarbeitete Daten" value="Nutzungsdaten, Meta- und Verfahrensdaten" />
              <MetaRow label="Zwecke" value="Reichweitenmessung, Tracking, Zielgruppenbildung, Marketing" />
              <MetaRow label="Aufbewahrung" value="Cookies bis zu 2 Jahren" />
              <MetaRow label="Sicherheitsmaßnahmen" value="IP-Masking" />
            </div>
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Kundenrezensionen */}
        <Section title="Kundenrezensionen und Bewertungsverfahren">
          <p>
            Wir nehmen an Rezensions- und Bewertungsverfahren teil, um unsere Leistungen zu evaluieren,
            zu optimieren und zu bewerben. Um sicherzustellen, dass die bewertenden Personen tatsächlich
            unsere Leistungen in Anspruch genommen haben, übermitteln wir mit Einwilligung der Kunden
            die erforderlichen Daten (Name, E-Mail-Adresse) an die jeweilige Bewertungsplattform.
            Diese Daten werden ausschließlich zur Verifizierung der Authentizität des Nutzers verwendet.
          </p>
          <Card>
            <MetaRow label="Verarbeitete Daten" value="Vertragsdaten, Nutzungsdaten, Meta- und Verfahrensdaten" />
            <MetaRow label="Betroffene Personen" value="Leistungsempfänger, Auftraggeber, Nutzer" />
            <MetaRow label="Zwecke" value="Feedback, Marketing" />
            <MetaRow label="Rechtsgrundlagen" value="Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)" />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Social Media */}
        <Section title="Präsenzen in sozialen Netzwerken (Social Media)">
          <p>
            Wir unterhalten Onlinepräsenzen innerhalb sozialer Netzwerke und verarbeiten in diesem Rahmen
            Nutzerdaten, um mit den dort aktiven Nutzern zu kommunizieren oder Informationen über uns
            anzubieten. Dabei können Nutzerdaten außerhalb des Raumes der Europäischen Union verarbeitet
            werden, was die Durchsetzung von Nutzerrechten erschweren kann.
          </p>
          <p>
            Innerhalb sozialer Netzwerke werden Nutzerdaten im Regelfall für Marktforschungs- und
            Werbezwecke verarbeitet. Für eine detaillierte Darstellung verweisen wir auf die
            Datenschutzerklärungen der jeweiligen Netzwerke. Bei Auskunftsanfragen und der Geltendmachung
            von Betroffenenrechten empfehlen wir, sich direkt an die Anbieter zu wenden.
          </p>
          <Card>
            <MetaRow label="Verarbeitete Daten" value="Kontaktdaten, Inhaltsdaten, Nutzungsdaten" />
            <MetaRow label="Betroffene Personen" value="Nutzer (Webseitenbesucher, Nutzer von Onlinediensten)" />
            <MetaRow label="Zwecke" value="Kommunikation, Feedback, Öffentlichkeitsarbeit" />
            <MetaRow label="Aufbewahrung" value="Entsprechend Abschnitt Datenspeicherung und Löschung" />
            <MetaRow label="Rechtsgrundlagen" value="Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)" />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Plug-ins */}
        <Section title="Plug-ins und eingebettete Funktionen sowie Inhalte">
          <p>
            Wir binden Funktions- und Inhaltselemente in unser Onlineangebot ein, die von den Servern
            ihrer jeweiligen Anbieter (Drittanbieter) bezogen werden. Die Einbindung setzt voraus, dass
            die Drittanbieter die IP-Adresse der Nutzer verarbeiten, da sie ohne IP-Adresse die Inhalte
            nicht an deren Browser senden könnten. Wir bemühen uns, nur solche Inhalte zu verwenden,
            deren jeweilige Anbieter die IP-Adresse lediglich zur Auslieferung der Inhalte verwenden.
          </p>
          <Card>
            <MetaRow label="Verarbeitete Daten" value="Nutzungsdaten, Meta- und Verfahrensdaten" />
            <MetaRow label="Betroffene Personen" value="Nutzer (Webseitenbesucher)" />
            <MetaRow label="Zwecke" value="Bereitstellung des Onlineangebotes und Nutzerfreundlichkeit" />
            <MetaRow label="Aufbewahrung" value="Cookies bis zu 2 Jahren; Löschung entsprechend Abschnitt Datenspeicherung" />
            <MetaRow label="Rechtsgrundlagen" value="Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 lit. f DSGVO)" />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Änderung und Aktualisierung */}
        <Section title="Änderung und Aktualisierung">
          <p>
            Wir bitten Sie, sich regelmäßig über den Inhalt unserer Datenschutzerklärung zu informieren.
            Wir passen die Datenschutzerklärung an, sobald die Änderungen der von uns durchgeführten
            Datenverarbeitungen dies erforderlich machen. Wir informieren Sie, sobald durch die Änderungen
            eine Mitwirkungshandlung Ihrerseits (z. B. Einwilligung) oder eine sonstige individuelle
            Benachrichtigung erforderlich wird.
          </p>
          <p>
            Sofern wir in dieser Datenschutzerklärung Adressen und Kontaktinformationen von Unternehmen
            und Organisationen angeben, bitten wir zu beachten, dass die Adressen sich über die Zeit
            ändern können und bitten die Angaben vor Kontaktaufnahme zu prüfen.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        {/* Begriffsdefinitionen */}
        <Section title="Begriffsdefinitionen">
          <p>
            In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung
            verwendeten Begrifflichkeiten.
          </p>
          <div className="space-y-4">
            {[
              ["Bestandsdaten", "Informationen, die für die Identifikation und Verwaltung von Vertragspartnern, Benutzerkonten oder Profilen notwendig sind, z. B. Namen, Kontaktinformationen, Kundennummern."],
              ["Inhaltsdaten", "Informationen, die im Zuge der Erstellung, Bearbeitung und Veröffentlichung von Inhalten aller Art generiert werden, z. B. Texte, Bilder, Videos sowie zugehörige Metadaten."],
              ["Kontaktdaten", "Informationen, die die Kommunikation mit Personen oder Organisationen ermöglichen, z. B. Telefonnummern, Adressen, E-Mail-Adressen, Social-Media-Handles."],
              ["Meta-, Kommunikations- und Verfahrensdaten", "Informationen über die Art und Weise, wie Daten verarbeitet, übermittelt und verwaltet werden, z. B. IP-Adressen, Zeitstempel, Identifikationsnummern, Übertragungswege."],
              ["Nutzungsdaten", "Informationen, die erfassen, wie Nutzer mit digitalen Produkten interagieren, z. B. Seitenaufrufe, Verweildauer, Klickpfade, Geräteinformationen, IP-Adressen."],
              ["Personenbezogene Daten", "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen, einschließlich Namen, Kennummern, Standortdaten oder Online-Kennungen (Art. 4 Nr. 1 DSGVO)."],
              ["Profile mit nutzerbezogenen Informationen", "Automatisierte Verarbeitung personenbezogener Daten zur Analyse oder Vorhersage bestimmter persönlicher Aspekte (Profiling), z. B. Interessen, Klickverhalten, Standortinformationen."],
              ["Protokolldaten", "Informationen über Ereignisse oder Aktivitäten, die in einem System protokolliert wurden, z. B. Zeitstempel, IP-Adressen, Benutzeraktionen, Fehlermeldungen."],
              ["Reichweitenmessung", "Auswertung der Besucherströme eines Onlineangebotes (Web Analytics), z. B. Zugriffsstatistiken, Erkennung wiederkehrender Besucher, Analyse von Inhaltspräferenzen."],
              ["Tracking", "Nachvollziehen des Verhaltens von Nutzern über mehrere Onlineangebote hinweg, z. B. durch Cookies oder serverseitige Speicherung von Verhaltens- und Interessensinformationen."],
              ["Verantwortlicher", "Die natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet (Art. 4 Nr. 7 DSGVO)."],
              ["Verarbeitung", "Jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten, z. B. das Erheben, Auswerten, Speichern, Übermitteln oder Löschen (Art. 4 Nr. 2 DSGVO)."],
              ["Vertragsdaten", "Spezifische Informationen, die sich auf eine Vereinbarung zwischen Parteien beziehen, z. B. Vertragsgegenstand, Laufzeit, Zahlungskonditionen, Kündigungsrechte."],
              ["Zahlungsdaten", "Informationen zur Abwicklung von Zahlungstransaktionen, z. B. Bankverbindungen, Zahlungsbeträge, Transaktionsdaten, Rechnungsinformationen."],
              ["Zielgruppenbildung", "Bestimmung von Zielgruppen für Werbezwecke anhand von Nutzerprofilen, Interessen oder Verhalten (Custom Audiences / Lookalike Audiences), häufig mittels Cookies und Web-Beacons."],
            ].map(([term, def]) => (
              <div key={term} className="p-4 rounded-xl bg-[#18181b] border border-zinc-800">
                <p className="font-semibold text-white text-sm mb-1">{term}</p>
                <p className="text-zinc-400 text-sm leading-relaxed">{def}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <p className="text-xs text-zinc-600 text-center pb-4">
          Erstellt mit dem kostenlosen{" "}
          <a href="https://datenschutz-generator.de/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors">
            Datenschutz-Generator.de
          </a>{" "}
          von Dr. Thomas Schwenke
        </p>

      </div>
    </main>
  );
}
