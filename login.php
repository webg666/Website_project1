<body>
<?php

session_start();
    include("connection.php");
    include("functions.php");
<<<<<<< HEAD

    $user_data=check_login($con);

    

    if ($_SERVER["REQUEST_METHOD"]="POST")
    {

       $email = $_POST["email"];
       $password = $_POST["login_password"];
       

=======
    $user_data=check_login($con);

    
    
    if ($_SERVER["REQUEST_METHOD"]="POST")
    {
    
       $email = $_POST["email"];
       $password = $_POST["login_password"];
       
       
>>>>>>> a891bb3649e080812e7fdbf9cb292f132a2d571a
       
       if(!empty($email) && !empty($password)){
        
            
<<<<<<< HEAD
            
                $query= "select * from users where email ='$email' limit 1";
                $result=mysqli_query($con,$query);
               

                if ($result && mysqli_num_rows($result) >= 0){
                    $user_data = mysqli_fetch_assoc($result);
                    if (password_verify($_POST["login_password"] , $user_data['password'])){
=======

            
                $query= "select * from users where email ='$email' limit 1";
                $result=mysqli_query($con,$query);
                
                if ($result && mysqli_num_rows($result) >= 0){
                    $user_data = mysqli_fetch_assoc($result);
                    if ($user_data['password']==$password){
                      
>>>>>>> a891bb3649e080812e7fdbf9cb292f132a2d571a
                    $_SESSION['user_id']=$user_data['user_id'];
                    echo "login";
                      
                    
<<<<<<< HEAD
                    }
                }
            }
                }

       
=======
                    } 

                    
                }

       
                    
>>>>>>> a891bb3649e080812e7fdbf9cb292f132a2d571a

        
   
       
<<<<<<< HEAD
    
     
     
=======
    }
     
     }
>>>>>>> a891bb3649e080812e7fdbf9cb292f132a2d571a
     
?>
</body>