import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import api from "../../services/api.js";

function Login() {
    const emailRef = useRef()  // Referência para o campo de email
    const passwordRef = useRef()  // Referência para o campo de senha
    const navigate = useNavigate()  // Hook para navegação programática

    async function handleSubmit(event) {
        event.preventDefault();
    
        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
    
            localStorage.setItem('token', token);
            navigate('/Tarefas');
    
        } catch (err) {
            alert('Senha ou email incorretos');
        }
    }

    return (
        <div className="font-poppins max-w-md mx-auto mt-10 bg p-8 border border-gray-200 rounded-lg shadow-lg ">
            <div className="items-center">
                <img src="/assets/logo-taskly.png" alt="logo" className="pb-10 pt-8 pl-20 " />
                <h2 className="text-3xl font-medium mb-6 text-center text-gray-700 pb-5">
                    Login
                </h2>
            </div>

            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input ref={emailRef}
                    placeholder="Email"
                    type="email"
                    className="w-full p-3 border bg-gray-100 border-gray-100 rounded-lg focus: outline-none"
                />
                <input ref={passwordRef}
                    placeholder="Senha"
                    type="password"
                    className="w-full p-3 border bg-gray-100 border-gray-100 rounded-lg focus: outline-none"
                />
                <button className="w-full h-14 bg-gradient-to-r from-blue-400 from-0% via-blue-500 via-36% to-indigo-600 to-66% to-violet-400 to-80% text-white font-medium py-3 rounded-lg hover:bg-blue-600 transition-colors">
                    login
                </button>
            </form>
            <div className="flex items-center  justify-center space-x-2">
                <p className="font-medium pt-4">Não tem uma conta?</p>
                <Link to="/" className="font-medium pt-4 text-blue-700 hover:underline">
                    Cadastre-se
                </Link>
            </div>


        </div>
    )
}
export default Login; 
