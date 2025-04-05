// let boxes=document.querySelectorAll(".box");
// let resetBtn=document.querySelector("#reset-btn");
// let newGameBtn=document.querySelector("#new-btn");
// let msgContainer=document.querySelector(".msg-Container");
// let msg=document.querySelector("#msg");

// let turnO=true;

// const winPatterns=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// boxes.forEach((box)=>
//     box.addEventListener("click",()=>{
//         if(turnO){
//             box.innerText="O";
//             turnO=false;
//         }else{
//             box.innerText="X";
//             trunO=true;
//         }
//         box.disabled=true;
//         checkWinner();
//     })
// );

// const resetGame=()=>{
//     turnO=true;
//     enabledBoxes();
//     msgContainer.classList.add("hide");

// }
// const enabledBoxes=()=>{
//     for(box of boxes){
//         box.disabled=false;
//         box.innerText="";
//     }
// }

// const disabledBoxes=()=>{
//     for(box of boxes){
//         box.disabled=true;
//     }
// }
// const showWinner=(winner)=>{
//     msg.innerText=`Congratulations! Winner is ${winner}`;
//     msgContainer.classList.remove("hide");
//     disabledBoxes();
// }

// let checkWinner=()=>{
//     for(pattern of winPatterns){
//         let pos1Val=boxes[pattern[0]].innerText;
//         let pos2Val=boxes[pattern[1]].innerText;
//         let pos3Val=boxes[pattern[2]].innerText;

//         if(pos1Val!="" && pos2Val!=""&&pos3Val!=""){
//             if(pos1Val===pos2Val&& pos2Val===pos3Val){
//                 showWinner(pos1Val);
//             }
//         }
//     }
// };

// newGameBtn.addEventListener("click",resetGame);
// resetBtn.addEventListener("click",resetGame);



let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; // Corrected variable name

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide"); 
};

boxes.forEach((box) =>
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // Disable the box after a move
        checkWinner();
    })
);




const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = ""; 
    });
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide"); 
    disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return;
        }
    }

    // Check for a draw
    const allDisabled = Array.from(boxes).every((box) => box.disabled);
    if (allDisabled) {
        msg.innerText = "It's a Draw!";
        msgContainer.classList.remove("hide");
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
