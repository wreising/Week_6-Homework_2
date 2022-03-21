const router = require("express").Router()

// Manager Sub-Category <------------->
function catManagerSub() {
  console.log("")
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View by Employee",
          value: "viewByEmployee"
        },
        {
          name: "View by Department",
          value: "viewByDepartment"
        },
        {
          name: "View by Role",
          value: "viewByRole"
        },
        {
          name: "View by Manager",
          value: "viewByManager"
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
        case "viewByEmployee":
          viewByEmployee()
          break
        case "viewByDepartment":
          viewByDepartment()
          break
        case "viewByRole":
          viewByRole()
          break
        case "viewByManager":
          viewByManager()
          break
        case "goBack":
          appPrompts()
      }
    })
}

// List by employee
function viewByEmployee() {
  console.log("-List by Employee")
  catManagerSub()
}

// List by Department
function viewByDepartment() {
  console.log("-List by Department")
  catManagerSub()
}

// List by Role
function viewByRole() {
  console.log("-List by Role")
  catManagerSub()
}

// List by Manager
function viewByManager() {
  console.log("-List by Manager")
  catManagerSub()
}

module.exports = router