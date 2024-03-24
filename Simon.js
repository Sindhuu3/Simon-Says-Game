let gSeq=[]; //track game sequence
let  uSeq=[];//track user sequence

 let btns=["yellow", "red","purple","green"];

let started=false;
let level=0;

let h2=document.querySelector("h2");

document.addEventListener("keypress",function(){
    
     if(started==false)
     {
          console.log("Game started");  
               //games starts by pressing any key 
               started=true;

               levelUp();
     }    
});

//to flash the button
function gameflash(btn){
       btn.classList.add("flash");
        setTimeout(function()
        {
          btn.classList.remove("flash")
        },250);
}
function userFlash(btn){
     btn.classList.add("userFlash");
      setTimeout(function()
      {
        btn.classList.remove("userFlash");
      },250);
     } 
function levelUp(){
     uSeq=[]; //resetting user sequence a level changed
     level++;
   h2.innerText=`Level ${level}`;

   let randInd=Math.floor(Math.random()*3);
   let randcolor=btns[ randInd];
    let randbtn=document.querySelector(`.${randcolor}` );
  //random btn choose
   gSeq.push(randcolor) //pushing the random color in game sequence
 
   gameflash(randbtn);
}
 //to check the sequence of user and game is sme or not
function checkAns(idx){


         if(uSeq[idx]==gSeq[idx]){
             if(uSeq.length==gSeq.length){
               setTimeout( levelUp(),1000);  //1s delay after levelup
             }
         }
         else{  //if user and game seq is different 
          h2.innerHTML=`Game Over ! Your Score was <b>${level} </b><br> Press any key to start`;
          document.querySelector("body") .style.backgroundColor="red";
          setTimeout(
               function  () {
                    document.querySelector("body") .style.backgroundColor="white ";   
               },150
          )
        reset();
         }
     }

function btnpress(){
   let btn=  this;
   userFlash(btn); 

   usercolor =btn.getAttribute("id");//storing the user clicked color
   uSeq.push(usercolor);

   checkAns(uSeq.length-1);
}

let allbtns= document.querySelectorAll(".btn");
 for(btn of allbtns)
 {
     btn.addEventListener("click", btnpress);
 }

 function reset(){
     started=false;  //to restart game after game over
     gSeq=[];
     uSeq=[];
     level=0;
 }



