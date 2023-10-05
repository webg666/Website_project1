//responsive menu
let menu = document.querySelector('#menu-icon'); 
let navbar = document.querySelector('.navmenu'); 
menu.onclick = () => {

    navbar.classList.toggle('active');
    if(navbar.classList.contains('active')){
        document.getElementById('blur').style.filter='blur(2px)';
        menu.className="gg-close";
        
    }
    else{
        document.getElementById('blur').style.filter='none';
        menu.className="gg-menu";
    
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
   
    const popsign= document.getElementById('signup');
   
    var login_form = document.getElementById('login_form');
    var signup_form = document.getElementById('signup_form');

    document.onmousedown=function()
    {
        
        if (navbar.classList.contains('active')){
        
            navbar.classList.toggle('active');
            document.getElementById('blur').style.filter='none';
            menu1.className="gg-menu";
        }
        if(search.classList.contains("search-active")){
            search.classList.remove("search-active")
            iconbag.classList.remove("icons-a")
            iconprofile.classList.remove("icons-a")
            
        }
        if (lddisplay=='block'){
            poplog.style.display='none';
            popsign.style.display='none';
            document.getElementById('filter').style.filter='';
            document.getElementById('filter').style.backdropFilter='';
            document.getElementById('filter2').style.filter='';
            document.getElementById('filter2').style.backdropFilter='';
            document.body.style.overflow='';
            document.getElementById('header').style.filter='';
            document.getElementById('header').style.position='';
            login_form.reset();
           
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
            signup_form.reset();
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

    if (localStorage.getItem("text")!="login"){
        document.getElementById('signup').style.display='none';
        document.getElementById('login').style.display='block';
        document.getElementById('filter').style.filter='brightness(40%)';
        document.getElementById('filter').style.backdropFilter='brightness(80%)';
        document.getElementById('filter2').style.filter='brightness(40%)';
        document.getElementById('filter2').style.backdropFilter='brightness(80%)';
        document.getElementById('header').style.filter='brightness(40%)';
        document.getElementById('header').style.position='static';
        document.getElementById("signup_password").type="password";
        document.getElementById("signup_pass").className = "fa-solid fa-eye";
        document.getElementById("login_password").type="password";
        document.getElementById("login_pass").className = "fa-solid fa-eye";
        document.getElementById('signup_form').reset();
        document.body.style.overflow='hidden';
    }
    else if(localStorage.getItem("text")=="login"){
        window.location.replace('http://localhost/website_project_php/profile.php')
    }

    
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
    document.getElementById('login_form').reset();
    document.body.style.overflow='hidden';
}





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


username = addEventListener('input', check);
password = addEventListener('input', check);
email = addEventListener('input' ,check);
function check(){
    var check="true";
    //username checker:
    let username = document.getElementById("username");
    var name1= document.head.appendChild(document.createElement("style"));
    var name2= document.head.appendChild(document.createElement("style"));

    if (username.value.length < 4){
        name1.innerHTML="#name span::before {background: brown;}";
        name2.innerHTML="#name input:valid ~ label, #name input:focus ~ label  {color: brown;}";
        check="false";
    }else{
        
        name1.innerHTML="#name span::before {background: green;}";
        name2.innerHTML="#name input:valid ~ label, #name input:focus ~ label  {color: green;}";
    }



    //password checker:
    let password = document.getElementById("signup_password");
    var pass1= document.head.appendChild(document.createElement("style"));
    var pass2= document.head.appendChild(document.createElement("style"));    

    if (password.value.length < 8){
        pass1.innerHTML="#pass span::before {background: brown;}";
        pass2.innerHTML="#pass input:valid ~ label, #pass input:focus ~ label  {color: brown;}";
        check="false";
    }else{
        
        pass1.innerHTML="#pass span::before {background: green;}";
        pass2.innerHTML="#pass input:valid ~ label, #pass input:focus ~ label  {color: green;}";
    }


    //email checker:
    let email = document.getElementById("email");
    var email_error= document.getElementById("email_error");
    var mail1= document.head.appendChild(document.createElement("style"));
    var mail2= document.head.appendChild(document.createElement("style"));
    var email_text = email_error.innerText || email_error.textContent;
    email_error.innerHTML = email_text;  
    var regExp_email= /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (!(email.value.match(regExp_email))&&(email.value.length>0)){
        email_error.innerHTML="Please enter a valid email address";
        mail1.innerHTML="#mail span::before {background: brown;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: brown;}";
        email_error.style.display="block";
        check="false";
    }else if(email.value.length==0){
        mail1.innerHTML="#mail span::before {background: brown;}";
        mail2.innerHTML="#mail input:valid ~ label, #mail input:focus ~ label  {color: brown;}";
        email_error.style.display="none";
        check="false";

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
    var phone_text = phone_error.innerText || phone_error.textContent;
    phone_error.innerHTML = phone_text;  
    var regExp_phone= /^\d{10}$/;


    if (!(phone_number.value.match(regExp_phone))&&(phone_number.value.length>0)){
        phone_error.innerHTML = "Please enter a valid phone number";
        phone1.innerHTML="#phone span::before {background: brown;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: brown;}";
        phone_error.style.display="block";
        check="false";
    }else if(phone_number.value.length==0){
        phone1.innerHTML="#phone span::before {background: brown;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: brown;}";
        phone_error.style.display="none";
        check="false";
    }else{
        phone1.innerHTML="#phone span::before {background: green;}";
        phone2.innerHTML="#phone input:valid ~ label, #phone input:focus ~ label  {color: green;}";
        phone_error.style.display="none";
    }
    //date checker:
    let day = document.getElementById("day");
    var date1= document.head.appendChild(document.createElement("style"));
    var date2= document.head.appendChild(document.createElement("style"));  
    var today = new Date();
    var today_dd = today.getDate();
    var today_mm = today.getMonth() ; 
    var today_yyyy = today.getFullYear();
    today =  today_mm  + today_dd + today_yyyy ;
    var user_date=new Date(day.value);
    var user_dd = user_date.getDate();
    var user_mm = user_date.getMonth(); 
    var user_yyyy = user_date.getFullYear();
    user_date =  user_mm + user_dd + user_yyyy;
    

    year=today_yyyy-user_yyyy;

    if((year>16)&&(year<110)){
        date1.innerHTML="#date span::before {background: green;}";
        date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: green;}";
        date_error.style.display="none";


    }
    else if((year==16)&&user_mm>=today_mm){
        if(user_dd>=today_dd){
            date1.innerHTML="#date span::before {background: green;}";
            date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: green;}";
            date_error.style.display="none";
            
        }
    }

    else if (day.value.length<=0){
        date1.innerHTML="#date span::before {background: brown;}";
        date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: brown;}";
        date_error.style.display="none";
        check="false";

    }
    else {
        date1.innerHTML="#date span::before {background: brown;}";
        date2.innerHTML="#date input:valid ~ label, #date input:focus ~ label  {color: brown;}";
        date_error.style.display="block";
        check="false";

    }
   

/*check for valid input*/
let bt=document.getElementById("submit_signup");
var bt_hover= document.head.appendChild(document.createElement("style"));
if (check=="true"){
    bt.disabled = false;
    bt.style.cursor="pointer";
    bt.style.opacity="1";
    bt_hover.innerHTML="#submit_signup:hover {border-color: brown;}";

}
else if(check=="false"){
    bt.disabled = true;
    bt.style.cursor="default";
    bt.style.opacity="0.8";
    bt_hover.innerHTML="#submit_signup:hover {border-color: none;}";
}


}
function signup_pass(){
    var pass = document.getElementById("signup_password");
    var icon = document.getElementById("signup_pass")
    if (pass.type=="password"){
        pass.type="text";
        icon.className = "fa-solid fa-eye-slash";
    }else{
        pass.type="password";
        icon.className = "fa-solid fa-eye";
    }

}

function login_pass(){
    var pass = document.getElementById("login_password");
    var icon = document.getElementById("login_pass")
    if (pass.type=="password"){
        pass.type="text";
        icon.className = "fa-solid fa-eye-slash";
    }else{
        pass.type="password";
        icon.className = "fa-solid fa-eye";
    }

}


function signout(){
    localStorage.removeItem("text");
    $.ajax({
        type: "GET",
        url: "logout.php",
        data: {h:"kot"},
        succes : function(){
            location.reload();
        }
    });
    window.location.replace('http://localhost/website_project_php/index.html');

}

const search_products = () =>{
    const searchbox = document.getElementById("search-item").value.toUpperCase();
    const storeitems = document.getElementById("product-list");
    const product = document.querySelectorAll(".product");
    const pname = storeitems.getElementsByTagName("h2");

    for (var i=0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if (textvalue.toLocaleUpperCase().indexOf(searchbox)> -1){
                product[i].style.display = "";
            }else{
                product[i].style.display = "none";

            }
        }

    }

}


// Cart

let cartIcon = document.querySelector("#bag-ickon");
let cart = document.querySelector('.cart');
let closecart = document.querySelector('#close-cart');


cartIcon.onclick = ()=>{
    cart.classList.toggle('active');
};

closecart.onclick = () => {
    cart.classList.remove('active');
};


    /* Sproducts */
    const activeImage = document.querySelector(".product-image .active");
    const productImages = document.querySelectorAll(".product-thumb img");
    function changeImage(e) {
        activeImage.src = e.target.src;
    }
    productImages.forEach((image) => image.addEventListener("click", changeImage));

    
    /*Profile*/
    
    
    const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});



/*Scrol-animation*/

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
    } else {
         entry.target.classList.remove('show');
    }
  });

});
