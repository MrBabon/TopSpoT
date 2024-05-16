<?php
$to = 'christophedanna06@gmail.com'; // Remplacez par votre adresse email
$subject = 'Test Email';
$message = 'This is a test email to check the mail functionality.';
$headers = 'From: no-reply@example.com' . "\r\n" .
           'Reply-To: no-reply@example.com' . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo 'Email sent successfully.';
} else {
    echo 'Failed to send email.';
}
?>
