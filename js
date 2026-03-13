const grid = document.getElementById('game-grid');
const player = document.getElementById('player-container');
const frame = document.getElementById('game-frame');
const title = document.getElementById('current-title');

function loadGame(url, name) {
    grid.classList.add('hidden'); // Hide the grid
    player.classList.remove('hidden'); // Show the player
    frame.src = url; // Set the iframe source
    title.innerText = name; // Update the title
}

function showGrid() {
    grid.classList.remove('hidden'); // Show the grid
    player.classList.add('hidden'); // Hide the player
    frame.src = ""; // Stop the game from running in the background
}
