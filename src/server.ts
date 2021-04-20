import express from "express";

import "./database" //vai importar o index, identificando por padrão o index
//migrations são os historicos que tem relacionado a tudo que tem no banco de dados

import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running on port 3333"));


//aula dia 1 abaixo
//os 3 pontinhos significa que as dependencias dessa lib  "express" e precisa instalar as tipagens
//da mesma, vindo separadas, e para baixar usar:
//yarn add @types/express -D (-D significa dependencia de desenvolvimento)
//yarn add typescript -D, adicionar o typescript no arquivo
//yarn tsc --init, criar um arquivo de configuração do typescript
/*
const app = express();

/*
    GET = Buscas
    POST = Criação
    PUT = Alteração
    DELETE = Deletar
    PATCH = Alterar uma informação específica
*/
/*
app.get("/", (request, response ) => {
    return response.send("Olá NLW 05");
}) //request vem da requisição e o response é a resposta pro cliente
*/
//outra maneira abaixo

/*
app.get("/", (request, response ) => {
    return response.json({
        message: "Olá NLW 05"
    });
}) //request vem da requisição e o response é a resposta pro cliente
*/

/*
app.post("/users", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso!" })
})
*/

//3333 é uma porta de conexão
//app.listen(3333, () => console.log("Server ir running on port 3333"));

//deu erro devido não poder deixar o import e o from no codigo
//para ele entender o import e tals, o tradutor é:
//yarn add ts-nose-dev -D
