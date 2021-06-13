//////////////CREATING THE GRID//////////////////////////////////////////////////////////////////////////////////////
export default function createGrid(){
  
    const table = document.querySelector("table");

    const cellIndices = [];

    function createTable(){
      
      let gridNo = 0;
      
      for(let i = 1; i < 10; i++){
        addDiv(gridNo);
        
        if(i%3 === 0){
          const line_break = document.createElement("BR")
          table.appendChild(line_break);
          gridNo++;
        }
        
      }
      
    }

    // This is to seperate 3*3 grids
    function addDiv(gridNo){
      
        const threeByThreeGrid = document.createElement("div");
      
        threeByThreeGrid.className = `grid${gridNo}`;

      for(let i = 0; i < 3; i++){
        addTableRow(threeByThreeGrid);
      }
      
      table.appendChild(threeByThreeGrid);
      
    }

    function addTableRow(threeByThreeGrid){
      
      const tableRow = document.createElement("tr");
      
      for(let i = 0; i < 3; i++){
        addTableData(tableRow);
      }
      
      threeByThreeGrid.appendChild(tableRow)
    }

    // type="number" id="quantity" name="quantity" min="1" max="5"

    function addTableData(tableRow){
      const tableData = document.createElement("td");
      
      const inputField = document.createElement("input");
      
      
    inputField.setAttribute("type","number");
      inputField.setAttribute("max","9");
      inputField.setAttribute("maxlength","3");
      inputField.setAttribute("min","1");
      tableData.appendChild(inputField);
      
      tableRow.appendChild(tableData);
    }

    createTable();

    document.getElementById('loading').remove();

}