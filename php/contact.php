<?php
header('Content-Type: application/json');

$array = array(
    "firstname" => isset($_POST["firstname"]) ? verifyInput($_POST["firstname"]) : "",
    "lastname" => isset($_POST["lastname"]) ? verifyInput($_POST["lastname"]) : "",
    "email" => isset($_POST["email"]) ? verifyInput($_POST["email"]) : "",
    "company" => isset($_POST["company"]) ? verifyInput($_POST["company"]) : "",
    "message" => isset($_POST["message"]) ? verifyInput($_POST["message"]) : "",
    "firstnameError" => "",
    "lastnameError" => "",
    "emailError" => "",
    "messageError" => "",
    "isSuccess" => true
);

$emailTo = "info@topspot.com";
$emailText = "";
$fields = array("firstname", "lastname", "email", "message");
foreach ($fields as $field) {
    if (empty($array[$field])) {
        $array[$field . "Error"] = "Le champ $field est obligatoire";
        $array["isSuccess"] = false;
    } else {
        $emailText .= ucfirst($field) . ": {$array[$field]}\n";
    }
}

if ($array["isSuccess"]) {
    $headers = "From: {$array["firstname"]} {$array["lastname"]} <{$array["email"]}>\r\nReply-To: {$array["email"]}\r\nX-Originating-IP: {$_SERVER['REMOTE_ADDR']}";

    $formattedDate = date("d/m/Y", strtotime($array["date"]));

    $emailText = "Entreprise: {$array["company"]}\n";
    $emailText .= "Nom: {$array["lastname"]}\n";
    $emailText .= "Prénom: {$array["firstname"]}\n";
    $emailText .= "Email: {$array["email"]}\n";
    $emailText .= "Message du client: {$array["message"]}\n";

    mail($emailTo, "Un message de votre site www.dannacode.com", $emailText, $headers);
}

echo json_encode($array);


function isEmail($var)
{
    return filter_var($var, FILTER_VALIDATE_EMAIL);
}

function verifyInput($var)
{
    return htmlspecialchars(stripslashes(trim($var)));
}
?>
