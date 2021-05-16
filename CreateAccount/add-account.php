<?php
    include_once '../databaseConnection/connection.php';
    if(isset($_POST["submit"])) {
        $first_name = $_POST["first-name"];
        $last_name = $_POST["last-name"];
        $email = $_POST["email"];
        $password = $_POST["first-password"];
        
        $full_name = $first_name." ".$last_name;
        $full_name = ucwords($full_name);
//        $password = md5($password);
        
        //from database connection
        if($table_response) {
            $check_query = "SELECT * FROM users WHERE email='$email' and password='$password'";
            $check = mysqli_query($connection , $check_query);
            if($check) {
                $rows = mysqli_num_rows($check);  
                if($rows > 0) {
                    $_SESSION["duplicate_login"] = 1;
                    header("Location:createaccount.php");
                }else {
                    $insert_value_query = "INSERT IGNORE INTO users(name , email , password) VALUES('$full_name' , '$email' , '$password')";
                    $insert_value_response = mysqli_query($connection , $insert_value_query);
                    if($insert_value_response) {
                        echo "Value inserted";
                        $_SESSION["fullName"] = $full_name;
                        header("Location:../Welcome/welcome.php");
                    }else {
                        echo "Error inserting value";
                    }   
                }
            }
        }else {
            echo "Error creating table";
            $_SESSION["table_creation_error"] = 1;
        }
        
    }
    // to remove the popup when we go back from sign in to add account
    if(isset($_SESSION["duplicate_login"])) {
        if($_SESSION["duplicate_login"] === 0) {
            header("Location:createaccount.php");    
        }  
    }

?>
