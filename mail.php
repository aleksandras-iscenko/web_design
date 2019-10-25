<?php

$recepient = "aleksandras.iscenko@vdu.lt";
$sitename = "ADAPTYVUS TINKLALAPIS №1";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "Nauja svetainės užklausa \"$sitename\"";
$message = "Vardas: $name \nTelefonas: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");