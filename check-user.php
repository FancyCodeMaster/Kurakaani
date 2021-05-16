<?php
include_once 'databaseConnection/connection.php';
if(isset($_POST["login-button"])) {
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    $query = "SELECT name,email,password FROM users";
    $select_response = mysqli_query($connection , $query);
    if($select_response) {
        if(mysqli_num_rows($select_response) > 0) {
            while($row = mysqli_fetch_assoc($select_response)) {
                if($row["email"] === $email && $row["password"] === $password) {
                $_SESSION["login_error"] = 0;
                
                header("Location:Welcome/welcome.php");
            }else {
                $_SESSION["user_no_match_error"] = 1;
                header("Location:index.php");
            }
        }
    }else {
            $_SESSION["table_empty_error"] = 1;
            header("Location:index.php");
        }
}else {
        $_SESSION["table_connection_error"] = 1;
        header("Location:index.php");
    }
}else if(isset($_POST["create-account-button"])) {
    $_SESSION["duplicate_login"] = 0;
    header("Location:CreateAccount/add-account.php");
}else {
    $_SESSION["duplicate_login"] = 0;
    $_SESSION["user_no_match_error"] = 0;
    $_SESSION["table_empty_error"] = 0;
    header("Location:index.php");
}





?>