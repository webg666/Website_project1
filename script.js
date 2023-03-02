//responsive menu
let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navmenu'); 
menu.onclick = () => {

    navbar.classList.toggle('active');
    if(navbar.classList.contains('active')){
        document.getElementById('blur').style.filter='blur(2px)';
        
    }
    else{
        document.getElementById('blur').style.filter='none';
    
    }
}

window.onclick=function()
{
    const menu1=document.getElementById('menu-icon')
    let search=document.getElementById("search_text")
    let sBtn=document.getElementById("searchbtn")
    let iconbag=document.getElementById("iconBag")
    let iconprofile=document.getElementById("iconProfile")
    const poplog = document.getElementById('login');
    const ldisplay = window.getComputedStyle(poplog).display;
    const popsign= document.getElementById('signup');
    const sdisplay= window.getComputedStyle(popsign).display;

    document.onmousedown=function()
    {
        
        if (navbar.classList.contains('active')){
        
            navbar.classList.toggle('active');
            document.getElementById('blur').style.filter='none';
        }
        if(search.classList.contains("search-active")){
            search.classList.remove("search-active")
            iconbag.classList.remove("icons-a")
            iconprofile.classList.remove("icons-a")
            
        }
        if (ldisplay=='block'){
            poplog.style.display='none';
            popsign.style.display='none';
            document.getElementById('filter').style.filter='';
            document.getElementById('filter').style.backdropFilter='';
            document.getElementById('filter2').style.filter='';
            document.getElementById('filter2').style.backdropFilter='';
            document.body.style.overflow='';
            document.getElementById('header').style.filter='';
            document.getElementById('header').style.position='';
                }
        if (sdisplay=='block'){
            popsign.style.display='none';
            poplog.style.display='none';
            document.getElementById('filter').style.filter='';
            document.getElementById('filter').style.backdropFilter='';
            document.getElementById('filter2').style.filter='';
            document.getElementById('filter2').style.backdropFilter='';
            document.body.style.overflow='';
            document.getElementById('header').style.filter='';
            document.getElementById('header').style.position='';
        }

    }

    menu1.addEventListener('mousedown',event => event.stopPropagation())
    search.addEventListener('mousedown',event => event.stopPropagation())
    sBtn.addEventListener('mousedown',event => event.stopPropagation())
    poplog.addEventListener('mousedown',event => event.stopPropagation())
    popsign.addEventListener('mousedown',event => event.stopPropagation())
};


//Search

function search(){
let search=document.getElementById("search_text");
let iconbag=document.getElementById("iconBag");
let iconprofile=document.getElementById("iconProfile");

if(search.classList.contains("search-active")){
    search.classList.remove("search-active")
    iconbag.classList.remove("icons-a")
    iconprofile.classList.remove("icons-a")
}
else if(search.classList.contains("search")){
        search.classList.add("search-active")
        iconbag.classList.add("icons-a")
        iconprofile.classList.add("icons-a")
        
    }
}



function poplogin(){
    
    document.getElementById('signup').style.display='none';
    document.getElementById('login').style.display='block';
    document.getElementById('filter').style.filter='brightness(40%)';
    document.getElementById('filter').style.backdropFilter='brightness(80%)';
    document.getElementById('filter2').style.filter='brightness(40%)';
    document.getElementById('filter2').style.backdropFilter='brightness(80%)';
    document.getElementById('header').style.filter='brightness(40%)';
    document.getElementById('header').style.position='static';
    scrollUp();

    
}


function popsign(){
    document.getElementById('login').style.display='none';
    document.getElementById('signup').style.display='block';
    document.getElementById('filter').style.filter='brightness(40%)';
    document.getElementById('filter').style.backdropFilter='brightness(80%)';
    document.getElementById('filter2').style.filter='brightness(40%)';
    document.getElementById('filter2').style.backdropFilter='brightness(80%)';
    document.getElementById('header').style.filter='brightness(40%)';
    document.getElementById('header').style.position='static';
    scrollUp();
}

