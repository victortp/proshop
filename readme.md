# ProShop E-Commerce

> Plataforma de e-commerce construída com a stack MERN e Redux
> Este é o projeto do curso [MERN eCommerce From Scratch](https://www.udemy.com/course/mern-ecommerce)

![screenshot](https://github.com/bradtraversy/proshop_mern/blob/master/uploads/Screen%20Shot%202020-09-29%20at%205.50.52%20PM.png)

## Funcionalidades

- Carrinho de compras
- Avaliação e opinião dos produtos
- Carousel dos produtos mais bem avaliados
- Funcionalidade de busca de produtos
- Paginação na listagem dos produtos
- Perfil do cliente
- Gerenciamento dos produtos
- Gerenciamento dos pedidos
- Gerenciamento dos usuários
- Integração com o PayPal

## Utilização

### ES Modules no Node

Foi utilizado o ECMAScript Modules no backend deste projeto. Certifique-se de ter instalado a versão v14.6 ou versões posteriores do Node, ou você precisará adicionar a flag "--experimental-modules"

Além disso, ao importar um arquivo (não um pacote), certifique-se de adicionar a extensão .js no final, ou você receberá o erro "module not found"

### Variáveis de ambiente

Crie um arquivo .env na pasta raiz e adicione as seguintes variáveis:

```
NODE_ENV = development
PORT = 5000
MONGO_URI = mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = paypal client id
```

### Instalando as dependências (frontend & backend)

```
npm install
cd frontend
npm install
```

### Execução

```
# Executa o frontend (:3000) & backend (:5000)
npm run dev

# Executa apenas o backend
npm run server
```

## Build & Deploy

```
# Cria build de produção do frontend
cd frontend
npm run build
```

### Popular banco de dados

Você pode utilizar os seguintes comandos para popular o banco de dados com alguns usuários e produtos de amostra, além de poder apagar os dados:

```
# Importa os dados
npm run data:import

# Apaga os dados
npm run data:destroy
```

```
Usuários de amostra

admin@example.com (Admin)
123456

john@example.com (Customer)
123456

jane@example.com (Customer)
123456
```
