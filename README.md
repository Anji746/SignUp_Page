# SignUp_Page
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name ="viewport" content="width-device-width, initial-scal=1.0">
        <title> </title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" integrity="sha512-PgQMlq+nqFLV4ylk1gwUOgm6CtIIXkKwaIHp/PAIWHzig/lKZSEGKEysh0TCVbHJXCLN7WetD8TFecIky75ZfQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" type="text/css" href="style.css">
       
        <script src="script.js"></script>
    </head>
    <body>
    <div class="container">
        <div class="header">
            <h2>Sign Up </h2>
        </div>
        
        <form class = "form", id="form">
<div class="form-control">
    <lable>Username</lable>
    <input type="text" name="" id="username" placeholder="Enter your full name" autocomplete="off">
    <i class="fa-check-circle"></i>
    <i class="fa-exclamation-circle"></i>
    <small>Error message</small>
</div>
<div class="form-control">
    <lable>Password</lable>
    <input type="password" name="" id="password" placeholder="Enter your your Password" autocomplete="off">
    <i class="fa-check-circle"></i>
    <i class="fa-exclamation-circle"></i>
    <small>Error message</small>
</div>
<div class="form-control">
    <lable> Confirm Password</lable>
    <input type="password" name="" id="confirm_password" placeholder="Re-enter your password">
    <i class="fa-check-circle"></i>
    <i class=" fa-exclamation-circle"></i>
    
    
    <small>Error message</small>
</div>
<input type="submit" value="Submit" class="btn"  name="">
        </form>
    </div>
        

        </body>
    
</html>
