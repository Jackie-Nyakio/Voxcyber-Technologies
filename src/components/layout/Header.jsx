import logo from "../../assets/images/voxcyber-logo.png";

export default function Header() {
  return (
    <header className="w-full absolute top-0 left-0 z-50">
      <nav className="max-w-7xl mx-auto px-10 py-6 flex items-center justify-between">

        {/* Logo Image */}
        <img 
          src={logo} 
          alt="VoxCyber Logo" 
          className="h-10 w-auto object-contain"
        />

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-white text-sm font-medium">
          <li className="cursor-pointer hover:text-gray-300 duration-200">Home</li>
          <li className="cursor-pointer hover:text-gray-300 duration-200">About</li>
          <li className="cursor-pointer hover:text-gray-300 duration-200">Features</li>
          <li className="cursor-pointer hover:text-gray-300 duration-200">Contact</li>
        </ul>

      </nav>
    </header>
  );
}
