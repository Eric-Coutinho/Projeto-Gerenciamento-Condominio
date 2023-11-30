# Documentação do Aplicativo de Gerenciamento de Condomínio

## Introdução

O aplicativo de gerenciamento de condomínio foi desenvolvido para facilitar a administração e interação entre moradores e síndicos. Este documento fornece informações necessárias para a instalação, configuração e uso do aplicativo.

## Requisitos do Sistema

- Visual Studio Code
- Extensões do VS Code: Extension Pack for Java, Spring Boot Extension Pack, MongoDB for VS Code

## Instalação
### No VS Code:
1. Clone o repositório.
2. No terminal, navegue até a pasta do backend usando `cd ./condominioManagementBack`.
3. Execute o arquivo `GerenciamentocondominioapiApplication.java`.
4. Em outro terminal, navegue até a pasta do frontend usando `cd ./condominioManagementFront`.
5. Execute `npm install` para instalar as dependências.
6. Execute `npx expo start` para iniciar o aplicativo.

## Estrutura do Projeto

- `/condominioManagementBack`: Contém o backend em Java.
- `/condominioManagementFront`: Contém o frontend em React Native.

## Configuração do Backend

1. Java e Spring Boot são usados para o backend.
2. Conecte-se ao MongoDB para armazenamento de dados.
3. Execute o servidor backend.

## Configuração do Frontend

1. React Native e React são usados para o frontend.
2. Execute `npm install` para instalar as dependências.
3. Inicie o aplicativo com `npx expo start`.

## Uso do Aplicativo

- Páginas disponíveis: Login, Cadastro de Moradores, Informações dos moradores cadastrados, Geração de Boletos, Reservas, Assembleias, Denúncias.
- Diferentes permissões para moradores e síndicos.
- Use o aplicativo na web em [localhost:8080](http://localhost:8080).

## Fluxo de Funcionalidades

### Informações dos Moradores

- Lista com todos os moradores cadastrados e algumas informações como email, número do apartamento e número do bloco
- Síndico consegue visualizar informações confidenciais como CPF e tem a opção de remover moradores.

### Login

- Moradores e síndicos têm credenciais diferentes.

### Cadastro de Moradores

- Apenas síndicos podem acessar e cadastrar novos moradores.

### Geração de Boletos

- Página que gera número de boletos com QR code.

### Reservas

- Moradores podem reservar churrasqueiras e salões de festas.

### Agendamentos

- Síndicos podem agendar assembleias, eleições e coleta de lixo.

### Denúncias

- Moradores podem registrar denúncias.
- Não está implementado de forma completa, não se conecta com o banco de dados

## Resolução de Problemas

- Problema comum: **Erro de Conexão com o MongoDB**
  - Solução: Verifique as configurações de conexão no arquivo `application.properties`.

- Problema comum: **Aplicativo não inicia no Expo**
  - Solução: Certifique-se de ter todas as dependências instaladas e execute `npm install` novamente.

## Atualizações Futuras

- Melhorias planejadas: Ligar a Página de Denúncias com o Banco de Dados, Criar a Página com Informações das Garagens, Página com os Registros de Segurança, Ligar o Pagamento de Boletos com um Sistema Bancário funcional.
