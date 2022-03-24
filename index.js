const express = require('express')
const { prompt } = require('inquirer')
const mysql = require('mysql2')
const { printTable } = require('console-table-printer')

const app = express()

const db = mysql.createConnection('mysql://root:rootroot@localhost:3306/employees_db')

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
    .then(select => {
      let choice = select.choice
      switch (choice) {
        case "categoryEmployees":
          catEmployeeSub()
          break
        case "categoryRoles":
          catRolesSub()
          break
        case "categoryDepartment":
          catDepartmentSub()
          break
        case "categoryManager":
          catManagerSub()
          break
        case "quit":
          quit()
      }
    })
}

// <----------------------------------------->

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
          name: "View all Employees",
          value: "viewByEmployee1"
        },
        {
          name: "Add Employee",
          value: "addEmployee"
        },
        // {
        //   name: "Remove Employee",
        //   value: "removeEmployee"
        // },
        {
          name: "Update Employee Role",
          value: "updateEmployeeRole"
        },
        {
          name: "Update Employee Manager",
          value: "updateEmployeeManager"
        },
        {
          name: "<-Go Back<-",
          value: "goBack"
        }
      ]
    }
  ])
    .then(select => {
      let choice = select.choice
      switch (choice) {
        case "viewByEmployee1":
          viewByEmployee1()
          break
        case "addEmployee":
          addEmployee()
          break
        // case "removeEmployee":
        //   removeEmployee()
        //   break
        case "updateEmployeeRole":
          updateEmployeeRole()
          break
        case "updateEmployeeManager":
          updateEmployeeManager()
          break
        case "goBack":
          appPrompts()
      }
    })
}

// List of employees
function viewByEmployee1() {
  console.log(`
  List of Employees:
  `)
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) {
      console.log(err)
    }
    console.table(employees)
    catEmployeeSub()
  })
}

// Add employee
function addEmployee() {
  console.log(`
  Add Employee:
  `)
  prompt([
    {
      type: 'input',
      name: 'first_name',
      message: "New Employee's First Name?"
    },
    {
      type: 'input',
      name: 'last_name',
      message: "New Employee's Last Name?"
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'What is the Role ID to use?'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'What is the Manager ID for the new employee?'
    }
  ])
    .then(employee => {
      db.query('INSERT INTO employees SET ?', employee, err => {
        if (err) { console.log(err) }
        console.log(`
        The Employee has been added.
        `)
        catEmployeeSub()
      })
    })
}

// Remove employee
// function removeEmployee() {
//   console.log(`
//   Remove Employee:
//   `)
//   catEmployeeSub()
// }

// Update employee role
function updateEmployeeRole() {
  console.log(`
  Update Role:
  `)
  prompt([
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the Employee to update?'
    },
    {
      type: 'input',
      name: 'role_id',
      message: 'What Role ID do you want the employee to have?'
    }
  ])
    .then(employee => {
      db.query(`UPDATE employees SET ? WHERE id = ${employee.id}`, employee, err => {
        if (err) { console.log(err) }
        console.log(`
        The Emplyee's Role has been Updated.
        `)
        catEmployeeSub()
      })
    })
}

// Update employee manager
function updateEmployeeManager() {
  console.log(`
  Update Manager:
  `)
  prompt([
    {
      type: 'input',
      name: 'id',
      message: 'What is the ID of the Employee to update?'
    },
    {
      type: 'input',
      name: 'manager_id',
      message: 'What is the ID of the Manager you want the employee to have?'
    }
  ])
    .then(employee => {
      db.query(`UPDATE employees SET ? WHERE id = ${employee.id}`, employee, err => {
        if (err) { console.log(err) }
        console.log(`
        The Employee's Manager has been Updated.
        `)
        catEmployeeSub()
      })
    })
}

// <----------------------------------------->

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
          name: "Veiw all Roles",
          value: "viewByRole1"
        },
        {
          name: "Add Employee Role",
          value: "addEmployeeRole"
        },
        // {
        //   name: "Remove Employee Role",
        //   value: "removeEmployeeRole"
        // },
        {
          name: "<-Go Back<-",
          value: "goBack"
        }
      ]
    }
  ])
    .then(select => {
      let choice = select.choice
      switch (choice) {
        case "viewByRole1":
          viewByRole1()
          break
        case "addEmployeeRole":
          addEmployeeRole()
          break
        // case "removeEmployeeRole":
        //   removeEmployeeRole()
        //   break
        case "goBack":
          appPrompts()
      }
    })
}

