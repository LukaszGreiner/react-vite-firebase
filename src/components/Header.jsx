import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="bg-primary sticky top-0 z-99 mx-auto flex w-full items-center justify-between p-4 text-white md:p-6 lg:p-8">
      <Logo />
      <Navbar />
    </header>
  );
}

export default Header;
