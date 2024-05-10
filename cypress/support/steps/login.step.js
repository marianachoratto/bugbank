import {
  Given,
  When,
  Then,
  Before,
  After,
} from "@badeball/cypress-cucumber-preprocessor";
import { PaginaLogin } from "../page/paginaLogin";
import { PaginaCadastro } from "../page/paginaCadastro";
let login = new PaginaLogin();
let cadastro = new PaginaCadastro();
import { fakerPT_BR } from "@faker-js/faker";
var email = fakerPT_BR.internet.email();
var nome = fakerPT_BR.person.fullName();
let senha = fakerPT_BR.internet.password();

Given("que estou na página de login", function () {
  cy.visit("https://bugbank.netlify.app/");
  cy.get(login.buttonRegistrar).eq(1).click();

  cy.get(cadastro.inputEmail).eq(1).click({ force: true });
  cy.get(cadastro.inputEmail).eq(1).type(email);

  cy.get(cadastro.inputNome).click({ force: true });
  cy.get(cadastro.inputNome).type(nome);

  cy.log(senha);
  cy.get(cadastro.inputSenha).eq(1).click({ force: true });
  cy.get(cadastro.inputSenha).eq(1).type(senha);

  cy.log(senha);
  cy.get(cadastro.inputConfirmacaoSenha).click({ force: true });
  cy.get(cadastro.inputConfirmacaoSenha).type(senha);

  cy.get(cadastro.buttonCadastrar).eq(1).click({ force: true });
});

Given("existe um usuário cadastrado", function () {
  // cy.get(login.buttonAcessar).eq(0).click();
});

When("preencho o email com formato válido", function () {
  // cy.get(login.inputEmail).eq(0).type("oi");
  // cy.get(login.inputSenha).eq(0).type("oi");
});
