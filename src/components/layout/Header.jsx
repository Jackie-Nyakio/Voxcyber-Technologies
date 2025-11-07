import { useState } from "react";
import logo from "../../assets/images/voxcyber-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between">

        {/* Logo */}
        <img 
          src={logo} 
          alt="VoxCyber Logo" 
          className="h-10 w-auto object-contain"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-white text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">About</li>
          <li className="cursor-pointer hover:text-gray-300">Features</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/70 backdrop-blur-sm text-white px-6 py-4 space-y-4 text-lg">
          <p className="cursor-pointer hover:text-gray-300">Home</p>
          <p className="cursor-pointer hover:text-gray-300">About</p>
          <p className="cursor-pointer hover:text-gray-300">Features</p>
          <p className="cursor-pointer hover:text-gray-300">Contact</p>
        </div>
      )}
    </header>
  );
}