// List of Roles
function viewByRole1() {
  console.log(`
  List of Roles:
  `)
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) {
      console.log(err)
    }
    console.table(roles)
    catRolesSub()
  })
}

// Add an employee role
function addEmployeeRole() {
  console.log(`
  Add Role:
  `)
  prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What role would you like to add?'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What would you like the salary to be?'
    },
    {
      type: 'input',
      name: 'department_id',
      message: 'What department ID would you like to use?'
    }
  ])
    .then(role => {
      db.query('INSERT INTO roles SET ?', role, err => {
        if (err) { console.log(err) }
        console.log(`
        The Role has been added.
        `)
        catRolesSub()
      })
    })
}

// Remove an employee role
// function removeEmployeeRole() {
//   console.log(`
//   Remove Role:
//   `)
//   catRolesSub()
// }

// <----------------------------------------->

// Department Sub-Category <------------->
function catDepartmentSub() {
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
          name: "View Departments",
          value: "viewByDepartment1"
        },
        {
          name: "Add Department",
          value: "addDepartment"
        },
        // {
        //   name: "Remove Department",
        //   value: "removeDepartment"
        // },
        // {
        //   name: "View Department Budgets",
        //   value: "viewDepartmentBudgets"
        // },
        {
          name: "<-Go Back<-",
          value: "goBack"
        }
      ]
    }
  ])
    .then(select => {
      let choice = select.choice
      switch (choice) {
        case "viewByDepartment1":
          viewByDepartment1()
          break
        case "addDepartment":
          addDepartment()
          break
        // case "removeDepartment":
        //   removeDepartment()
        //   break
        // case "viewDepartmentBudgets":
        //   viewDepartmentBudgets()
        //   break
        case "goBack":
          appPrompts()
      }
    })
}

// List of Departments
function viewByDepartment1() {
  console.log(`
  List of Departments:
  `)
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) {
      console.log(err)
    }
    console.table(departments)
    catDepartmentSub()
  })
}

// Add department
function addDepartment() {
  console.log(`
  Add Department:
  `)
  prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What department would you like to add?'
    }
  ])
    .then(department => {
      db.query('INSERT INTO departments SET ?', department, err => {
        if (err) { console.log(err) }
        console.log(`
        The Department has been added.
        `)
        catDepartmentSub()
      })
    })
}

// Remove Department
// function removeDepartment() {
//   console.log(`
//   Remove Department:
//   `)
//   catDeptartmentSub()
// }

// View Department Budgets
// function viewDepartmentBudgets() {
//   console.log(`
//   Departments and Budgets:
//   `)
//   catDeptartmentSub()
// }

// <----------------------------------------->

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
          name: "View All Employees",
          value: "viewByEmployee"
        },
        {
          name: "View Departments",
          value: "viewByDepartment"
        },
        {
          name: "View All Roles",
          value: "viewByRole"
        },
        {
          name: "<-Go Back<-",
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
        case "goBack":
          appPrompts()
      }
    })
}

// List of employees
function viewByEmployee() {
  console.log(`
  List of Employees:
  `)
  db.query('SELECT * FROM employees', (err, employees) => {
    if (err) {
      console.log(err)
    }
    console.table(employees)
    catManagerSub()
  })
}

// List of Departments
function viewByDepartment() {
  console.log(`
  List of Departments:
  `)
  db.query('SELECT * FROM departments', (err, departments) => {
    if (err) {
      console.log(err)
    }
    console.table(departments)
    catManagerSub()
  })
}

// List of Roles
function viewByRole() {
  console.log(`
  List of Roles:
  `)
  db.query('SELECT * FROM roles', (err, roles) => {
    if (err) {
      console.log(err)
    }
    console.table(roles)
    catManagerSub()
  })
}


// <----------------------------------------->

// Quit
function quit() {
  process.exit()
}

// <----------------------------------------->

// Kick it all off
start()