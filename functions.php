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



?>