function agregarCarro() {
    let placa = document.getElementById("placa").value;
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let color = document.getElementById("color").value;
    
    if (placa && marca && modelo && color) {
        let table = document.getElementById("carTable").getElementsByTagName('tbody')[0];
        let row = table.insertRow();
        row.insertCell(0).innerText = placa;
        row.insertCell(1).innerText = marca;
        row.insertCell(2).innerText = modelo;
        row.insertCell(3).innerText = color;
        
        
        document.getElementById("placa").value = "";
        document.getElementById("marca").value = "";
        document.getElementById("modelo").value = "";
        document.getElementById("color").value = "";
    }
}

function eliminarFila(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function borrarCarro() {
    let placaBorrar = document.getElementById("borrarPlaca").value;
    let table = document.getElementById("carTable").getElementsByTagName('tbody')[0];
    let rows = table.getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].cells[0].innerText === placaBorrar) {
            table.deleteRow(i);
            break;
        }
    }
    document.getElementById("borrarPlaca").value = "";
}