// Módulos externos
const chalk = require("chalk");
const inquirer = require("inquirer");

// Módulos internos
const fs = require("fs");

operation();

function operation() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: [
          "Criar conta",
          "Consultar saldo",
          "Depositar",
          "Sacar",
          "Sair",
        ],
      },
    ])
    .then((answer) => {
      const action = answer["action"];

      if(action == 'Criar conta') {
        createAccount()
      }
      console.log(action);
    })
    .catch((err) => console.log(err));
}

// criar conta 

function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções a seguir'))
}