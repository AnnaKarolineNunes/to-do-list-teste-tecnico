import { Link } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api.js"

function Cadastro() {

    const emailRef = useRef()  // Referência para o campo de email
    const passwordRef = useRef()  // Referência para o campo de senha

    async function handleSubmit(event) {
        
        event.preventDefault()  // Previne o recarregamento da página

        try {
            await api.post('/cadastro', {  // Envia os dados de cadastro para a API
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            alert("Usuário cadastrado")  // Alerta de sucesso
        } catch (err) {
            alert("Erro ao cadastrar usuário ")  // Alerta de erro
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg p-8 border border-gray-300 rounded-lg shadow-lg">

            <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login </Link>
            {/* Link para redirecionar ao login */}
        </div>
    )
}

export default Cadastro  // Exporta o componente para ser usado em outros lugares
