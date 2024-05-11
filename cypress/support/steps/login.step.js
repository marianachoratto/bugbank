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
});

Given("existe um usuário cadastrado", function () {
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

  cy.get(cadastro.buttonFechar).click();
});

When("preencho o email com formato válido", function () {
  cy.get(login.inputEmail).eq(0).type(email);
});

When("preencho a senha com formato válido", function () {
  cy.get(login.inputSenha).eq(0).type(senha);
});

When("confirmo a operação", function () {
  cy.get(login.buttonAcessar).eq(0).click({ force: true });
});

Then("sou redirecionado para a página Home do site", function () {
  cy.url().should("equal", "https://bugbank.netlify.app/home");
});

When("não preencho o email", function () {});

When("preencho a senha", function () {
  cy.get(login.inputSenha).eq(0).type(senha);
});

When("preencho o email", function () {
  cy.get(login.inputEmail).eq(0).type(email);
});

When("não preencho a senha", function () {});

Then("deve aparecer uma mensagem que informa {string}", function (mensagem) {
  cy.contains(mensagem);
});

When("preencho o email {string}", function (emailInválido) {
  cy.get(login.inputEmail).eq(0).type(emailInválido);
});

Then("não deve ser possível adentrar no site", function () {
  cy.url().should("not.equal", "https://bugbank.netlify.app/home");
});

When("informo um email não cadastrado", function () {
  cy.get(login.inputEmail).eq(0).type("bolinha993823");
});
