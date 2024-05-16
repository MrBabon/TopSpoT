<?php
header('Content-Type: application/json');

function isEmail($var) {
    return filter_var($var, FILTER_VALIDATE_EMAIL);
}

function verifyInput($var) {
    return htmlspecialchars(stripslashes(trim($var)));
}

$array = array(
    "firstname" => isset($_POST["firstname"]) ? verifyInput($_POST["firstname"]) : "",
    "lastname" => isset($_POST["lastname"]) ? verifyInput($_POST["lastname"]) : "",
    "email" => isset($_POST["email"]) ? verifyInput($_POST["email"]) : "",
    "company" => isset($_POST["company"]) ? verifyInput($_POST["company"]) : "",
    "message" => isset($_POST["message"]) ? verifyInput($_POST["message"]) : "",
    "firstnameError" => "",
    "lastnameError" => "",
    "emailError" => "",
    "companyError" => "",
    "messageError" => "",
    "isSuccess" => true,
    "errorMessage" => "",
    "successMessage" => ""
);

$emailTo = "christophedanna06@gmail.com";
$emailText = "";
$fields = array("firstname", "lastname", "email", "company", "message");

foreach ($fields as $field) {
    if (empty($array[$field])) {
        $array[$field . "Error"] = "The $field field is mandatory";
        $array["isSuccess"] = false;
    } else {
        $emailText .= ucfirst($field) . ": {$array[$field]}\n";
    }
}

if (!isEmail($array["email"])) {
    $array["emailError"] = "Invalid email";
    $array["isSuccess"] = false;
}

if ($array["isSuccess"]) {
    $headers = "From: {$array["firstname"]} {$array["lastname"]} <{$array["email"]}>\r\n";
    $headers .= "Reply-To: {$array["email"]}\r\n";
    $headers .= "X-Originating-IP: {$_SERVER['REMOTE_ADDR']}\r\n";

    if (mail($emailTo, "Un message de votre site www.topspot.com", $emailText, $headers)) {
        $array["successMessage"] = 'Email sent successfully.';
    } else {
        $array["isSuccess"] = false;
        $array["errorMessage"] = 'Failed to send email.';
    }
} else {
    $array["errorMessage"] = 'Validation errors occurred.';
}

echo json_encode($array);
?>
