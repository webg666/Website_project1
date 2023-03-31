<?php

function  random_num($lenght){

    $text="";
    if ($lenght<5){
        $lenght=5;
    }
    $len = rand(4,$lenght);
    for($i=0; $i<$len ; $i++){
        $text.=rand(0,9);

    }
    return $text;
}
function check_login($con){
    if(isset($_SESSION['user_id'])){
        
        $id = $_SESSION["user_id"];
        $query="select * from users where user_id = '$id' limit 1";
        $result=mysqli_query($con,$query);
<<<<<<< HEAD

        if($result && mysqli_num_rows($result)>0)
            {
                $user_data = mysqli_fetch_assoc($result);
                return $user_data;
                
            }
}

}
=======
>>>>>>> a891bb3649e080812e7fdbf9cb292f132a2d571a

        if($result && mysqli_num_rows($result)>0)
            {
                $user_data = mysqli_fetch_assoc($result);
                return $user_data;
                
            }
}

}

?>