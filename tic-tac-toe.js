
// Gabrielle Joy Higgins 


const ready = () => {

const boxElementsArray = document.getElementById("board").querySelectorAll("div");

//  Layout the board 
boxElementsArray.forEach(box => box.classList.add("square"));

// Add an X or O to a square when clicked 
const sqArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let i = 0;
let turn = 0;
boxElementsArray.forEach(box => {
    box.setAttribute("id", i);
    i++;
    box.addEventListener("click", () => {
        boxID = box.getAttribute("id");
        if (turn%2===0) {
            box.textContent = 'X';
            sqArray[boxID] = 1;
            box.classList.add("X");
        } else {
            box.textContent = 'O';
            sqArray[boxID] = -1;
            box.classList.add("O");
        } 
        turn++; console.log(sqArray);
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
// id0 = boxElementsArray[0].getAttribute("id");
// id1 = boxElementsArray[1].getAttribute("id");
// id2 = boxElementsArray[2].getAttribute("id");
// id3 = boxElementsArray[3].getAttribute("id");
// id4 = boxElementsArray[4].getAttribute("id");
// id5 = boxElementsArray[5].getAttribute("id");
// id6 = boxElementsArray[6].getAttribute("id");
// id7 = boxElementsArray[7].getAttribute("id");
// id8 = boxElementsArray[8].getAttribute("id");

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


// Disallow Cheating
}

document.addEventListener("DOMContentLoaded", ready);
