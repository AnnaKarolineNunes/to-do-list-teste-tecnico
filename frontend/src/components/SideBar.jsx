import { Link } from "react-router-dom";
import { useState } from "react";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Principal", src: "icon-menu", route: "/Tarefas" },
    { title: "Pendentes", src: "icon-pendentes", route: "/pendentes" },
    { title: "Concluídas", src: "icon-concluidas", route: "/concluidas" },
    { title: "Calendário", src: "icon-calendar", route: "/calendario" },
    { title: "Sair", src: "icon-sair", route: "/Login", gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${open ? "w-72" : "w-20"
          } bg-[#6062FA] h-screen p-5 pt-8 relative duration-300`}
      >
        <img
          src="/frontend/assets/control.png"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-indigo-700
           border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <Link to="/Tarefas">
            <img
              src="/frontend/assets/logo-icon.png"
              className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            />
          </Link>
          {open && (
            <Link to="/Tarefas">
              <img
                src="/frontend/assets/logo-branca.png"
                className="cursor-pointer"
                alt="Logo Taskly"
              />
            </Link>
          )}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex items-center rounded-md p-2 cursor-pointer hover:bg-light-white text-white text-lg 
              ${Menu.gap ? "mt-9" : "mt-2"}`}
            >
              <Link to={Menu.route} className="flex items-center w-full">
                <img
                  src={`/frontend/assets/${Menu.src}.png`}
                  className="h-6 w-6 mr-4" // Tamanho fixo para os ícones
                />
                <span className={`${!open && "hidden"} origin-left duration-200`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
