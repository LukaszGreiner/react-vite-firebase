import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="sticky top-0 mx-auto flex w-full items-center justify-between bg-gray-800 p-4 text-white md:p-6 lg:p-8">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
