<?php
header("Access-Control-Allow-Origin: https://www.skylinesites.de");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    echo json_encode(["success" => false]);
    exit;
}

$data    = json_decode(file_get_contents("php://input"), true);
$name    = htmlspecialchars(strip_tags(trim($data["name"]    ?? "")));
$email   = filter_var(trim($data["email"]   ?? ""), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(strip_tags(trim($data["phone"]   ?? "")));
$service = htmlspecialchars(strip_tags(trim($data["service"] ?? "")));
$message = htmlspecialchars(strip_tags(trim($data["message"] ?? "")));

if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false]);
    exit;
}

// ── 1. Interne Benachrichtigung an info@skylinesites.de ──────────────────────

$internal_subject = "=?UTF-8?B?" . base64_encode("Neue Kontaktanfrage von $name") . "?=";
$internal_body    = "Name:     $name\nE-Mail:   $email\nTelefon:  " . ($phone ?: "—") . "\nLeistung: " . ($service ?: "—") . "\n\nNachricht:\n$message\n";
$internal_headers = implode("\r\n", [
    "From: Skyline Sites <info@skylinesites.de>",
    "Reply-To: $name <$email>",
    "Content-Type: text/plain; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion(),
]);

mail("info@skylinesites.de", $internal_subject, $internal_body, $internal_headers);

// ── 2. Automatische Bestätigung an den Kunden ────────────────────────────────

$confirm_subject = "=?UTF-8?B?" . base64_encode("Vielen Dank für Ihre Anfrage bei Skyline Sites") . "?=";

$confirm_body = '<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#09090b;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#09090b;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#18181b;border-radius:16px;overflow:hidden;border:1px solid #27272a;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e1a10,#18181b);padding:40px 40px 32px;text-align:center;border-bottom:1px solid #27272a;">
              <p style="margin:0 0 6px;font-size:22px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                Skyline<span style="color:#C9963B;">Sites</span>
              </p>
              <p style="margin:0;font-size:11px;color:#71717a;letter-spacing:2px;text-transform:uppercase;">Web Design Agentur</p>
            </td>
          </tr>

          <!-- Gold accent line -->
          <tr>
            <td style="height:3px;background:linear-gradient(90deg,#C9963B,#E8B84B,#C9963B);"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">

              <p style="margin:0 0 20px;font-size:16px;color:#ffffff;font-weight:600;">
                Hallo ' . $name . ',
              </p>

              <p style="margin:0 0 18px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                vielen Dank für Ihre Anfrage und Ihr Interesse an Skyline Sites.
              </p>

              <p style="margin:0 0 18px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                Wir haben Ihre Nachricht erfolgreich erhalten und werden uns zeitnah persönlich bei Ihnen zurückmelden, um die nächsten Schritte gemeinsam zu besprechen.
              </p>

              <p style="margin:0 0 28px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                Je mehr Informationen wir vorab über Ihr Projekt haben, desto gezielter können wir Sie beraten. Falls Sie bereits Vorstellungen, Wünsche oder Beispiele haben, können Sie uns diese jederzeit per E-Mail zukommen lassen.
              </p>

              <!-- Next steps box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
                <tr>
                  <td style="background-color:#1c1c1f;border:1px solid #27272a;border-left:3px solid #C9963B;border-radius:8px;padding:24px;">
                    <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:1.5px;">Wie geht es jetzt weiter?</p>
                    <p style="margin:0 0 10px;font-size:14px;color:#a1a1aa;line-height:1.6;">
                      <span style="color:#C9963B;font-weight:700;">✔</span>&nbsp; Wir prüfen Ihre Anfrage sorgfältig
                    </p>
                    <p style="margin:0 0 10px;font-size:14px;color:#a1a1aa;line-height:1.6;">
                      <span style="color:#C9963B;font-weight:700;">✔</span>&nbsp; Wir melden uns persönlich bei Ihnen zurück
                    </p>
                    <p style="margin:0 0 10px;font-size:14px;color:#a1a1aa;line-height:1.6;">
                      <span style="color:#C9963B;font-weight:700;">✔</span>&nbsp; Gemeinsam besprechen wir Ihre Ziele und Anforderungen
                    </p>
                    <p style="margin:0;font-size:14px;color:#a1a1aa;line-height:1.6;">
                      <span style="color:#C9963B;font-weight:700;">✔</span>&nbsp; Anschließend erhalten Sie ein individuelles Angebot
                    </p>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 18px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                Unser Ziel ist es, eine Website zu entwickeln, die nicht nur modern aussieht, sondern Ihr Unternehmen professionell präsentiert und langfristig unterstützt.
              </p>

              <p style="margin:0 0 32px;font-size:15px;line-height:1.75;color:#a1a1aa;">
                Bei Fragen können Sie uns jederzeit direkt antworten.
              </p>

              <p style="margin:0;font-size:15px;color:#ffffff;line-height:1.8;">
                Beste Grüße<br>
                <strong style="color:#C9963B;">Skyline Sites</strong>
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#111113;padding:20px 40px;border-top:1px solid #27272a;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#52525b;">
                <a href="https://www.skylinesites.de" style="color:#C9963B;text-decoration:none;">www.skylinesites.de</a>
                &nbsp;·&nbsp;
                <a href="mailto:info@skylinesites.de" style="color:#C9963B;text-decoration:none;">info@skylinesites.de</a>
              </p>
              <p style="margin:0;font-size:11px;color:#3f3f46;">
                © 2025 Skyline Sites · Diese E-Mail wurde automatisch generiert.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>';

$confirm_headers = implode("\r\n", [
    "From: Skyline Sites <info@skylinesites.de>",
    "Reply-To: info@skylinesites.de",
    "MIME-Version: 1.0",
    "Content-Type: text/html; charset=UTF-8",
    "X-Mailer: PHP/" . phpversion(),
]);

$sent = mail($email, $confirm_subject, $confirm_body, $confirm_headers);

echo json_encode(["success" => $sent]);
?>
