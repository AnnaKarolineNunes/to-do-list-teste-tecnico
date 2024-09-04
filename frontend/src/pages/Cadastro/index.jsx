import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import api from "../../services/api.js";
import ButtonSubmit  from "../../components/buttonSubmit.jsx";
import FormUser from "../../components/FormUser.jsx";

function Cadastro() {
    /*
    const emailRef = useRef(); // Referência para o campo de email
    const passwordRef = useRef(); // Referência para o campo de senha
    */

    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Organize suas tarefas, simplifique sua vida!",
            text: "Transforme sua rotina: assuma o controle do seu dia e conquiste mais tempo para o que realmente importa!",
            image: "./slide1.png", // Altere para o caminho correto da imagem
        },
        {
            title: "O queridinho dos brasileiros",
            text: "Liste todas as suas atividades, adicione novas com título e descrição, marque como concluídas, edite informações e exclua o que não for mais necessário.",
            image: "./slide2.png", // Altere para o caminho correto da imagem
            quote: "Taskly me salvou! Agora consigo gerenciar minhas tarefas sem stress e tudo fica muito mais fácil.",
            author: "– Júlia Carmagos, usuária do app"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };
    /*

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
        */

    return (
        <div className="flex h-screen ">
            <div className="w-1/2  flex flex-col  m-16">
                <div className="text-left ">
                    <div className="flex justify-center  items-center">
                        <img src={slides[currentSlide].image} alt="Carrossel" className="max-w-full h-auto mb-4" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{slides[currentSlide].title}</h2>
                    <p className="text-gray-600 mb-8">{slides[currentSlide].text}</p>

                    {slides[currentSlide].quote && (
                        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
                            <p className="italic text-gray-700">"{slides[currentSlide].quote}"</p>
                            <p className="text-gray-600 mt-2">{slides[currentSlide].author}</p>
                        </div>
                    )}
                </div>
                <div className="flex justify-center space-x-4 mt-4 align-middle  ">
                    <img src="/seta-esquerda.png" onClick={prevSlide} />
                    <img src="/seta-direita.png" onClick={nextSlide} />
                </div>
            </div>
            <div className="w-1/2 flex flex-col  items-center bg-white p-8">
                <img src="/logo-taskly.png" alt="logo" className="pb-10 pt-20" />
                <FormUser/>
                <Link to="/login" className="mt-4 font-medium text-black hover:underline">
                    Já tem uma conta? Faça login
                </Link>
            </div>
        </div>
    )
}

export default Cadastro; 