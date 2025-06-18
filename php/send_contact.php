<!-- <?php
// send_contact.php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $message = trim($_POST['message'] ?? '');

    // Validation basique
    if (empty($name) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo "Merci de remplir correctement tous les champs.";
        exit;
    }

    // Prépare le mail
    $to = "tonemail@example.com"; // <-- à modifier
    $subject = "Nouveau message depuis le formulaire de contact";
    $body = "Nom: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Envoi du mail
    if (mail($to, $subject, $body, $headers)) {
        // Rediriger ou afficher un message de succès
        header("Location: /pages/contact.html?success=1");
        exit;
    } else {
        http_response_code(500);
        echo "Une erreur est survenue lors de l’envoi.";
        exit;
    }
} else {
    http_response_code(405);
    echo "Méthode non autorisée.";
}
 -->