import { Link } from "react-router-dom";
import FormUser from "../../components/FormUser.jsx";

function Cadastro() {
    return (
        <div className="flex h-screen font-poppins ">
            {/* Lado Esquerdo com Imagem e Texto */}
            <div className="w-1/2 flex flex-col justify-center items-start m-24 rounded-[10px] shadow-md flex items-center">
                <div className="text-left">
                    <div className="flex justify-center items-center">
                        {/* Atualize o caminho da imagem para o correto */}
                        <img src="./img-cadastro.png" alt="Organize suas tarefas" className=" max-w-full h-auto mb-4 " />
                    </div>
                    <h2 className="pl-8 text-2xl font-medium mb-4"
                     style={{ fontSize: "28px" }}>Organize suas tarefas, simplifique sua vida!</h2>
                    <p className= "pl-8 text-gray-600 mb-8"  style={{ fontSize: "23px" }}>
                        Transforme sua rotina: assuma o controle do seu dia e conquiste mais tempo para o que realmente importa!
                    </p>
                </div>
            </div>

            {/* Lado Direito com o Formulário */}
            <div className="w-1/2 flex flex-col items-center bg-white p-8">
                <img src="/logo-taskly.png" alt="logo" className="pb-10 pt-20" />
                <FormUser />
                <div className="flex items-center justify-center space-x-2">
                    <p className="font-medium pt-4">Já tem uma conta?</p>
                    <Link to="/Login" className="font-medium pt-4 text-blue-700 hover:underline">
                        Vá para o login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Cadastro;
