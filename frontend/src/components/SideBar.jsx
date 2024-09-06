import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="flex font-poppins">
      {/* Sidebar com background fixo e altura responsiva */}
      <div className="w-20 bg-[#6062FA] h-screen p-5 pt-8 flex flex-col justify-between">
        {/* Ícone de Menu */}
        <div className="flex flex-col gap-4 items-center">
          {/* Ícone da logo no topo */}
          <Link to="/Tarefas">
            <img
              src="./logo-icon.png"
              className="cursor-pointer w-8"
              alt="Logo Taskly"
            />
          </Link>

          {/* menu */}
          <Link to="/Tarefas">
            <img
              src="./icon-menu.png"
              className="cursor-pointer w-12 mt-10"
              style={{ width: "33px", height: "32px" }}
              alt="menu"
            />
          </Link>

          {/* Menus com ícones */}
          <ul className="flex flex-col gap-8 pt-6">
            <li className="flex items-center justify-center mt-3">
              <Link to="/Pendentes">
                <img
                  src="./icon-to-do.png"
                  alt="Icon To Do"
                  className="cursor-pointer"
                  style={{ width: "28px", height: "38px" }} // Dimensões específicas
                />
              </Link>
            </li>
            <li className="flex items-center justify-center mt-4">
              <Link to="/Concluidas">
                <img
                  src="./icon-done.png"
                  alt="Icon Done"
                  className="cursor-pointer"
                  style={{ width: "37px", height: "37px" }} // Dimensões específicas
                />
              </Link>
            </li>
            <li className="flex items-center justify-center mt-5">
              <Link to="/Calendario">
                <img
                  src="./icon-calendar.png"
                  alt="Icon Calendar"
                  className="cursor-pointer"
                  style={{ width: "35px", height: "36px" }} // Dimensões específicas
                />
              </Link>
            </li>
          </ul>
        </div>

        {/* Logout */}
        <div className="flex items-center justify-center">
          <Link to="/Login">
            <img
              src="./icon-sair.png"
              alt="Icon Sair"
              className="cursor-pointer "
              style={{ width: "28px", height: "28px" }}
            />
          </Link>
        </div>

      </div>

      {/* Barra branca com largura fixa (3x maior) e altura responsiva */}
      <div className="w-48 bg-white h-screen overflow-hidden">
        <ul className="pt-6">
          <li className="pl-5 whitespace-nowrap flex items-center">
            <Link to="/Tarefas">
              <img
                src="./logo-name.png"
                alt="logo"
                className="mr-2"
                style={{ width: "133px", height: "44px" }} // Dimensões específicas
              />
            </Link>
          </li>

          {/* Redireciona para o kanban completo */}
          <li className="pl-6 p-4 mt-9 text-slate-800 font-medium whitespace-nowrap flex items-center"
            style={{ fontSize: "23px" }}>
            <Link to="/Tarefas">
              Início
            </Link>
          </li>

          {/* Redireciona para as tarefas "A fazer" */}
          <li className="pl-6 p-4 mt-5 text-slate-800 font-medium whitespace-nowrap flex items-center"
            style={{ fontSize: "23px" }}>
            <Link to="/Pendentes">
              Pendentes
            </Link>
          </li>


          {/* Redireciona para as tarefas "Feito" */}
          <li className="pl-6 p-4 mt-4 text-slate-800 font-medium whitespace-nowrap flex items-center"
            style={{ fontSize: "23px" }}>
            <Link to="/Concluidas">
              Concluídas
            </Link>
          </li>

          {/* Redireciona para o calendário */}
          <li className="pl-6 p-4 mt-5 text-slate-800 font-medium whitespace-nowrap flex items-center"
            style={{ fontSize: "23px" }}>
            <Link to="/Calendario">
              Calendário
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
