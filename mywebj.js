
var c1 = document.querySelector(".menu1");
var c2 = document.querySelector(".menu2");
var c21  =  document.querySelector("#menu21");
var c22 = document.querySelector("#menu22");
var c3  = document.querySelector("#menu31"); 

var ct1 =document.querySelector("#pm1 #lo1d");
var ct2 =document.querySelector("#lo2d");
var ct21 = document.querySelector("#lo21d");
var ct22 = document.querySelector("#lo22d");
var ct3  = document.querySelector("#lo31d"); 



var main_right = document.querySelector(".main_right");
var rbox1  = document.querySelector("#rbox1");
var tc =0;

c1.onclick = function(){
   if(ct1.style.display == "none"  ||ct1.style.display == ""   ){
     ct1.style.display ="block";
   }
   else{
    ct1.style.display ="none";
   }
}

c2.onclick = function(){
    if(ct2.style.display == "none" ||ct2.style.display == "" ){
        ct2.style.display ="block";
      }
      else{
       ct2.style.display ="none";
      }
}

c21.onclick = function(){
    if(ct21.style.display == "none" ||ct21.style.display == "" ){
        ct21.style.display ="block";
      }
      else{
       ct21.style.display ="none";
      }
}
c22.onclick = function(){
    if(ct22.style.display == "none" ||ct22.style.display == ""){
        ct22.style.display ="block";
      }
      else{
       ct22.style.display ="none";
      }
}

c3.onclick  =function(){
    if(ct3.style.display == "none" ||ct3.style.display == ""){
        ct3.style.display ="block";
      }
      else{
       ct3.style.display ="none";
      }
}


var sec1 = document.querySelector("#rbox1 .info");
var sec2 =document.querySelector("#rbox1 .info2");
var sec3 =document.querySelector("#rbox1 .info3");
var sec4 =document.querySelector("#rbox1 .info4"); 
function t1(){
    sec1.style.display ="block";
    sec2.style.display ="none";
    sec3.style.display ="none";
    sec4.style.display ="none";
    disable_m3();
    disable_m2();
    disable_m4();
}

function t2(){
    sec1.style.display ="none";
    sec2.style.display ="block";
    sec3.style.display ="none";
    sec4.style.display ="none";
    disable_m2();
    disable_m3();
    disable_m4();
  
}
function t3(){
    sec1.style.display ="none";
    sec2.style.display ="none";
    sec3.style.display ="block";
    sec4.style.display ="none";
    disable_m2();
    disable_m3();
    disable_m4();
    
}
function t4(){
    sec1.style.display ="none";
    sec2.style.display ="none";
    sec3.style.display ="none";
    sec4.style.display ="block";
    disable_m2();
    disable_m3();
    disable_m4();
}

var sec21 = document.querySelector("#rbox2 .info");
var sec22 =document.querySelector("#rbox2 .info2");
var sec23 =document.querySelector("#rbox2 .info3");
var sec24 =document.querySelector("#rbox2 .info4"); 


function t2_1(){
    sec21.style.display ="block";
    sec22.style.display ="none";
    sec23.style.display ="none";
    sec24.style.display ="none";
    disable_m1();
    disable_m3();
    disable_m4();
    
}
function t2_2(){
    sec21.style.display ="none";
    sec22.style.display ="block";
    sec23.style.display ="none";
    sec24.style.display ="none";
    disable_m1();
    disable_m3();
    disable_m4();
}
function t2_3(){
    sec21.style.display ="none";
    sec22.style.display ="none";
    sec23.style.display ="block";
    sec24.style.display ="none";
    disable_m1();
    disable_m3();    disable_m4();
}

function t2_4(){
    sec21.style.display ="none";
    sec22.style.display ="none";
    sec23.style.display ="none";
    sec24.style.display ="block";
    disable_m1();
    disable_m3();
    disable_m4();

}


var sec31 = document.querySelector("#rbox3 .info");
var sec32 =document.querySelector("#rbox3 .info2");
var sec33 =document.querySelector("#rbox3 .info3");
var sec34 =document.querySelector("#rbox3 .info4");  


function t3_1(){
    console.log(sec31)
    sec31.style.display ="block";
    sec32.style.display ="none";
    sec33.style.display ="none";
    sec34.style.display ="none";
    disable_m1();
    disable_m2();
    disable_m4();
    
}
function t3_2(){
    sec31.style.display ="none";
    sec32.style.display ="block";
    sec33.style.display ="none";
    sec34.style.display ="none";
    disable_m1();
    disable_m2();
    disable_m4();
}
function t3_3(){
    sec31.style.display ="none";
    sec32.style.display ="none";
    sec33.style.display ="block";
    sec34.style.display ="none";
    disable_m1();
    disable_m2();
    disable_m4();
}

function t3_4(){
    sec31.style.display ="none";
    sec32.style.display ="none";
    sec33.style.display ="none";
    sec34.style.display ="block";
    disable_m1();
    disable_m2();
    disable_m4();

}


var sec41 = document.querySelector("#rbox4 .info");
var sec42 =document.querySelector("#rbox4 .info2");
var sec43 =document.querySelector("#rbox4 .info3");
var sec44 =document.querySelector("#rbox4 .info4");  



function t4_1(){
    console.log(sec41)
    sec41.style.display ="block";
    sec42.style.display ="none";
    sec43.style.display ="none";
    sec44.style.display ="none";
    disable_m1();
    disable_m2();
    disable_m3();
    
}
function t4_2(){
    sec41.style.display ="none";
    sec42.style.display ="block";
    sec43.style.display ="none";
    sec44.style.display ="none";
    disable_m1();
    disable_m2();
    disable_m3();
    
}
function t4_3(){
    sec41.style.display ="none";
    sec42.style.display ="none";
    sec43.style.display ="block";
    sec44.style.display ="none";
    disable_m1();
    disable_m2();
    disable_m3();
    
}

function t4_4(){
    sec41.style.display ="none";
    sec42.style.display ="none";
    sec43.style.display ="none";
    sec44.style.display ="block";
    disable_m1();
    disable_m2();
    disable_m3();
    
}





function disable_m4(){
    sec41.style.display = "none" ; 
    sec42.style.display = "none" ; 
    sec43.style.display = "none" ; 
    sec44.style.display = "none" ; 
 }



function disable_m1(){
   sec1.style.display = "none" ; 
   sec2.style.display = "none" ; 
   sec3.style.display = "none" ; 
   sec4.style.display = "none" ; 
}
function disable_m2(){
    sec21.style.display = "none" ; 
    sec22.style.display = "none" ; 
    sec23.style.display = "none" ; 
    sec24.style.display = "none" ; 
} 
function disable_m3(){
    sec31.style.display = "none" ; 
    sec32.style.display = "none" ; 
    sec33.style.display = "none" ; 
    sec34.style.display = "none" ; 
}  
