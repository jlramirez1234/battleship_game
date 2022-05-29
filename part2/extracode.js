// const interchange = [
//     {label: `A1`, index: 0, isHit: false},
//     {label: `A2`, index: 1, isHit: false},
//     {label: `A3`, index: 2, isHit: false},
//     {label: `A4`, index: 3, isHit: false},
//     {label: `A5`, index: 4, isHit: false},
//     {label: `A6`, index: 5, isHit: false},
//     {label: `A7`, index: 6, isHit: false},
//     {label: `A8`, index: 7, isHit: false},
//     {label: `A9`, index: 8, isHit: false},
//     {label: `A10`, index: 9, isHit: false},
//     {label: `B1`, index: 10, isHit: false},
//     {label: `B2`, index: 11, isHit: false},
//     {label: `B3`, index: 12, isHit: false},
//     {label: `B4`, index: 13, isHit: false},
//     {label: `B5`, index: 14, isHit: false},
//     {label: `B6`, index: 15, isHit: false},
//     {label: `B7`, index: 16, isHit: false},
//     {label: `B8`, index: 17, isHit: false},
//     {label: `B9`, index: 18, isHit: false},
//     {label: `B10`, index: 19, isHit: false},
//     {label: `C1`, index: 20, isHit: false},
//     {label: `C2`, index: 21, isHit: false},
//     {label: `C3`, index: 22, isHit: false},
//     {label: `C4`, index: 23, isHit: false},
//     {label: `C5`, index: 24, isHit: false},
//     {label: `C6`, index: 25, isHit: false},
//     {label: `C7`, index: 26, isHit: false},
//     {label: `C8`, index: 27, isHit: false},
//     {label: `C9`, index: 28, isHit: false},
//     {label: `C10`, index: 29, isHit: false},
//     {label: `D1`, index: 30, isHit: false},
//     {label: `D2`, index: 31, isHit: false},
//     {label: `D3`, index: 32, isHit: false},
//     {label: `D4`, index: 33, isHit: false},
//     {label: `D5`, index: 34, isHit: false},
//     {label: `D6`, index: 35, isHit: false},
//     {label: `D7`, index: 36, isHit: false},
//     {label: `D8`, index: 37, isHit: false},
//     {label: `D9`, index: 38, isHit: false},
//     {label: `D10`, index: 39, isHit: false},
//     {label: `E1`, index: 40, isHit: false},
//     {label: `E2`, index: 41, isHit: false},
//     {label: `E3`, index: 42, isHit: false},
//     {label: `E4`, index: 43, isHit: false},
//     {label: `E5`, index: 44, isHit: false},
//     {label: `E6`, index: 45, isHit: false},
//     {label: `E7`, index: 46, isHit: false},
//     {label: `E8`, index: 47, isHit: false},
//     {label: `E9`, index: 48, isHit: false},
//     {label: `E10`, index: 49, isHit: false},
//     {label: `F1`, index: 50, isHit: false},
//     {label: `F2`, index: 51, isHit: false},
//     {label: `F3`, index: 52, isHit: false},
//     {label: `F4`, index: 53, isHit: false},
//     {label: `F5`, index: 54, isHit: false},
//     {label: `F6`, index: 55, isHit: false},
//     {label: `F7`, index: 56, isHit: false},
//     {label: `F8`, index: 57, isHit: false},
//     {label: `F9`, index: 58, isHit: false},
//     {label: `F10`, index: 59, isHit: false},
//     {label: `G1`, index: 60, isHit: false},
//     {label: `G2`, index: 61, isHit: false},
//     {label: `G3`, index: 62, isHit: false},
//     {label: `G4`, index: 63, isHit: false},
//     {label: `G5`, index: 64, isHit: false},
//     {label: `G6`, index: 65, isHit: false},
//     {label: `G7`, index: 66, isHit: false},
//     {label: `G8`, index: 67, isHit: false},
//     {label: `G9`, index: 68, isHit: false},
//     {label: `G10`, index: 69, isHit: false},
//     {label: `H1`, index: 70, isHit: false},
//     {label: `H2`, index: 71, isHit: false},
//     {label: `H3`, index: 72, isHit: false},
//     {label: `H4`, index: 73, isHit: false},
//     {label: `H5`, index: 74, isHit: false},
//     {label: `H6`, index: 75, isHit: false},
//     {label: `H7`, index: 76, isHit: false},
//     {label: `H8`, index: 77, isHit: false},
//     {label: `H9`, index: 78, isHit: false},
//     {label: `H10`, index: 79, isHit: false},
//     {label: `I1`, index: 80, isHit: false},
//     {label: `I2`, index: 81, isHit: false},
//     {label: `I3`, index: 82, isHit: false},
//     {label: `I4`, index: 83, isHit: false},
//     {label: `I5`, index: 84, isHit: false},
//     {label: `I6`, index: 85, isHit: false},
//     {label: `I7`, index: 86, isHit: false},
//     {label: `I8`, index: 87, isHit: false},
//     {label: `I9`, index: 88, isHit: false},
//     {label: `I10`, index: 89, isHit: false},
//     {label: `J1`, index: 90, isHit: false},
//     {label: `J2`, index: 91, isHit: false},
//     {label: `J3`, index: 92, isHit: false},
//     {label: `J4`, index: 93, isHit: false},
//     {label: `J5`, index: 94, isHit: false},
//     {label: `J6`, index: 95, isHit: false},
//     {label: `J7`, index: 96, isHit: false},
//     {label: `J8`, index: 97, isHit: false},
//     {label: `J9`, index: 98, isHit: false},
//     {label: `J10`, index: 99, isHit: false},
    
// ];

   //matching the given answer from *askingForShot* to that of the numbers. A3 shoots out 02 or just 2.
    // function destructuring(shot) {
    //   let missile = shot.toUpperCase();
    //   let letter = missile.charAt(0);
    //   let letterConversion = alphabet.indexOf(letter);
    //   let number = parseInt(missile.charAt(1)) - 1;
    //   //If there is more than 2 characters in the action shot. ie A10;
    //   if(missile.length > 2){
    //     let ifnumberIsTen = parseInt(missile.charAt(2));
    //     let twoStepJoining = 9 + ifnumberIsTen;
    //     let yetAnotherStepJoining = "" + letterConversion + twoStepJoining;
    //     let finaltwoStepNumber = parseInt(yetAnotherStepJoining);
    //     return(finaltwoStepNumber);
    //   };
    //   let joining = "" + letterConversion + number;
    //   let finalNumber = parseInt(joining);
    //   return finalNumber;
      
    // };
    // destructuring(askingForShot);


    const convertShot = (shot) => {
        const letter = shot.charAt(0);
        const number = shot.substring(1);
        return Number(`${alphabet.indexOf(letter)}${+number - 1}`)
    }
    convertShot(askingForShot);
  
    console.log(convertShot(askingForShot));