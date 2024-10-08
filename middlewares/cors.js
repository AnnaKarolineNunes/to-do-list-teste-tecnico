import cors from 'cors';

// Configuração de CORS
const corsOptions = {
    origin: 'https://taskly-gerenciador.netlify.app',  // ou a URL onde o frontend está hospedado
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,  // Para permitir envio de cookies, se necessário
    optionsSuccessStatus: 204
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
