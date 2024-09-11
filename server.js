import express from 'express'  // Importa o framework Express para criar e gerenciar rotas e servidores.
import publicRoutes from './routes/public.js'  // Importa as rotas públicas (não exigem autenticação).
import privateRoutes from './routes/private.js'  // Importa as rotas privadas (exigem autenticação).
import auth from './middlewares/auth.js'  // Importa o middleware de autenticação para proteger as rotas privadas.
import corsMiddleware from './middlewares/cors.js';  // Importa o CORS para permitir que aplicações front-end acessem a API.


const app = express()  // Cria uma instância do Express para gerenciar o servidor e as rotas.

app.use(express.json())  // Configura o servidor para interpretar requisições com corpo em formato JSON.
app.use(corsMiddleware);



app.use('/', publicRoutes)  // Define as rotas públicas, que não exigem autenticação.
app.use('/', auth, privateRoutes)  // Define as rotas privadas, que exigem autenticação através do middleware 'auth'.

app.listen(3000, () => console.log("Servidor rodando "))  // Inicia o servidor na porta 3000 e exibe uma mensagem no console.
