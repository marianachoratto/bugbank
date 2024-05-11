export class PaginaLogin {
  inputSenha = '[type="password"]';
  inputEmail = '[type="email"]';
  buttonAcessar = "[type='submit']";
  buttonRegistrar = "[type='button']";
  inputWaring = ".input__warging";

  escreverEmail(email) {
    cy.get(login.inputEmail).eq(0).type(email);
  }

  escreverSenha(senha) {
    cy.get(login.inputSenha).eq(0).type(senha);
  }
}
