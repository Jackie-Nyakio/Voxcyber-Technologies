import { useState } from "react";
import logo from "../../assets/images/voxcyber-logo.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src={logo}
          alt="VoxCyber Logo"
          className="h-10 w-auto object-contain"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-10 text-white text-[13px] font-medium">
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <li
              key={index}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-200 p-[4px]"
            >
              {item}
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl p-[4px]"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-sm text-white px-6 py-4 space-y-4 text-[14px]">
          {["Home", "About", "Features", "Contact"].map((item, index) => (
            <p
              key={index}
              className="cursor-pointer hover:text-blue-400 transition-colors duration-200 p-[4px]"
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </header>
  );
}
