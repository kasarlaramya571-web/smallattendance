function markAttendance() {
    let name = document.getElementById("name").value;
    let status = document.getElementById("status").value;

    if (name == "") {
        alert("Please enter student name");
        return;
    }

    let table = document.getElementById("record");

    let row = table.insertRow();

    let nameCell = row.insertCell(0);
    let statusCell = row.insertCell(1);

    nameCell.innerHTML = name;
    statusCell.innerHTML = status;

    document.getElementById("name").value = "";
}
