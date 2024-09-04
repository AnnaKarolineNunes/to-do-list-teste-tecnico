import ButtonSubmit from "./buttonSubmit";
import { useRef} from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

function formUser() {

    const emailRef = useRef(); // Referência para o campo de email
    const passwordRef = useRef(); // Referência para o campo de senha

    async function handleSubmit(event) {
        event.preventDefault(); // Previne o recarregamento da página

        try {
            await api.post('/cadastro', { // Envia os dados de cadastro para a API
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
            alert("Usuário cadastrado"); // Alerta de sucesso
        } catch (err) {
            alert("Erro ao cadastrar usuário"); // Alerta de erro
        }
    }

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
            <h2 className="text-2xl font-medium mb-4 text-center">cadastre-se</h2>
            <input ref={emailRef} placeholder="Email" className="w-full p-3 border bg-gray-100 border-gray-100 rounded-lg focus: outline-none" />
            <input ref={passwordRef} type="password" placeholder="Senha" className="w-full p-3 border bg-gray-100 border-gray-100 rounded-lg focus: outline-none" />
            <ButtonSubmit />
        </form>

    )
}

export default formUser;