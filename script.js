const boxes = document.querySelectorAll('.box');
let turn = 'X';
let gameOver = false;

// Winning combinations: indexes of the box elements
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Function to check for a winner
const checkWinner = () => {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      boxes[a].innerText !== '' &&
      boxes[a].innerText === boxes[b].innerText &&
      boxes[b].innerText === boxes[c].innerText
    ) {
      gameOver = true;
      alert(`Player ${boxes[a].innerText} wins!`);
      return;
    }
  }

  // Check for draw
  let allFilled = [...boxes].every(box => box.innerText !== '');
  if (allFilled && !gameOver) {
    alert("It's a draw!");
    gameOver = true;
  }
};

// Handle a player's move
const handleClick = (e) => {
  if (e.target.innerText === '' && !gameOver) {
    e.target.innerText = turn;
    checkWinner();
    turn = turn === 'X' ? 'O' : 'X';
  }
};

// Add event listeners to all boxes
boxes.forEach(box => {
  box.addEventListener('click', handleClick);
});
