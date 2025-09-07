# Fluxo de Cadastro e Login - Adopet

Este documento descreve os fluxos de **Cadastro** e **Login** de um usuário no site **Adopet**, contemplando o **caminho feliz** e cenários de **falha**.

---

## 📝 Funcionalidade: Cadastro de Usuário

---

### 🎯 Cenário 1: Realizar cadastro com sucesso (Caminho Feliz)

#### 🚶 Passos do Usuário

1. O usuário acessa a página de **Cadastro**.
2. O usuário preenche o campo **Nome**.
3. O usuário preenche o campo **E-mail** com um endereço válido.
4. O usuário preenche o campo **Senha** com uma senha válida.
5. O usuário preenche o campo **Confirmação de Senha** repetindo a mesma senha.
6. O usuário clica no botão **Cadastrar**.

#### ✅ Resultados Esperados

- O sistema processa as informações fornecidas.
- O cadastro é realizado com sucesso.

#### 📌 Regras de Negócio

- **E-mail** e **Senha** são campos obrigatórios para efetuar o cadastro.
- A confirmação de senha deve ser **idêntica** à senha informada.

---

### ⚠️ Cenário 2: Falha ao tentar cadastrar (Campos obrigatórios em branco)

#### 🚶 Passos do Usuário

1. O usuário acessa a página de **Cadastro**.
2. O usuário deixa os campos obrigatórios (**Nome, E-mail, Senha, Confirmação de Senha**) em branco.
3. O usuário clica no botão **Cadastrar**.

#### ✅ Resultados Esperados

- O sistema valida que os campos obrigatórios estão em branco.
- O sistema exibe mensagens de erro indicando que os campos obrigatórios devem ser preenchidos.

---

## 📝 Funcionalidade: Login de Usuário

---

### 🎯 Cenário 3: Login no sistema com sucesso

#### 🚶 Passos do Usuário

1. O usuário acessa a página de **Login**.
2. O usuário insere seu **E-mail** e **Senha** cadastrados (presentes no arquivo **usarnames**).
3. O usuário clica no botão **Entrar**.

#### ✅ Resultados Esperados

- O sistema autentica as credenciais fornecidas.
- O usuário é redirecionado para a página **/home**.

---

### ⚠️ Cenário 4: Falha no login do sistema

#### 🚶 Passos do Usuário

1. O usuário acessa a página de **Login**.
2. O usuário insere um **E-mail** e uma **Senha** fora do padrão aceito nos campos correspondentes.
3. O usuário clica no botão **Entrar**.

#### ✅ Resultados Esperados

- O sistema valida as credenciais fornecidas.
- O sistema exibe mensagens de erro específicas para os campos inválidos, como:
  - **"Por favor, verifique o e-mail digitado."**
  - **"A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres."**

#### 📌 Regras de Negócio

- O **E-mail** deve ter um formato válido.
- A **Senha** deve conter:
  - Pelo menos **uma letra maiúscula**.
  - Pelo menos **um número**.
  - Comprimento entre **6 e 15 caracteres**.
