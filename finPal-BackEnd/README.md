# FinPal Backend 💰

Backend para o FinPal - Um sistema de gerenciamento de despesas compartilhadas em grupos.

## 📋 Sobre o Projeto

O FinPal resolve o problema de dividir despesas entre amigos, familiares ou colegas de apartamento. Permite criar grupos, adicionar despesas e calcular automaticamente quem deve a quem.

## 🚀 Funcionalidades

- **🔐 Autenticação JWT** - Registro e login seguro
- **👥 Gestão de Grupos** - Criar e gerenciar grupos de despesas
- **💰 Controle de Despesas** - Adicionar e visualizar gastos
- **🧮 Cálculo Automático** - Calcular saldos e quem deve a quem
- **📊 Rateio Flexível** - Dividir despesas igualmente ou de forma customizada

## 🛠️ Tecnologias

- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web
- **PostgreSQL** - Banco de dados relacional
- **Knex.js** - Query builder e migrations
- **JWT** - Autenticação
- **Joi** - Validação de dados
- **Jest** - Testes automatizados

## 📦 Estrutura do Projeto

```
finpal-backend/
├── src/
│   ├── config/
│   │   ├── database.js
│   │   └── auth.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   ├── groupController.js
│   │   ├── expenseController.js
│   │   └── balanceController.js
│   ├── models/
│   │   ├── index.js
│   │   ├── User.js
│   │   ├── Group.js
│   │   ├── UserGroup.js
│   │   ├── Expense.js
│   │   └── ExpenseSplit.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── validation.js
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── index.js
│   │   ├── auth.js
│   │   ├── users.js
│   │   ├── groups.js
│   │   ├── expenses.js
│   │   └── balances.js
│   ├── services/
│   │   ├── authService.js
│   │   ├── expenseService.js
│   │   ├── balanceService.js
│   │   └── emailService.js
│   ├── utils/
│   │   ├── helpers.js
│   │   ├── calculations.js
│   │   └── validators.js
│   ├── migrations/
│   ├── seeds/
│   └── app.js
├── tests/
│    └── test-connection.js
├── .env
├── knexfile.js
├── package-lock.json
├── package.json
└── README.md
```

## ⚙️ Instalação e Configuração

### Pré-requisitos

- Node.js 16+
- PostgreSQL 12+
- npm ou yarn

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/finpal-backend.git
cd finpal-backend
2. Instale as dependências
bash
npm install
3. Configure as variáveis de ambiente
bash
cp .env.example .env
Edite o arquivo .env com suas configurações:

env
NODE_ENV=development
PORT=3001

# Database
DATABASE_URL=postgresql://usuario:senha@localhost:5432/finpal

# JWT
JWT_SECRET=seu_jwt_secret_super_seguro

# Frontend
CLIENT_URL=http://localhost:3000
4. Configure o banco de dados
bash
# Criar database no PostgreSQL
createdb finpal

# Executar migrations
npm run migrate

# Popular com dados de exemplo (opcional)
npm run seed
5. Execute a aplicação
bash
# Desenvolvimento
npm run dev

# Produção
npm start
🧪 Comandos Disponíveis
bash
# Desenvolvimento
npm run dev          # Inicia com nodemon (auto-restart)

# Produção
npm start           # Inicia servidor

# Banco de dados
npm run migrate     # Executa migrations
npm run migrate:rollback  # Reverte última migration
npm run seed        # Popula banco com dados de exemplo

# Testes
npm test           # Executa testes
npm run test:watch # Executa testes em modo watch
📡 API Endpoints
Autenticação
POST /api/auth/register - Registrar usuário

POST /api/auth/login - Login

GET /api/auth/me - Perfil do usuário

Grupos
GET /api/groups - Listar grupos do usuário

POST /api/groups - Criar grupo

GET /api/groups/:id - Detalhes do grupo

POST /api/groups/:id/members - Adicionar membro

Despesas
GET /api/groups/:groupId/expenses - Listar despesas do grupo

POST /api/expenses - Criar despesa

PUT /api/expenses/:id - Editar despesa

DELETE /api/expenses/:id - Excluir despesa

Saldos
GET /api/groups/:groupId/balances - Calcular saldos do grupo

🗃️ Modelo de Dados
Principais entidades:

Users - Usuários do sistema

Groups - Grupos de despesas

UserGroups - Relação usuário-grupo (muitos para muitos)

Expenses - Despesas

ExpenseSplits - Rateio das despesas

🧪 Testes
bash
# Executar todos os testes
npm test

# Executar testes com coverage
npm test -- --coverage

# Executar testes em modo watch
npm run test:watch
🔒 Segurança
Autenticação JWT

Senhas criptografadas com bcrypt

Headers de segurança com Helmet

Rate limiting

Validação de dados com Joi

CORS configurado

📈 Próximos Passos
Notificações por email

Upload de comprovantes

Relatórios e gráficos

API de relatórios PDF

Deploy em cloud

🤝 Contribuição
Fork o projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

👨‍💻 Autor
Pedro da Cunha - pedrocpereira.67@gmail.com

Desenvolvido com ❤️ para facilitar a vida de quem divide despesas
```
