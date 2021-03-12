<?php 

if (isset($_POST['submit'])){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "y.kuramae@hotmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "Você recebeu um e-mail de ".$name."\n\n".$message;

    mail($mailTo, $txt, $headers);
    header("Location: index.php?mailsend");

}