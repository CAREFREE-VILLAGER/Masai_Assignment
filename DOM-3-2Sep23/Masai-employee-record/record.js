
let employeeRecords = [];


function calculateRole(experience) {
  if (experience > 5) {
    return "Senior";
  } else if (experience >= 2 && experience <= 5) {
    return "Junior";
  } else {
    return "Fresher";
  }
}


function addEmployeeRecord() {
  
  const name = document.getElementById("name").value;
  const employeeID = document.getElementById("employeeID").value;
  const department = document.getElementById("department").value;
  const experience = parseFloat(document.getElementById("exp").value);
  const email = document.getElementById("email").value;
  const mobile = document.getElementById("mbl").value;

  
  const role = calculateRole(experience);

  
  const newRecord = {
    name: name,
    employeeID: employeeID,
    department: department,
    experience: experience,
    email: email,
    mobile: mobile,
    role: role,
  };

  
  employeeRecords.push(newRecord);

  
  displayEmployeeRecords();

  
  clearFormInputs();
}


function displayEmployeeRecords() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  
  for (let record of employeeRecords) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${record.name}</td>
      <td>${record.employeeID}</td>
      <td>${record.department}</td>
      <td>${record.experience}</td>
      <td>${record.email}</td>
      <td>${record.mobile}</td>
      <td>${record.role}</td>
      <td><button onclick="deleteEmployeeRecord('${record.employeeID}')">Delete</button></td>
    `;
    tbody.appendChild(row);
  }
}


function clearFormInputs() {
  document.getElementById("name").value = "";
  document.getElementById("employeeID").value = "";
  document.getElementById("department").value = "";
  document.getElementById("exp").value = "";
  document.getElementById("email").value = "";
  document.getElementById("mbl").value = "";
}


function deleteEmployeeRecord(employeeID) {
  
  const index = employeeRecords.findIndex((record) => record.employeeID === employeeID);

  
  if (index !== -1) {
    employeeRecords.splice(index, 1);
  }

  
  displayEmployeeRecords();
}


document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
  addEmployeeRecord();
});
