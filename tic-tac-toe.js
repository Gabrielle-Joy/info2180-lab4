
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
            box.classList.add("X")
        } else {
            box.textContent = 'O';
            sqArray[boxID] = -1;
            box.classList.add("O")
        } turn++;
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


// Restart the game


// Disallow Cheating
}

document.addEventListener("DOMContentLoaded", ready);
