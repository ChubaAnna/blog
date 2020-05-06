<?php

require_once('configDB.php');

if($_SERVER['REQUEST_METHOD']=='POST'){
    $conn = mysqli_connect(servername, username, password, dbname);
    if(!$conn) {
        die('Помилка при підключенні до БД ' . mysqli_connect_error());
    }
    $login = $_POST['Login']
    $sql = "SELECT * FROM user WHERE Login = '" . $login . "'";