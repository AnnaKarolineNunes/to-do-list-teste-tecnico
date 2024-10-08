# Taskly - Sistema de Gerenciamento de Tarefas

O Taskly é um sistema de gerenciamento de tarefas desenvolvido como uma aplicação web full-stack. Ele permite que usuários registrem, editem, excluam e organizem suas tarefas em um formato intuitivo de calendário e lista. A aplicação é dividida em backend e frontend, utilizando tecnologias modernas para fornecer uma experiência eficiente e fácil de usar.
### [Clique aqui ](https://taskly-gerenciador.netlify.app/) para visitar o site da Taskly . 

### Para acessar o repositório do frontend da aplicação, [clique aqui](https://github.com/AnnaKarolineNunes/taskly-frontend) .

## Funcionalidades

- **Cadastro de Usuários** : Usuários podem se registrar com email e senha.
- **Login de Usuários** : Usuários registrados podem fazer login no sistema.
- **Criação de Tarefas** : Usuários podem criar tarefas com título, descrição e horário.
- **Edição de Tarefas** : Usuários podem editar as tarefas criadas.
- **Excluir Tarefas** : Usuários podem excluir suas tarefas.
- **Visualização em Calendário** : As tarefas podem ser visualizadas em um calendário nas visões "Mês", "Semana" e "Dia".
- **Status das Tarefas** : Marcação de tarefas como concluídas ou pendentes.
- **Autenticação JWT** : Proteção de rotas privadas utilizando JWT.

## Tecnologias Utilizadas

### Backend:

- **Node.js** : Plataforma para construção do backend.
- **Express** : Framework para gerenciar rotas e middleware.
- **Prisma**: ORM para interação com o banco de dados MySQL.
- **JWT (JSON Web Token)**: Para autenticação segura de usuários.
- **bcrypt**: Para hash de senhas e segurança de autenticação.

### Frontend:
- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **React Router**: Navegação entre as páginas da aplicação.
- **React Big Calendar**: Componente de calendário integrado à aplicação.
- **Tailwind CSS**: Framework CSS para estilização responsiva.
- **Figma**: As telas do projeto foram desenvolvidas no figma. [Clique aqui](https://www.figma.com/design/nRI1UukQYC5V9CT9oTmbbn/Taskly?node-id=0-1&t=NzKTQ6IQPlMzgDit-1`) para acessar. 

## Banco de Dados:
- **MySQL** : Banco de dados relacional utilizado com Prisma ORM.

## Estrutura do Projeto:

### Backend:
- **migrations/**: Diretório de migrações do Prisma para o banco de dados.
- **routes/** : Contém as rotas públicas e privadas (como rotas de tarefas e autenticação).
- **middlewares/** : Middleware de autenticação JWT.
- **server.js** : Arquivo principal que inicializa o servidor Express.
- **prisma/schema.prisma** : Arquivo de definição do modelo de dados utilizado pelo Prisma.

### Frontend:
- **src/pages/** : Páginas principais da aplicação (Cadastro, Login, Tarefas, Calendário).
- **src/services/api.js** : Configuração da API para fazer requisições HTTP ao backend.
- **src/components/** : Componentes reutilizáveis como barra de pesquisa, modais de adição/edição de tarefas, etc.

## Deploy:

### Backend

O repositório está hospedado no [Railway](https://railway.app/) , o que elimina a necessidade de configurar o ambiente do backend manualmente. Tanto o servidor quanto o banco de dados já estão configurados e hospedados na plataforma Railway.

### Frontend:

O repositório está hospedado no [Netlify](https://www.netlify.com/) , o que elimina a necessidade de configurar o ambiente do frontend manualmente. Clique [aqui](https://taskly-gerenciador.netlify.app/) para entrar no site . 

## Rotas da API:

### Rotas Públicas:

- **POST /cadastro**: Criação de um novo usuário.
- **POST /login**: Autenticação do usuário.

### Rotas Privadas (Necessário token JWT)

- **GET /tarefas**: Listar todas as tarefas do usuário autenticado.
- **POST /tarefas**: Criar uma nova tarefa.
- **PUT /tarefas/**:  Editar uma tarefa existente.
- **PATCH /tarefas/completar**: Alterar o status de uma tarefa (completa/incompleta).
- **DELETE /tarefas/** Deletar uma tarefa.


## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
