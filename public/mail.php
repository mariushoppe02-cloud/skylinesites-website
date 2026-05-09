<?php
header("Access-Control-Allow-Origin: https://www.skylinesites.de");
header("Content-Type: application/json; charset=UTF-8");
if ($_SERVER["REQUEST_METHOD"] !== "POST") { http_response_code(405); echo json_encode(["success"=>false]); exit; }
$data = json_decode(file_get_contents("php://input"), true);
$name    = htmlspecialchars(strip_tags(trim($data["name"] ?? "")));
$email   = filter_var(trim($data["email"] ?? ""), FILTER_SANITIZE_EMAIL);
$phone   = htmlspecialchars(strip_tags(trim($data["phone"] ?? "")));
$service = htmlspecialchars(strip_tags(trim($data["service"] ?? "")));
$message = htmlspecialchars(strip_tags(trim($data["message"] ?? "")));
if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) { http_response_code(400); echo json_encode(["success"=>false]); exit; }
$to = "info@skylinesites.de";
$subject = "Neue Kontaktanfrage von $name";
$body  = "Name:     $name\nE-Mail:   $email\nTelefon:  ".($phone?:"—")."\nLeistung: ".($service?:"—")."\n\nNachricht:\n$message\n";
$headers = "From: noreply@skylinesites.de\r\nReply-To: $email\r\nX-Mailer: PHP/".phpversion();
$sent = mail($to, $subject, $body, $headers);
echo json_encode(["success"=>$sent]);
?>
