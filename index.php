<?php 
session_start();
$user_no_match = 0;
$table_empty_error = 0;
if(isset($_SESSION["user_no_match_error"])) {
    $user_no_match = $_SESSION["user_no_match_error"];
}
if(isset($_SESSION["table_empty_error"])) {
    $table_empty_error = $_SESSION["table_empty_error"];
}

// if user has already signed in.
//if(isset($_SESSION["login_error"])) {
//    if($_SESSION["login_error"] === 0) {
//        header("Location:Welcome/welcome.php");
//    }
//}
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Kurakaani - Spend time with your loved ones</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width , initial-scale=1.0">
        <link rel="stylesheet" type="text/css" href="style.css">
        <style>
            .invalid-info {
                margin-bottom : 10px;
                text-align : center;
                color : red;
/*                visibility : hidden;*/
            }
        </style>
    </head>
    <body>
        <section class="login-section">
            <div class="main-container">
                <div class="main-container__info-container">
                    <h2>
                        Welcome to our site "Kurakaani". Feel free to get in touch with your loved ones
                    </h2>
                </div>
                <div class="main-container__login-container">
                    <div class="login-form-container">
                        <form name="login" class="login-form" method="post" action="check-user.php">
                            <div class="invalid-info" style="visibility:<?php if($user_no_match===1 || $table_empty_error===1){echo 'visible';}else{echo 'hidden';} ?>;">
                                <h4>
                                    Not a user. Create Account first.
                                </h4>
                            </div>
                            <div class="email-container">
                                <input type="email" placeholder="Enter your email?" class="email" name="email">
                                <div class="standard-email-tooltip">
                                <p>Standard Email : It shouldn't start with a number but only alphabets. No special characters except @ is allowed.</p>
                                </div>
                            </div>
                            <div class="password-container">
                                <input type="password" placeholder="Password" class="password" name="password">
                                <div class="standard-password-tooltip">
                                    <p>Standard Password : It should be of 8 to 16 characters. It's mandatory to use at least one Capital Letter , one Number , one Special Characters.</p>
                                </div>
                            </div>

                            <div class="login-button-container">
                                <a class="link-to-message" href="#"><input type="submit" value="Log In" class="login-button" name="login-button"></a>
                            </div>
                            <div style="font-size : 200%; text-align : center;" class="or">or</div>
                            <div class="create-account-button-container">
                                <a class="link-to-new-account" href="CreateAccount/add-account.php"><input type="submit" value="Create Account" class="create-account-button" name="create-account-button"></a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        <script type="text/javascript" src="script.js"></script>
    </body>
</html>