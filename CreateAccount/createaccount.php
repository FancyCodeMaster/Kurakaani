<?php
    session_start();
    $duplicate_login = $_SESSION["duplicate_login"];
?>
<!DOCTYPE html>
<html>
    <head>
        <title>
            Connect with us!!
        </title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width , initial-scale = 1.0">
        <link rel="stylesheet" type="text/css" href="./createaccount.css">
    </head>
    <body>
        <section class="new-account-section">
           <div class="popup-container" style="display : <?php if($duplicate_login===1) {echo 'block';}else {echo 'none';} ?>;">
                <h3>You're already signed in.</h3>
                <div class="popup-button-container">
                    <button class="popup-button"><a href="../check-user.php">Sign In</a></button>
                </div>
           </div>
           <div class="layer"  style="display : <?php if($duplicate_login===1) {echo 'block';}else {echo 'none';} ?>;">
               
           </div>
            <div class="main-container">
                <div class="new-account-form-container">
                    <form class="new-account-form" method="POST" action="add-account.php" name="new-account-form">
                       <div class="name-container">
                           <input type="text" placeholder="First Name" name="first-name" class="first-name" autocomplete="off">
                           <input type="text" placeholder="Last Name" name="last-name" class="last-name" autocomplete="off">
                       </div>
                        <div class="email-container">
                            <input type="email" placeholder="Enter your email?" class="email" name="email" autocomplete="off">
                        </div>
                        <div class="first-password-container">
                            <input type="password" placeholder = "Enter password" class="password" name="first-password" id="first-password">
                        </div>
                        <div class="confirm-password-container">
                            <span class="password-no-match">Passwords not matching</span>
                            <input disabled type="password" placeholder = "Confirm your password" class="password" id="confirm-password" name="second-password">
                        </div>
                        <div class="signup-button-container">
                            <input type="submit" value="Sign Up" class="button" name="submit">
                        </div>
                        <div>
                            Already a user? <a href="../check-user.php">Sign in</a> instead.
                        </div>
                    </form>
                </div>
            </div>
        </section>
        <script type="text/javascript" src="./createaccount.js">
        </script>
    </body>
</html>