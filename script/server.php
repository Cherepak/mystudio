<?php

$name = $_POST["name"];
$phone = $_POST["phone"];
$mail = $_POST["mail"];
$type = $_POST["type"];
$comunication = $_POST["comunication"];

$from = "From:perec9595@mail.ru";
$to ="perec9595@mail.ru";
$subject = "Заявка от клиента";
$massage = "Заявка от: $name, телефон: $phone, почта: $mail, тип сайта: $type, тип связи: $comunication.\r\n";

if(!isset($name) AND !isset($phone) AND !isset($mail)){
  mail($to, $subject, $massage, $from);
  die (json_encode(array('text' => 'Сообщение отправлено Заявка от: '.$name.', телефон: '.$phone.', почта: '.$mail.', тип сайта: '.$type.', тип связи: '.$comunication.' ')));

} else (
  die (json_encode(array('text' => 'Отсутствует один из трех обязательных полей для заполнения')))

)

?>
