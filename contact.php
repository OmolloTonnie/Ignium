<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // --- 1. Sanitize & Validate Inputs ---
    $name = strip_tags(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$name || !$email || !$message) {
        die("Please fill in all fields correctly.");
    }

    // --- 2. Send Email ---
    $to = "igniumkenya@gmail.com"; // your email
    $subject = "New Message from Ignium Contact Form";
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send message. Try again later.";
    }

    // --- 3. Logging ---
    $logEntry = date('Y-m-d H:i:s') . " | $name | $email | $message\n";
    file_put_contents("messages.log", $logEntry, FILE_APPEND);
}
?>
