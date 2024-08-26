let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newbtn = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msgContainer");
let winMsg = document.querySelector("#msg");
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [2, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const showWinner = (Winner) => {
    winMsg.innerText = `Congratulations, the Winner is ${Winner}!`;
    msgContainer.classList.remove("hide");
    newbtn.classList.remove("hide");  // Show the "New Game" button
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("Winner", pos1val);
                showWinner(pos1val);
                return; // Stop checking further if we have a winner
            }
        }
    }
};

// New Game button logic
newbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";    // Clear the box content
        box.disabled = false;  // Re-enable the box
    });
    msgContainer.classList.add("hide"); // Hide the message container
    newbtn.classList.add("hide");       // Hide the "New Game" button
    turnO = true;                       // Reset to the initial turn
});
resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";    // Clear the box content
        box.disabled = false;  // Re-enable the box
    });
                       
});
