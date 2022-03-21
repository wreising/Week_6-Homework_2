const router = require("express").Router()

// Role Sub-Category <------------->
function catRolesSub() {
  console.log("")
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "Add Employee Role",
          value: "addEmployeeRole"
        },
        {
          name: "Remove Employee Role",
          value: "removeEmployeeRole"
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
        case "addEmployeeRole":
          addEmployeeRole()
          break
        case "removeEmployeeRole":
          removeEmployeeRole()
          break
        case "goBack":
          appPrompts()
      }
    })
}

// Add an employee role
function addEmployeeRole() {
  console.log("-Adding Role")
  catRolesSub()
}

// Remove an employee role
function removeEmployeeRole() {
  console.log("-Removing Role")
  catRolesSub()
}

module.exports = router