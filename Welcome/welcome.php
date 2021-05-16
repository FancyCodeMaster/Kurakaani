<?php
    $user = "user21346546"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Welcome , <?php echo $user;?></title>
    <link rel="stylesheet" type="text/css" href="welcome.css">
    <link rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>
    <div class="info-container">
        <div class="heading-container">
            <h3>Welcome , <?php echo $user;?></h3>
        </div>
        <div class="app-info-container">
            <p>You are successfully signed up. Thanks for signing up in this amazing app Kurakaani. Using our site , you can communicate with friends and family all over the globe.</p>
        </div>
        <div class="button-container">
            <button class="ok-button">Ok</button>
        </div>
    </div> 
    <nav>
       <div class="logo-container">
           <img src="./img/logo.jpg" alt="kurakaani-logo" class="kurakaani-logo">
       </div>
        <ul class="nav-list">
           <li><a href="../Message/message.html">Message Zone</a></li>
           <li><a href="#">About Us</a></li>
            <li><a href="#">Signout</a></li>
            <li><img src="img/no-user-logo.jpg" alt="no-user-logo" class="no-user-logo"></li>
        </ul>
    </nav>
    <div class="other-items-container">
        <div class="admins-container">
            <div class="title-container">
                Admins
            </div>
            <div class="admins admin-1">
              <div class="admin-info">
                    <img src="./img/admin-1.jpg" alt="Rkesh Silwal" class="admin-1-img">
                    <span>Rikesh Silwal Khatri</span>
              </div>
                <div class="icons-container">
                    <i class="fas fa-comment-alt"></i>
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-info-circle"></i>
                </div>
            </div>
            <div class="admins admin-2">
              <div class="admin-info">
                    <img src="./img/admin-2.jpg" alt="Arun Bikram" class="admin-2-img">
                    <span>Arun Bikram Khatri</span>
              </div>
                <div class="icons-container">
                    <i class="fas fa-comment-alt"></i>
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-info-circle"></i>
                </div>
            </div>
            <div class="admins admin-3">
                <div class="admin-info">
                    <img src="./img/admin-3.jpg" alt="Suman Kc" class="admin-3-img">
                    <span>Suman Kc</span>
                </div>
                <div class="icons-container">
                    <i class="fas fa-comment-alt"></i>
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-info-circle"></i>
                </div>
            </div>
        </div>
        <div class="users-container">
            <div class="user-title-container">
                All Users
            </div>
            <div class="users">
                <div class="user-info">
                    <img src="./img/admin-1.jpg" alt="Rusi" class="user-1-img">
                    <span>Rusi</span>
                </div>
                <div class="users-icon-container">
                    <i class="fas fa-thumbs-up"></i>
                    <i class="fas fa-user-plus"></i>
                    <i class="fas fa-info-circle"></i>
                </div>
            </div>
        </div>
        <div class="friends-container">
            <div class="friends-title-container">
                Friends
            </div>
            <div class="friends">
                <div class="friend-info">
                    <img src="./img/admin-1.jpg" alt="Rkesh Silwal" class="friend-1-img">
                    <span>Suraj Singht Basnet</span>
                </div>
                <div class="friends-icon-container">
                    <i class="fas fa-comment-alt"></i>
                    <i class="fas fa-phone"></i>
                    <i class="fas fa-video"></i>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript" src="welcome.js"></script>
</body>
</html>