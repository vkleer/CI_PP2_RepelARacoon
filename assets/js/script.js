/**
 * Creates div elements where the racoons will spawn
 */
function createBushes() {
    let gameBody = document.getElementById('game-section');
    let bushNumber = 8;
    let bushCount = 0;

    while (bushCount < bushNumber) {
        let bush = document.createElement('div');
        bush.classList.add('bush', 'empty');
        gameBody.appendChild(bush);
        console.log('Create a bush!');
        bushCount++
    }
}
/** 
 * Spawn a raccoon
 */
 function spawnRaccoon() {
    // Sets the lifespan of raccoon
    const spawnInterval = 2000;
    let bush = randomBush();
    let raccoon = document.createElement('div');
    // Add raccoon class to div and remove empty class from bush
    raccoon.classList.add('raccoon');
    bush.classList.remove('empty');

    // Add event listener to check for clicks
    bush.appendChild(raccoon);
    raccoon.addEventListener('click', function() {
        bush.removeChild(raccoon);
        bush.classList.add('empty');
        incrementScore();
    })

    setTimeout(function() {
        if (bush.contains(raccoon)) {
            bush.removeChild(raccoon);
            bush.classList.add('empty');
        } else {
            console.log('There are no raccoons!');
        }
    }, spawnInterval);
}
/** 
 * Select a random bush to spawn a raccoon in 
 */
function randomBush() {
    let gameBody = document.getElementById('game-section');
    let bushes = document.getElementsByClassName('bush');
    // Generate a random number between 0 and 7
    let randomBushNumber = Math.floor(Math.random() * bushes.length);
    let currentBush = bushes[randomBushNumber];
    
    if (!currentBush.classList.contains('empty')) {
        console.log('You already used this bush!');
        return randomBush();
    }
    console.log(`Selected bush number ${randomBushNumber}`);
    return bushes[randomBushNumber];
}
// Gets the current score from the DOM and increments it by 1
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

createBushes();
setInterval(spawnRaccoon, 1000);