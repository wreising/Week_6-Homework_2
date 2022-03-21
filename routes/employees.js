const router = require("express").Router()

// Employee Sub-Category <------------->
function catEmployeeSub() {
  console.log("")
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "Add Employee",
          value: "addEmployee"
        },
        {
          name: "Remove Employee",
          value: "removeEmployee"
        },
        {
          name: "Update Employee Role",
          value: "updateEmployeeRole"
        },
        {
          name: "Update Employee Department",
          value: "updateEmployeeDepartment"
        },
        {
          name: "Update Employee Manager",
          value: "updateEmployeeManager"
        },
        {
          name: "<-Go Back",
          value: "goBack"
        }
      ]
    }
  ])
    .then(res => {
      let choice = res.choice
      switch (choice) {
        case "addEmployee":
          addEmployee()
          break
        case "removeEmployee":
          removeEmployee()
          break
        case "updateEmployeeRole":
          updateEmployeeRole()
          break
        case "updateEmployeeDepartment":
          updateEmployeeDepartment()
          break
        case "updateEmployeeManager":
          updateEmployeeManager()
          break
        case "goBack":
          appPrompts()
      }
    })
}

// Add employee
function addEmployee() {
  console.log("-Adding Employee")
  catEmployeeSub()
}

// Remove employee
function removeEmployee() {
  console.log("-Removing Employee")
  catEmployeeSub()
}

// Update employee role
function updateEmployeeRole() {
  console.log("-Updating Role")
  catEmployeeSub()
}

// Update employee department
function updateEmployeeDepartment() {
  console.log("-Updating Department")
  catEmployeeSub()
}

// Update employee manager
function updateEmployeeManager() {
  console.log("-Updating Manager")
  catEmployeeSub()
}

module.exports = router