const express = require('express')
const { prompt } = require('inquirer')
const mysql = require('mysql2')

const app = express()

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kissinger",
  database: "employees_db"
})

const db = mysql.createConnection('mysql://root:kissinger@localhost:3306/employees_db')

function start() {
  console.log(`

     ______________________________________
    |                                      |
    |     Welcome to: Employee Tracker     |
    |______________________________________| 

  `)
  appPrompts()
}

function appPrompts() {
  console.log(`
     ______________________________________
    |                                      |
    |              Main Menu               |
    |______________________________________| 
  `)
  prompt([
    {
      type: "list",
      name: "choice",
      message: "Choose Catagory:",
      choices: [
        {
          name: "Employee Options",
          value: "categoryEmployees"
        },
        {
          name: "Edit Roles",
          value: "categoryRoles"
        },
        {
          name: "Edit Department",
          value: "categoryDepartment"
        },
        {
          name: "Manager Options",
          value: "categoryManager"
        },
        {
          name: "Quit",
          value: "quit"
        }
      ]
    }
  ])
    .then(res => {
      let choice = res.choice
      switch (choice) {
        case "categoryEmployees":
          catEmployeeSub()
          break
        case "categoryRoles":
          catRolesSub()
          break
        case "categoryDepartment":
          catDeptartmentSub()
          break
        case "categoryManager":
          catManagerSub()
          break
        case "quit":
          quit()
      }
    })
}

// Employee Sub-Category <------------->
function catEmployeeSub() {
  console.log(`
     ______________________________________
    |                                      |
    |          Employee Sub-Menu           |
    |______________________________________| 
    
    `)
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

// Role Sub-Category <------------->
function catRolesSub() {
  console.log(`
     ______________________________________
    |                                      |
    |        Employee Role Sub-Menu        |
    |______________________________________| 
    
    `)
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

// Department Sub-Category <------------->
function catDeptartmentSub() {
  console.log(`
     ______________________________________
    |                                      |
    |         Departments Sub-Menu         |
    |______________________________________| 
    
    `)
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

// Manager Sub-Category <------------->
function catManagerSub() {
  console.log(`
     ______________________________________
    |                                      |
    |          Managers Sub-Menu           |
    |______________________________________| 
    
  `)
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

// Quit
function quit() {
  process.exit()
}

// Kick it all off
start()