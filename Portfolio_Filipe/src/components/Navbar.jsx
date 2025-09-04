export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <ul className="flex gap-4">
        <li><a href="#home">Home</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}
