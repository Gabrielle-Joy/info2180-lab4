
// Gabrielle Joy Higgins 


const ready = () => {

const boxElementsArray = document.getElementById("board").querySelectorAll("div");

//  Layout the board 
boxElementsArray.forEach(box => box.classList.add("square"));

// Add an X or O to a square when clicked 
let sqArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let i = 0;
let turn = 0;
let change = true;
boxElementsArray.forEach(box => {
    box.setAttribute("id", i);
    i++;
    box.addEventListener("click", () => {
        boxID = box.getAttribute("id");
        (box.textContent === "") ? change = true : change = false;
        if (turn%2===0 && change) {
            box.textContent = 'X';
            sqArray[boxID] = 1;
            box.classList.add("X");
            turn++;
        } else if (turn%2!==0 && change) {
            box.textContent = 'O';
            sqArray[boxID] = -1;
            box.classList.add("O");
            turn++;
        } 
        console.log(sqArray);
        if (i > 4) {
            winner();
        }
    });
});

/* Change the style when you move your
mouse over a square */ 
boxElementsArray.forEach(box => box.addEventListener("mouseenter", () => {
    box.classList.add("hover");
}));
boxElementsArray.forEach(box => box.addEventListener("mouseout", () => {
    box.classList.remove("hover");
}));


/*Check for the winner and update the
status*/

/*
0 1 2
3 4 5
6 7 8

wins:
0 1 2
3 4 5
6 7 8
0 4 8
2 4 6
0 3 6
1 4 7
2 5 8
*/

function winner() {

    let win0 = sqArray[0] + sqArray[1] + sqArray[2];
    let win1 = sqArray[3] + sqArray[4] + sqArray[5];
    let win2 = sqArray[6] + sqArray[7] + sqArray[8];
    let win3 = sqArray[0] + sqArray[4] + sqArray[8];
    let win4 = sqArray[2] + sqArray[4] + sqArray[6];
    let win5 = sqArray[0] + sqArray[3] + sqArray[6];
    let win6 = sqArray[1] + sqArray[4] + sqArray[7];
    let win7 = sqArray[2] + sqArray[5] + sqArray[8];

    const congrats = document.getElementById("status");

    if (win0 == 3 || win1 == 3 || win2 == 3 || win3 == 3 || win4 == 3 || win5 == 3 || win6 == 3 || win7 == 3) {
        // x wins
        congrats.textContent = 'Congratulations! X is the Winner!';
        congrats.classList.add('you-won');
    } else if (win0 == -3 || win1 == -3 || win2 == -3 || win3 == -3 || win4 == -3 || win5 == -3 || win6 == -3 || win7 == -3) {
        // o wins
        congrats.textContent = 'Congratulations! O is the Winner!';
        congrats.classList.add('you-won');
    } 

}
// Restart the game
const button = document.getElementsByClassName("btn")[0];
button.addEventListener("click", () => {
    sqArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    console.log(sqArray);
    boxElementsArray.forEach(box => {
        box.classList.remove("X") || box.classList.remove("O");
        box.textContent = '';
    });
    const congratsMes = document.getElementById("status");
    congratsMes.textContent = 'Move your mouse over a square and click to play an X or an O';
    congratsMes.classList.remove('you-won');
    turn = 0;
});


// Disallow Cheating
}

document.addEventListener("DOMContentLoaded", ready);
