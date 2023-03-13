<body>
<?php

session_start();
    include("connection.php");
    include("functions.php");
    $user_data=check_login($con);

    
    
    if ($_SERVER["REQUEST_METHOD"]="POST")
    {
    
       $email = $_POST["email"];
       $password = $_POST["login_password"];
       
       
       
       if(!empty($email) && !empty($password)){
        
            

            
                $query= "select * from users where email ='$email' limit 1";
                $result=mysqli_query($con,$query);
                
                if ($result && mysqli_num_rows($result) >= 0){
                    $user_data = mysqli_fetch_assoc($result);
                    if ($user_data['password']==$password){
                      
                    $_SESSION['user_id']=$user_data['user_id'];
                    echo "login";
                      
                    
                    } 

                    
                }

       
                    

        
   
       
    }
     
     }
     
?>
</body>