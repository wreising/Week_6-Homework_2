const express = require('express')
const { prompt } = require('inquirer')

const app = express()

const departmentsRouter = require("./routes/departments")
const employeesRouter = require("./routes/employees")
const managersRouter = require("./routes/managers")
const rolesRouter = require("./routes/roles")

app.use("/departments", departmentsRouter)
app.use("/employees", employeesRouter)
app.use("/managers", managersRouter)
app.use("/roles", rolesRouter)

function start() {
  console.log(`
    ________________________________________
    |                                      |
    |     Welcome to: Employee Tracker     |
    |______________________________________| 

  `)
  appPrompts()
}

function appPrompts() {
  console.log("")
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

// Quit
function quit() {
  process.exit()
}

// Kick everything off
start()