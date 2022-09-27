console.log("Welcome to Tic Tac Toe")
let music = new Audio("music.mp3")
let audioturn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn = "X"
let isgameover = false;

//function to check the turn
const changeTurn = ()=>{
    return turn === "X"?"0":"X"
}

//function to check the winner
const checkwin = ()=>{
    let boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    win.forEach(e =>{
       if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "") ){
        document.querySelector('.info').innerHTML = boxtexts[e[0]].innerText + "won"
        isgameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px"
       }
    })
}


//main logic start
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkwin();
            if(!isgameover)
            document.getElementsByClassName("turn")[0].innerHTML = "Turn for" + turn;
        }
    })
})

//listener
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerHTML = ""
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})