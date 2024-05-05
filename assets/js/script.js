function addRow() {
    var table = document.getElementById("myTable");
    var newRow = table.insertRow(table.rows.length);
  
    var nameCell = newRow.insertCell(0);
    var ageCell = newRow.insertCell(1);
    var deleteCell = newRow.insertCell(2);
  
    var inputName = document.getElementById("inputName").value;
    var inputAge = document.getElementById("inputAge").value;
  
    nameCell.innerHTML = inputName;
    ageCell.innerHTML = inputAge;
    
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete Row";
    deleteButton.className =" delete-button"
    
    deleteButton.onclick = function() {
      table.deleteRow(newRow.rowIndex);
    };
    
    deleteCell.appendChild(deleteButton);
    document.getElementById("inputName").value = "";
    document.getElementById("inputAge").value = "";
  }