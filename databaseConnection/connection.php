<?php   
        session_start();
        $connection = mysqli_connect("localhost" , "root" , "");
        if($connection) {
            echo "connected to the server";
            $database_query = "CREATE DATABASE IF NOT EXISTS kurakaaniusers";
            $database_response = mysqli_query($connection,$database_query);
            if($database_response) {
                echo "database created";
                $connection=mysqli_connect("localhost" , "root" , "" , "kurakaaniusers");
                $table_query = "CREATE TABLE IF NOT EXISTS users(id INT(4) UNSIGNED AUTO_INCREMENT PRIMARY KEY , name VARCHAR(32) NOT NULL , email VARCHAR(32) NOT NULL , password VARCHAR(16) NOT NULL)";
                $table_response = mysqli_query($connection , $table_query);
            }else {
                $_SESSION["database_error"] = 1;
                echo "database not created";
            }
            
        }else {
            $_SESSION["connection_error"] = 1;
            echo "Connection error";
        }

?>