
function calculateRole(experience) {
    if (experience > 5) {
        return "Senior";
    } else if (experience >= 2 && experience <= 5) {
        return "Junior";
    } else {
        return "Trainee";
    }
}


function addDoctorRecord() {
    
    const name = document.getElementById("name").value;
    const doctorID = document.getElementById("docID").value;
    const specialization = document.getElementById("dept").value;
    const experience = parseInt(document.getElementById("exp").value);
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mbl").value;

    
    const role = calculateRole(experience);

    
    const table = document.querySelector("table tbody");
    const newRow = table.insertRow();

    
    const nameCell = newRow.insertCell(0);
    nameCell.textContent = name;

    const doctorIDCell = newRow.insertCell(1);
    doctorIDCell.textContent = doctorID;

    const specializationCell = newRow.insertCell(2);
    specializationCell.textContent = specialization;

    const experienceCell = newRow.insertCell(3);
    experienceCell.textContent = experience;

    const emailCell = newRow.insertCell(4);
    emailCell.textContent = email;

    const mobileCell = newRow.insertCell(5);
    mobileCell.textContent = mobile;

    const roleCell = newRow.insertCell(6);
    roleCell.textContent = role;

    const deleteCell = newRow.insertCell(7);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteCell.appendChild(deleteButton);

    
    document.getElementById("name").value = "";
    document.getElementById("docID").value = "";
    document.getElementById("dept").value = "";
    document.getElementById("exp").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mbl").value = "";

    
    deleteButton.addEventListener("click", function () {
        table.deleteRow(newRow.rowIndex);
    });
}


const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    
    addDoctorRecord();
});
