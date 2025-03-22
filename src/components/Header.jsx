import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4 relative">
      <div className="container mx-auto flex items-center justify-between">
        <span className="text-xl font-bold">My App</span>
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
