///////////////////////Access data in the grid and modify them ///////////////////////////////////
export default class dataAccess{

    constructor() {
        this.N = 9;
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

        return gridMatrix;
        
    }

    boardIsInvalid(grid){

        let col = 0;

        let row = 0;

        let num = 0;

        let endOfBoard = false;

        let N = 9;

        while(!endOfBoard){

            if (row === N - 1 && col === N)
                break;

            // Check if column value  becomes 9 ,
            // we move to next row
            // and column start from 0
            if (col === N)
            {
                row++;
                col = 0;
            }

            num = grid[row][col];
   
            if(num === 0){
                col++;
                continue;
            }

            // Check if we find the same num
            // in the similar row , we
            // return false
            for(let x = 0; x <= 8; x++)
                if (grid[row][x] === num)
                    {
                        if( x !== col)
                            return true;
                    }
        
            // Check if we find the same num
            // in the similar column ,
            // we return false
            for(let x = 0; x <= 8; x++)
                if (grid[x][col] === num)
                    {
                        if(x !== row)
                            return true;
        
                    }
            // Check if we find the same num
            // in the particular 3*3
            // matrix, we return false
            let startRow = row - row % 3,
                startCol = col - col % 3;
                
            for(let i = 0; i < 3; i++)
                for(let j = 0; j < 3; j++)
                    if (grid[i + startRow][j + startCol] == num)
                        
                        {
                            if(i + startRow !== row && i + startCol !== col){

                                return true;

                            }

                        }
        
            col++;
        }

        return false;

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