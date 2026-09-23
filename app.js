let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-button");
let newgame=document.querySelector("#new-button");
let msgcontaineer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0 = true;//player 0 player x;
let count=0;

//winning patterns
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>{

        //player o
        if(turn0){
             box.innerText="O";
             turn0=false;
        }
        //player x
        else{
            box.innerText="X";
            turn0=true;
        }
       box.disabled=true;
       count++;
       let iswinner=checkwinner();
       if(count === 9 && !iswinner){
            gameDraw();
       }
    })
})

//check winner
const checkwinner=()=>{

    for(let pattern of winPatterns){
        
        let posval1=boxes[pattern[0]].innerText;
        let posval2=boxes[pattern[1]].innerText;
        let posval3=boxes[pattern[2]].innerText;

        if(posval1!="" && posval2!="" && posval3!=""){
            if(posval1==posval2 && posval2==posval3){
                showWinner(posval1);return true;
            }
            
        }
    }
}

//showwinner
const showWinner=(winner)=>
{
    msg.innerText=`Congratulations Winner is ${winner} `;
    msgcontaineer.classList.remove("hide");
    disableboxes();
}

const gameDraw=()=>
{
    msg.innerText="The match is draw";
    msgcontaineer.classList.remove("hide");
    disableboxes();
}


//disableboxes
const disableboxes=()=>
{
    for(let box of boxes){
        box.disabled=true;
    }
}

//enableboxes
const enableboxes=()=>
{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

//reset game
const resetgame=()=>
{
    turn0=true;
    count=0;
    enableboxes();
    msgcontaineer.classList.add("hide");

}

newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);
