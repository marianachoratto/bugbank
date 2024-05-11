#language: pt
Funcionalidade: Autenticar usuário
Contexto: login do usuário 
Dado que estou na página de login 
E existe um usuário cadastrado

@ignore
Cenário: logar usuário com sucesso
Quando preencho o email com formato válido
E preencho a senha com formato válido
E confirmo a operação
Então sou redirecionado para a página Home do site 

@ignore
Cenário: Não deve ser possível autenticar se o usuário não preencher o email 
Quando não preencho o email 
E preencho a senha 
E confirmo a operação 
Então deve aparecer uma mensagem que informa "É campo obrigatório"

@ignore
Cenário: Não deve ser possível autenticar se o usuário não preencher a senha 
Quando preencho o email 
E não preencho a senha 
E confirmo a operação
Então deve aparecer uma mensagem que informa "É campo obrigatório"

#bug: Aparece é campo obrigatória
# Cenário: Não deve ser possível autenticar se o usuário não preencher os campos de senha e email
# Quando não preencho os campos de email e senha
# E confirmo a operação
# Então deve aparecer mensagem que informa "Usuário e senha precisam ser preenchidos" em ambos os campos

@ignore
Esquema do Cenário: Não deve ser possível autenticar com email inválido 
Quando preencho o email "<emailInválido>"
E preencho a senha
E confirmo a operação
Então não deve ser possível adentrar no site

Exemplos:
| emailInválido   |
| @.com           |
| 12345           |
| sabrina@gmail   |
|sabrina#gmail.com|
| i@t.co          |
| i@.com          |


Cenário: Não deve ser possível autenticar com usuário não cadastrado
Quando informo um email não cadastrado 
E preencho a senha 
E confirmo a operação 
Então não deve ser possível adentrar no site
