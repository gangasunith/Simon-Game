let gameSeq=[];
let userSeq=[];
let btns=["red","yellow","green","blue"];
let started =false;
let level=0;

let h2=document.querySelector("h2");
let bt=document.querySelector("button");
bt.addEventListener("click",function(){
  
  if(started==false){
   started=true;
   bt.classList.add('hidden');
   levelUp();
  }
});

function gameFlash(btnn){
 btnn.classList.add('flash');
 setTimeout(function(){
   btnn.classList.remove('flash')
 },500)
}

function userFlash(btnn){
  btnn.classList.add("Userflash");
  setTimeout(function(){
    btnn.classList.remove("userflash")
  },500)
 }

function levelUp(){
  userSeq=[];
  level ++;
  h2.innerHTML=`Level ${level}`;

  let randIdx=Math.floor(Math.random()*4)
  let randColor=btns[randIdx];
  let randbtn=document.querySelector(`#${randColor}`);
  console.log(randbtn);
  gameSeq.push(randColor);
  gameFlash(randbtn);

}

function checkAns(idx){
  if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
      setTimeout(levelUp,1000);
    }
  }
  else {
    h2.innerHTML=`Game Over ! Your score was ${level-1}`;
    document.querySelector("body").style.backgroundColor='red';
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white"; 
    },500);
    reset();
    
  }
}

function tilePress(){
  let btn=this;
  userFlash(btn);

  userColor=btn.getAttribute('id');
  userSeq.push(userColor);
  checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll('.btn');
for (btn of allBtns){
  btn.addEventListener("click",tilePress)
}

function reset(){
  started=false;
  gameSeq=[];
  userSeq=[];
  level=0;
  bt.classList.remove('hidden')
}