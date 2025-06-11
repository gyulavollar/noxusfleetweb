<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Címzett email címe
    $to = "sajat@emailcimed.hu"; // ← IDE írd be a saját címed!

    // Adatok begyűjtése és tisztítása
    $name = strip_tags(trim($_POST["name"]));
    $phone = strip_tags(trim($_POST["phone"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = strip_tags(trim($_POST["message"]));

    // Email tárgy és tartalom
    $subject = "Új üzenet a weboldalról - $name";
    $body = "Név: $name\n";
    $body .= "Telefonszám: $phone\n";
    $body .= "Email: $email\n\n";
    $body .= "Üzenet:\n$message\n";

    // Fejlécek
    $headers = "From: noreply@yourdomain.hu\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Email elküldése
    if (mail($to, $subject, $body, $headers)) {
        echo "Sikeresen elküldve!"; // Vagy redirect: header("Location: koszonom.html");
    } else {
        echo "Hiba történt az üzenet küldésekor. Kérlek, próbáld újra.";
    }
} else {
    // Ha nem POST kérés
    http_response_code(403);
    echo "Érvénytelen kérés.";
}
?>
