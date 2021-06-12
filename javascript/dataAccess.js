///////////////////////Access data in the grid and modify them ///////////////////////////////////
export default class dataAccess{

    constructor() {
        this.table = document.getElementById("table");
    }

    create2dMatrix(){

        const gridMatrix = [];

        for(let i = 0; i < 3; i++){
            const subGrids = document.querySelectorAll(`.grid${i}`);

            for(let j = 0; j < 3; j++){
                
                let rowValues = [];

                subGrids.forEach((subGrid) => {
                    const tableRow = subGrid.childNodes[j];

                    tableRow.childNodes.forEach((tableData) => {
                        const inputField = tableData.childNodes[0];

                        if(inputField.value === ""){
                            rowValues.push(0);
                        }   
                        else{
                            rowValues.push(inputField.valueAsNumber);
                        }

                    })

                })

                gridMatrix.push(rowValues);

                rowValues = [];

            }

        }

        console.log(gridMatrix);

        return gridMatrix;
        
    }


    createCompletedBoard(gridMatrix){

        let rowNo = 0;

        for(let i = 0; i < 3; i++){

            const subGrids = document.querySelectorAll(`.grid${i}`);
            
            for(let j = 0; j < 3; j++){

                let cellNo = 0;

                subGrids.forEach((subGrid) => {

                    const tableRow = subGrid.childNodes[j];

                    tableRow.childNodes.forEach((tableData) => {

                        const inputField = tableData.childNodes[0];

                        inputField.value = gridMatrix[rowNo][cellNo];

                        cellNo++;

                    })

                })

                rowNo++;

            }
    

        }

    }



}