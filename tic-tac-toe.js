
// Gabrielle Joy Higgins 


const ready = () => {
//  Layout the board 
document.getElementById("board").querySelectorAll("div").forEach(box => box.classList.add("square"));

// Add an X or O to a square when clicked 
const sqArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let i = 0;
let turn = 0;
document.getElementById("board").querySelectorAll("div").forEach(box => {
    box.setAttribute("id", i);
    i++;
    box.addEventListener("click", () => {
        boxID = box.getAttribute("id");
        if (turn%2===0) {
            box.textContent = 'X';
            sqArray[boxID] = 1;
        } else {
            box.textContent = 'O';
            sqArray[boxID] = -1;
        } turn++;
    });
});

/* Change the style when you move your
mouse over a square */ 


/*Check for the winner and update the
status*/


// Restart the game


// Disallow Cheating
}

document.addEventListener("DOMContentLoaded", ready);
