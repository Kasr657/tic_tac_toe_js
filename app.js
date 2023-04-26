let x = [], o = [];
let player; //determines when it touches x and when it touches o
let clicks = 0; //counts the total number of clicks made, that is, only those that lead to an x or an o
let check = false; //not to count the first click
if (Math.round(Math.random()) == 1) { //randomly calculates who starts
    console.log('starts with x');
    player = 'x';
    x_turn();
} else {
    console.log('starts with o');
    player = 'o';
    o_turn();
}
for(let i=0; i<9; i++){ //initializes the board
    x[i]=false;
    o[i]=false;
}
function x_turn() { //touches x and tells it, also counts clicks
    if (check == false)
    check = true;
    else {
        clicks++;
        console.log(clicks);
    }
    document.getElementById("whose turn").innerHTML = "X's turn!";
}

function o_turn() { //touches o and says it, also counts clicks
    if (check == false)
        check = true;
    else {
        clicks++;
        console.log(clicks);
    }
    document.getElementById("whose turn").innerHTML = "O's turn!";
}
//here are variables to control whether the box was pressed and by whom

function on_click(position){
    if(x[position-1]==false && o[position-1]==false){
        if(player=='o'){
            o[position-1] = true;
            document.getElementById("box"+position).innerHTML = "o";
            document.getElementById("box"+position).style.opacity = "1";
            player = 'x';
            x_turn();
        } else if (player == 'x') {
            x[position-1] = true;
            document.getElementById("box"+position).innerHTML = "x";
            document.getElementById("box"+position).style.opacity = "1";
            player = 'o';
            o_turn();
        }
        checkForWinner();
    }
}

//check cases of victory

function checkForWinner() {
    if (x[0] == true && x[1] == true && x[2] == true || x[0] == true && x[4] == true && x[8] == true || x[0] == true && x[3] == true && x[6] == true || x[1] == true && x[4] == true && x[7] == true || x[2] == true && x[5] == true && x[8] == true || x[2] == true && x[4] == true && x[6] == true || x[6] == true && x[7] == true && x[8] == true || x[3] == true && x[4] == true && x[5] == true) {
        alert('X won!');
        console.log('Victory for X');
        reset();
    } else if (o[0] == true && o[1] == true && o[2] == true || o[0] == true && o[4] == true && o[8] == true || o[0] == true && o[3] == true && o[6] == true || o[1] == true && o[4] == true && o[7] == true || o[2] == true && o[5] == true && o[8] == true || o[2] == true && o[4] == true && o[6] == true || o[6] == true && o[7] == true && o[8] == true || o[3] == true && o[4] == true && o[5] == true) {
        alert('O won!');
        console.log('Victory for O');
        reset();
    }
    if (clicks == 9) {
        alert('Draw!');
        console.log('Match Draw');
        reset();
    }
}

//reset when a game ends

function reset() {
    for (let i = 1; i < 10; i++) {
        let name = "box" + i;
        document.getElementById(name).innerHTML = "";
        x[i-1]=false;
        o[i-1]=false;
    }
    clicks = 0;
}

//When the mouse moves from the boxes

function hox(position) {
    if (x[position-1] == false && o[position-1] == false) {
        if (player == 'o') {
            document.getElementById("box"+position).innerHTML = "o";
            document.getElementById("box"+position).style.opacity = "0.5";
        } else if (player == 'x') {
            document.getElementById("box"+position).innerHTML = "x";
            document.getElementById("box"+position).style.opacity = "0.5";
        }
    } else
        nhox(position);
}

function nhox(position) {
    if (x[position-1] == false && o[position-1] == false)
        document.getElementById("box"+position).innerHTML = "";
}