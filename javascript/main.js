import createGrid from "./implementation.js";
import solution from './solution.js';
import dataAccess from "./dataAccess.js";

createGrid();

const solveButton = document.getElementById("solve");

let finishedGrid;

solveButton.addEventListener("click", () => {

    const table = document.getElementById("table");
    
    const gridData = new dataAccess();

    const starterGrid = gridData.create2dMatrix();

    finishedGrid = solution(starterGrid);

    if(typeof(finishedGrid) === "string"){
        alert("Couldn't find a solution");
        clearBoard();
        return;
    }

    gridData.createCompletedBoard(finishedGrid);

})


////////////////////////Restrict length of input/////////////////////////

const inputFields = document.querySelectorAll("input");

for(let inputField of inputFields){

    inputField.addEventListener("input", () => {

        if(inputField.valueAsNumber > 9){
            inputField.value = inputField.value[0];
        }

        //////////Prevent e from being an input////////////
        if(inputField.value === ""){
            inputField.value = "";
        }

    })

}


/////////////////Clear board/////////////////////////////////

function clearBoard(){
    for(let inputField of inputFields){

        inputField.value = "";
    
    }
}

const clearButton = document.getElementById("clear");

clearButton.addEventListener("click", () => {

    clearBoard();

})
