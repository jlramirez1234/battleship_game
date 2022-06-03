const rs = require(`readline-sync`);

function gameStart(){

  
const initalQuestion = rs.keyInYN(`Hello! Would you like to play Battleship? `);
if(initalQuestion){ 

//Variables
const alphabet =  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let gameBoard = [];
let shipsRemaining;
let shipsCoord = [];
let ships = [
    {type: `aircraft`, units: 5},
    {type: `battleship`,units: 4},
    {type: `cruiser`, units: 3},
    {type: `submarine`, units: 3},
    {type: `destroyer`, units: 2}
];
let shotsTaken = [];

let shipUnitCount = 17;

//creating gameboard.
const createGrid = (size) =>{
    let r;
    let c = 0;	
	  for (r = 0; r < size; r++) {
		gameBoard[r] = [];
		for (c = 0; c < size; c++) {
		gameBoard[r][c] = `${alphabet[r]}${c + 1}`;
		}
    }
};
createGrid(alphabet.length);

//placing the ships
const shipPlacement = () => {
    while(shipsRemaining < ships.length){
       generateShips(ships) 
       shipsRemaining++
    }
};
shipPlacement();

//generating the ships.
const generateShips = (boat) => {
    let randomizeVeriticalOrHorzontal = Math.floor(Math.random() * 2);
    let direction = randomizeVeriticalOrHorzontal === 0 ? 10 : 1;
    let shipIndex =
      Math.floor(Math.random() * alphabet.length) *
      (alphabet.length - boat.units);
    let offGrid = false;
    let allShipCoordinates = [];
  
    //making sure that it stays withing the gameboard boundaries.
    if (
      direction === 1 &&
      (shipIndex % alphabet.length) + boat.units * direction >=
        gameBoard.flat().length
    ) {
      offGrid = true;
    }
    if (
      direction === 10 &&
      shipIndex + boat.units * direction >= alphabet.length * direction
    ) {
      offGrid = true;
    }
  
    if (offGrid) {
      generateShips(boat);
    } else {
      for (i = 0; i < boat.units; i++) {
        if (shipsCoord.flat().includes(shipIndex + direction * i)) {
          generateShips(boat);
        } else {
          allShipCoordinates.push(shipIndex + direction * i);
        }
      }
      if (allShipCoordinates.length === boat.units) {
        shipsCoord.push(allShipCoordinates);
      }
    }
  };
  
  for (let i = 0; i < ships.length; i++) {
    generateShips(ships[i]);
  }
//  console.log(shipsCoord.flat());

 function destructuring(shot) {
   let missile = shot.toUpperCase();
   let letter = missile.charAt(0);
   let letterConversion = alphabet.indexOf(letter);
   let number = parseInt(missile.charAt(1)) - 1;
   //If there is more than 2 characters in the action shot. ie A10;
   if(missile.length > 2){
     let ifnumberIsTen = parseInt(missile.charAt(2));
     let twoStepJoining = 9 + ifnumberIsTen;
     let yetAnotherStepJoining = "" + letterConversion + twoStepJoining;
     let finaltwoStepNumber = parseInt(yetAnotherStepJoining);
     return(finaltwoStepNumber);
   };
   let joining = "" + letterConversion + number;
   let finalNumber = parseInt(joining);
   return finalNumber;
   
 };
//  destructuring(askingForShot);

 function hitOrMiss(shot){
    if(shipsCoord.flat().includes(destructuring(shot))){
    shipUnitCount--;
    console.log(`Hit! There is ${shipUnitCount} spaces left to attack!`);
    // console.log(shipUnitCount);
    while(shipUnitCount > 0){
      firingShot();
    }
    if (shipUnitCount === 0){
      gameOver();
    }
     firingShot();
    } else {
    console.log(`Miss! Keep shooting!`);
    firingShot();
  }
}



//firing technique
const firingShot = () =>{
    let askingForShot = rs.question(`Please fire at a coordinate to strike! ie \`A1\``, {
      limit:  /^[a-j][1-9]0?$/i,
      limitMessage: 'That is not a proper location. Try again.'
    });
    // console.log(shotsTaken);
    // console.log(askingForShot);
      // if the shot taken by user does not include that of which has already been taken, this verifies if the shot is hit or miss. 
     if(shotsTaken.includes(destructuring(askingForShot))){
        console.log(`You have already fired at this location! Miss!`);
        firingShot();
      }else{ 
        shotsTaken.push(destructuring(askingForShot));
        hitOrMiss(askingForShot);
       };

    }
    firingShot();

  function gameOver(){
    let endGame = rs.keyInYN(`Great job! You have destroyed all units of every ship! Would you like to play again? `);
      if(endGame){
        gameStart();
      }
      else{
        console.log(`Okay, sounds good! I will be here when you are ready!`);
        gameStart();
      }
  }
 
  //console.log(gameBoard);
  
  } else {
  console.log(`Okay, sounds good! I will be here when you are ready!`);
  gameStart();
  }
}
gameStart();