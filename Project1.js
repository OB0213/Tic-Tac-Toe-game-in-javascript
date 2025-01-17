console.log('Welcome to Tic Tac Toe');
let turn='X';
let gameOver=false;

//Function to change turn
const changeTurn=()=>{
    return turn === 'X'?"O" : "X"
}

//Function to check win

const checkWin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]
    ];

    wins.forEach((e)=>{
        if((boxtexts[e[0]].innerText===boxtexts[e[1]].innerText)&&(boxtexts[e[0]].innerText===boxtexts[e[2]].innerText)&&boxtexts[e[0]].innerText!=='')
        {
           console.log("Hello");
            gameOver=true;
            document.getElementsByClassName('info')[0].innerHTML=`${boxtexts[e[0]].innerText} won`
        }

    })

}

//Game Logic

let boxes=document.getElementsByClassName('box');
console.log(boxes);

Array.from(boxes).forEach(element=>{
    let boxtext=element.querySelector('.boxtext');
  element.addEventListener("click",function(){
   
    if(boxtext.innerText==='')
    {
        if(!gameOver)
        {
            document.getElementsByClassName('info')[0].innerHTML=`Turn for ${turn}`;
            boxtext.innerText=turn;
            turn=changeTurn();
             checkWin();
        }
       
       
       
    }
  })
   });

   document.getElementById('reset').addEventListener("click",function(){
    window.location.reload();
   })

  