function noscroll(){
    const poplog = document.getElementById('login');
    const ldisplay = window.getComputedStyle(poplog).display;
    const popsign= document.getElementById('signup');
    const sdisplay= window.getComputedStyle(popsign).display;
    if ((ldisplay=="block")||(sdisplay=="block")){
        window.scrollTo({top:0});
    }
}
window.addEventListener("scroll",noscroll)

/*scroll up */
function scrollUp(){
    window.scrollTo({top: 0,behavior:"smooth" })
    

}

const scroll_up = document.getElementById("scroll-up");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100){
        scroll_up.classList.add("active");
    }
    else{
        scroll_up.classList.remove("active");
    }

})

//Products
var path=window.location.pathname;
var page=path.split("/").pop();

if(page=="sproduct.html"){
var Mainimg = document.getElementById("main-img");
var Smallimg = document.getElementsByClassName("small-img");

Smallimg[0].onclick = function (){
    Mainimg.src = Smallimg[0].src;
}
Smallimg[1].onclick = function (){
    Mainimg.src = Smallimg[1].src;
}
Smallimg[2].onclick = function (){
    Mainimg.src = Smallimg[2].src;
}
Smallimg[3].onclick = function (){
    Mainimg.src = Smallimg[3].src;
}
Smallimg[4].onclick = function (){
    Mainimg.src = Smallimg[4].src;
}
}

username = addEventListener('input', check);
password = addEventListener('input', check);
email = addEventListener('input' ,check);
function check(){
    //username checker:
    let username = document.getElementById("username");
    var name1= document.head.appendChild(document.createElement("style"));
    var name2= document.head.appendChild(document.createElement("style"));

    if (username.value.length < 4){
        name1.innerHTML="#name span::before {background: brown;}";
        name2.innerHTML="#name input:valid ~ label, #name input:focus ~ label  {color: brown;}";
    }else{
        
        name1.innerHTML="#name span::before {background: green;}";
        name2.innerHTML="#name input:valid ~ label, #name input:focus ~ label  {color: green;}";
    }



    //password checker:
    let password = document.getElementById("password");
    var pass1= document.head.appendChild(document.createElement("style"));
    var pass2= document.head.appendChild(document.createElement("style"));    

    if (password.value.length < 8){
        pass1.innerHTML="#pass span::before {background: brown;}";
        pass2.innerHTML="#pass input:valid ~ label, #pass input:focus ~ label  {color: brown;}";
    }else{
        
        pass1.innerHTML="#pass span::before {background: green;}";
        pass2.innerHTML="#pass input:valid ~ label, #pass input:focus ~ label  {color: green;}";
    }


    //email checker:
    let email = document.getElementById("email");
    var email_error= document.getElementById("email_error");
    var mail1= document.head.appendChild(document.createElement("style"));
    var mail2= document.head.appendChild(document.createElement("style"));  
    var regExp_email= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (!(email.value.match(regExp_email))&&(email.value.length>0)){
        mail1.innerHTML="#mail span::before {background: brown;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: brown;}";
        email_error.style.display="block";
    }else if(email.value.length==0){
        mail1.innerHTML="#mail span::before {background: brown;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: brown;}";
        email_error.style.display="none";

    }else{
        mail1.innerHTML="#mail span::before {background: green;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: green;}";
        email_error.style.display="none";
    }

    //phone checker:
    let phone_number = document.getElementById("phone_number");
    var phone_error= document.getElementById("phone_error");
    var phone1= document.head.appendChild(document.createElement("style"));
    var phone2= document.head.appendChild(document.createElement("style"));  
    var regExp_phone= /^\d{10}$/;


    if (!(phone_number.value.match(regExp_phone))&&(phone_number.value.length>0)){
        phone1.innerHTML="#phone span::before {background: brown;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: brown;}";
        phone_error.style.display="block";
    }else if(phone_number.value.length==0){
        phone1.innerHTML="#phone span::before {background: brown;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: brown;}";
        phone_error.style.display="none";
    }else{
        phone1.innerHTML="#phone span::before {background: green;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: green;}";
        phone_error.style.display="none";
    }
}