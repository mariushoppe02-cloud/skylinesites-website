import { setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

function Section({ num, title, children }: { num: number; title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-3">
      <div className="flex items-baseline gap-3">
        <span className="text-[#C9963B] font-extrabold font-[var(--font-jakarta)] text-lg tabular-nums">
          {String(num).padStart(2, "0")}
        </span>
        <h2 className="text-lg font-bold text-white font-[var(--font-jakarta)]">{title}</h2>
      </div>
      <div className="pl-9 text-zinc-400 text-sm leading-relaxed space-y-3">{children}</div>
    </section>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-2">
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2">
          <span className="text-[#C9963B] mt-0.5 shrink-0">✦</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function AgbPage({ params }: { params: Promise<{ locale: string }> }) {
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
          <h1 className="text-4xl font-extrabold font-[var(--font-jakarta)] text-white mb-3">
            Allgemeine Geschäftsbedingungen
          </h1>
          <div className="h-1 w-16 bg-gradient-to-r from-[#C9963B] to-[#E8B84B] rounded" />
          <p className="text-zinc-500 text-sm mt-4">
            Skyline Sites — HAM Handelsgesellschaft GbR
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">

        <Section num={1} title="Geltungsbereich">
          <p>
            Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen{" "}
            <span className="text-white font-medium">
              Skyline Sites (HAM Handelsgesellschaft GbR, vertreten durch Marius Hoppe, Hamsa Sarwari
              und Ayan Mubarak, Offenbacherstraße 14, 63303 Dreieich)
            </span>{" "}
            — nachfolgend <span className="text-white font-semibold">Anbieter</span> — und dem
            jeweiligen Kunden — nachfolgend <span className="text-white font-semibold">Kunde</span> —
            über die Erstellung und Betreuung von Websites sowie damit verbundene Dienstleistungen.
          </p>
          <p>
            Abweichende Bedingungen des Kunden werden nicht anerkannt, sofern nicht ausdrücklich
            schriftlich vereinbart.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={2} title="Leistungen">
          <p>
            Der Anbieter erbringt Dienstleistungen im Bereich Webdesign und Online-Präsenz,
            insbesondere:
          </p>
          <Card>
            <List items={[
              "Erstellung von Onepager- und mehrseitigen Websites (Konzeption, Design und technische Umsetzung)",
              "Einrichtung von Domain, Hosting und E-Mail",
              "Integration von Formularen und Funktionen",
              "SEO-Grundoptimierung",
              "Optionale Zusatzleistungen (z. B. Texte, Bilder, Logo, Mehrsprachigkeit)",
            ]} />
          </Card>
          <p>
            Der genaue Leistungsumfang ergibt sich ausschließlich aus dem individuell vereinbarten
            Angebot.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={3} title="Vertragsschluss">
          <p>Ein Vertrag kommt zustande, sobald:</p>
          <Card>
            <List items={[
              "der Kunde ein Angebot annimmt, oder",
              "eine Projekt-Checkliste bestätigt wird, oder",
              "eine schriftliche oder elektronische Beauftragung erfolgt.",
            ]} />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={4} title="Preise und Zahlungsbedingungen">
          <p>
            Alle Preise verstehen sich gemäß <span className="text-white">§ 19 UStG
            (Kleinunternehmerregelung)</span> ohne Ausweis der Umsatzsteuer.
          </p>
          <Card>
            <p className="text-white font-semibold mb-2">Zahlungsstruktur</p>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 rounded-xl bg-[#09090b] border border-zinc-800 text-center">
                <p className="text-2xl font-extrabold text-[#C9963B] font-[var(--font-jakarta)]">50 %</p>
                <p className="text-xs text-zinc-400 mt-1">Anzahlung bei Projektstart</p>
              </div>
              <div className="p-3 rounded-xl bg-[#09090b] border border-zinc-800 text-center">
                <p className="text-2xl font-extrabold text-[#C9963B] font-[var(--font-jakarta)]">50 %</p>
                <p className="text-xs text-zinc-400 mt-1">Restzahlung vor Veröffentlichung</p>
              </div>
            </div>
          </Card>
          <List items={[
            "Zusatzleistungen und Erweiterungen werden gesondert berechnet.",
            "Der Anbieter behält sich vor, Leistungen erst nach Zahlungseingang zu erbringen.",
          ]} />
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={5} title="Mitwirkungspflichten des Kunden">
          <p>
            Der Kunde verpflichtet sich, alle zur Umsetzung notwendigen Inhalte rechtzeitig
            bereitzustellen:
          </p>
          <Card>
            <List items={[
              "Texte, Bilder und Medien",
              "Zugangsdaten",
              "Rechtliche Inhalte (Impressum, Datenschutz etc.)",
            ]} />
          </Card>
          <p>
            Verzögerungen durch fehlende Mitwirkung des Kunden verlängern automatisch die
            Projektlaufzeit.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={6} title="Korrekturen und Änderungswünsche">
          <p>
            Im Angebot sind bis zu{" "}
            <span className="text-white font-semibold">2 Korrekturschleifen pro Projektphase</span>{" "}
            enthalten. Kleinere Anpassungen innerhalb dieser Korrekturen sind selbstverständlich möglich.
          </p>
          <p>
            Darüber hinausgehende Änderungen oder zusätzliche Korrekturschleifen werden nach Aufwand
            gesondert berechnet.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={7} title="Fertigstellung und Abnahme">
          <p>
            Nach Fertigstellung wird dem Kunden die Website zur Abnahme bereitgestellt.
          </p>
          <Card>
            <p>
              Erfolgt innerhalb von{" "}
              <span className="text-white font-semibold">7 Tagen</span>{" "}
              keine Rückmeldung, gilt die Leistung als abgenommen.
            </p>
          </Card>
          <p>
            Nach Abnahme gelten weitere Änderungen als neue kostenpflichtige Leistungen.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={8} title="Hosting, Domain und laufende Kosten">
          <List items={[
            "Der Anbieter kann Hosting, Domain und E-Mail einrichten und betreuen.",
            "Laufende Kosten (Hosting, Domain etc.) werden transparent kommuniziert.",
            "Alternativ kann der Kunde eigene Anbieter nutzen.",
          ]} />
          <p>
            Der Anbieter übernimmt keine Haftung für Ausfälle externer Hosting-Anbieter.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={9} title="Nutzungsrechte und Eigentum">
          <Card>
            <p>
              Die vollständigen Nutzungsrechte gehen erst nach{" "}
              <span className="text-white font-semibold">vollständiger Bezahlung</span>{" "}
              auf den Kunden über. Bis dahin verbleiben alle Rechte beim Anbieter.
            </p>
          </Card>
          <p>
            Der Anbieter ist berechtigt, das Projekt zu Referenzzwecken (z. B. Portfolio, Website)
            zu verwenden.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={10} title="Haftung">
          <p>
            Der Anbieter haftet ausschließlich für Schäden, die auf vorsätzlicher oder grob
            fahrlässiger Pflichtverletzung beruhen.
          </p>
          <p>Keine Haftung besteht für:</p>
          <Card>
            <List items={[
              "Inhalte des Kunden",
              "Rechtliche Fehler (z. B. Impressum, Datenschutz)",
              "Externe Tools, Plugins oder Drittanbieter",
              "SEO-Ergebnisse oder Ranking-Verbesserungen",
            ]} />
          </Card>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={11} title="Rechtliche Inhalte">
          <p>
            Der Kunde ist selbst verantwortlich für die rechtliche Korrektheit seiner Website,
            insbesondere für:
          </p>
          <Card>
            <List items={[
              "Impressum",
              "Datenschutzerklärung",
              "Cookie-Hinweise",
            ]} />
          </Card>
          <p>
            Der Anbieter übernimmt ausschließlich die technische Einbindung.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={12} title="SEO und Online-Sichtbarkeit">
          <p>
            SEO-Leistungen stellen eine Optimierung dar, jedoch{" "}
            <span className="text-white font-semibold">keine Garantie</span>{" "}
            für bestimmte Rankings oder Suchergebnisse.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={13} title="Projektabbruch / Kündigung">
          <p>Wird ein Projekt durch den Kunden abgebrochen:</p>
          <Card>
            <List items={[
              "Bereits erbrachte Leistungen werden anteilig berechnet.",
              "Die Anzahlung wird nicht zurückerstattet.",
            ]} />
          </Card>
          <p>
            Der Anbieter ist berechtigt, Projekte bei ausbleibender Mitwirkung oder Zahlungsverzug
            auszusetzen.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={14} title="Wartung und Updates">
          <p>
            Sofern keine separate Wartungsvereinbarung besteht, ist der Anbieter nach Übergabe
            der Website nicht verpflichtet, Updates oder Wartungen durchzuführen.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={15} title="Gewährleistung">
          <p>
            Der Anbieter gewährleistet die Funktionsfähigkeit der Website zum Zeitpunkt der Übergabe.
          </p>
          <p>
            Spätere Beeinträchtigungen durch Updates, Plugins oder Änderungen beim Hosting-Anbieter
            liegen außerhalb des Verantwortungsbereichs des Anbieters.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={16} title="Datenschutz">
          <p>
            Der Anbieter verarbeitet personenbezogene Daten ausschließlich im Rahmen der gesetzlichen
            Vorschriften. Weitere Informationen sind der{" "}
            <Link href={`/${locale}/datenschutz`} className="text-[#C9963B] hover:underline">
              Datenschutzerklärung
            </Link>{" "}
            zu entnehmen.
          </p>
        </Section>

        <div className="h-px bg-zinc-800/60" />

        <Section num={17} title="Schlussbestimmungen">
          <Card>
            <List items={[
              "Es gilt ausschließlich deutsches Recht.",
              "Gerichtsstand ist — soweit gesetzlich zulässig — der Sitz des Anbieters (Dreieich). Bei Streitigkeiten wird das nächstgelegene zuständige Amtsgericht herangezogen; dies ist das Amtsgericht Langen.",
              "Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt der Vertrag im Übrigen wirksam. Die unwirksame Bestimmung wird durch eine wirksame ersetzt, die dem wirtschaftlichen Zweck am nächsten kommt.",
            ]} />
          </Card>
        </Section>

        {/* Contact box */}
        <div className="mt-4 p-6 rounded-2xl border border-[#C9963B]/20 bg-[#C9963B]/5 text-center space-y-3">
          <p className="text-white font-semibold font-[var(--font-jakarta)]">Fragen zu diesen AGB?</p>
          <p className="text-zinc-400 text-sm">
            Wir stehen Ihnen gerne für Rückfragen zur Verfügung.
          </p>
          <a
            href="mailto:info@skylinesites.de"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-semibold text-sm bg-gradient-to-r from-[#C9963B] to-[#E8B84B] text-black hover:opacity-90 transition-all font-[var(--font-jakarta)]"
          >
            info@skylinesites.de
          </a>
        </div>

      </div>
    </main>
  );
}
