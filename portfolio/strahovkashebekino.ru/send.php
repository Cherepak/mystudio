<?php

 $to_Email = "ooo.etalon2016@yandex.ru";
 $subject = 'Запрос обратного звонка от'.$_POST["name"];
 $message = "Имя: ".$_POST["name"].". Телефон: ".$_POST["tel"];
 
 if(isset($_POST["name"]) and isset($_POST["tel"])) {
     mail($to_Email, $subject, $message, "From: ooo.etalon2016@yandex.ru \r\n");
     echo 'Спасибо! '.$_POST["name"] .', ваше сообщение отправлено.';
 } else {
     
    echo 'Не могу отправить почту! Пожалуйста, проверьте ваши настройки PHP почты.';
 }
 

?>
