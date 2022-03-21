const router = require("express").Router()

// Department Sub-Category <------------->
function catDeptartmentSub() {
  console.log("")
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "Add Department",
          value: "addDepartment"
        },
        {
          name: "Remove Department",
          value: "removeDepartment"
        },
        {
          name: "View Department Budgets",
          value: "viewDepartmentBudgets"
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
        case "addDepartment":
          addDepartment()
          break
        case "removeDepartment":
          removeDepartment()
          break
        case "viewDepartmentBudgets":
          viewDepartmentBudgets()
          break
        case "goBack":
          appPrompts()
      }
    })
}

// Add department
function addDepartment() {
  console.log("-Adding Department")
  catDeptartmentSub()
}

// Remove Department
function removeDepartment() {
  console.log("-Removing Department")
  catDeptartmentSub()
}

// View Department Budgets
function viewDepartmentBudgets() {
  console.log("-List of Departments and Budgets")
  catDeptartmentSub()
}

module.exports = router