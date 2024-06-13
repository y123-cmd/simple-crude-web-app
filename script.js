var selectedRow= null;
function onFormSubmit(){
event.preventDefault();
var formData = readFormData();
if(selectedRow === null){
    insertNewRecord(formData);
}
else{
updateRecord(formData);
}
resetForm();
}
function readFormData() {
    var formData = {};
    formData["productnumber"] = document.getElementById("productnumber").value;
    formData["product"] = document.getElementById("product").value;
    formData["qty"] = document.getElementById("qty").value;
    formData["perprice"] = document.getElementById("perprice").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.productnumber;
    var cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.product;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.qty;
    var cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.perprice;
    var cell5 = newRow.insertCell(4);
    cell5.innerHTML = '<button onClick= "onEdit(this)"> Edit</button> <button onClick= "onDelete(this)">Delete</button>'
}

function onEdit(td){
selectedRow= td.parentElement.parentElement;
document.getElementById('productnumber').value= selectedRow.cells[0].innerHTML;
document.getElementById('product').value= selectedRow.cells[1].innerHTML;
document.getElementById('qty').value= selectedRow.cells[2].innerHTML;
document.getElementById('perprice').value= selectedRow.cells[3].innerHTML;
}

function updateRecord(formData){
selectedRow.cells[0].innerHTML= formData.productnumber;
selectedRow.cells[1].innerHTML = formData.product;
selectedRow.cells[2].innerHTML = formData.qty;
selectedRow.cells[3].innerHTML = formData.perprice;

}

function onDelete(td){
    if(confirm('do you want to delete this record?')){
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);

    resetForm();
}
}

function resetForm(){
    document.getElementById('productnumber').value='';
    document.getElementById('product').value='';
    document.getElementById('qty').value='';
    document.getElementById('perprice').value='';
    }

