import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import api from "../../services/api"

function Login() {
    const emailRef = useRef()  // Referência para o campo de email
    const passwordRef = useRef()  // Referência para o campo de senha
    const navigate = useNavigate()  // Hook para navegação programática

    async function handleSubmit(event) {
        event.preventDefault()  // Previne o comportamento padrão de recarregar a página

        try {
            const { data: token } = await api.post('/login', {  // Envia a requisição de login para a API
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
            localStorage.setItem('token', token)  // Armazena o token recebido no localStorage

            navigate('/listar-usuarios')  // Redireciona para a página de lista de usuários

        } catch (err) {
            alert('Senha ou email incorretos')  // Exibe um alerta se o login falhar
        }
    }

    return (
        <div >
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                Login
            </h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input ref={emailRef}
                    placeholder="Email"
                    type="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <input ref={passwordRef}
                    placeholder="Senha"
                    type="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                />
                <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">
                    Login
                </button>
            </form>
            <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">
                Não tem uma conta? Cadastre-se
            </Link>
            {/* Link para redirecionar ao cadastro */}
        </div>
    )
}

export default Login  // Exporta o componente para ser usado em outros lugares
