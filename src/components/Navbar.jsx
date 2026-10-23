import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#49111C] text-[#F2F4F3]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Nome do restaurante */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Sushi Restaurante
        </Link>

        {/* Links de navegação */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="transition-colors hover:text-[#A9927D]"
          >
            Início
          </Link>

          <Link
            to="/cardapio"
            className="transition-colors hover:text-[#A9927D]"
          >
            Cardápio
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;