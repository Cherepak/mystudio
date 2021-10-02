<?php

$name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);;
$tel = filter_var($_POST["tel"], FILTER_SANITIZE_STRING);;

if(isset($name) and isset($tel)) {
  mail("etalon20184@yandex.ru", "запрос на звонок","Имя:$name, телефон:$tel\r\n");
  die(true);
}


?>
