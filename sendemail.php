<?php
/*
    require_once('phpmailer/src/PHPMailer.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $name = $_POST['name'];
    $gmail = $_POST['gmail'];
    $subject = $_POST['subject'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mail->isSMTP();
    $mail->Host = 'smtp.mail.ru';  										
    $mail->SMTPAuth = true;
    $mail->Username = 'adam.esmurziev.job@mail.ru';
    $mail->Password = 'Esmurzelly006'; 
    $mail->SMTPSecure = 'ssl';          
    $mail->Port = 465; 

    $mail->setFrom('adam.esmurziev.job@mail.ru');
    $mail->addAddress('elephants54706@gmail.com'); 

    $mail->isHTML(true);  

    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body    = '' .$name . ' оставил заявку, его телефон ' .$phone. '<br>Почта этого пользователя: ' .$gmail;
    $mail->AltBody = '';

    if(!$mail->send()) {
        $message = "Error";
    } else {
        $message = "Your info are sent!!!";
    }
*/


    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->IsHTML(true);

    $mail->setFrom('elephants54706@gmail.com', "Adamchick :)")
    $mail->addAddress('adamsuper148@gmail.com');
    $mail->Subject = 'Hi everyone. This is my form!!!';

    $body = '<h1>Meet new Super Letter</h1>';

    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Name: </strong> '.$_POST['name']'</p>'
    }
    if(trim(!empty($_POST['gmail']))) {
        $body.='<p><strong>Email: </strong> '.$_POST['gmail']'</p>'
    }
    if(trim(!empty($_POST['subject']))) {
        $body.='<p><strong>Subject: </strong> '.$_POST['subject']'</p>'
    }
    if(trim(!empty($_POST['phone']))) {
        $body.='<p><strong>Phone: </strong> '.$_POST['phone']'</p>'
    }

    if(trim(!empty($_POST['message']))) {
        $body.='<p><strong>Message: </strong> '.$_POST['message']'</p>'
    }


    $mail->Body = $body;

    if(!$mail->send()) {
        $message = "Error adam";
    } else {
        $message = 'Dataes are sent';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>