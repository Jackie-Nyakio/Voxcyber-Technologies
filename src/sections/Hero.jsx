import heroImage from "../assets/images/HeroImage.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-[100vh] bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundPosition: "center top -1px",   // pull image upward
        backgroundSize: "cover",                  // ensures full coverage
        backgroundRepeat: "no-repeat",            // prevent tiling
      }}
    >
      {/* Light Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
<div className="relative z-10 text-center max-w-5xl px-6 -mt-15">

  {/* Title */}
  <h1 className="text-[36px] md:text-[60px] font-extrabold leading-tight tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
    Your Trusted Hub for Quality Digital Devices & Tech Accessories
  </h1>

  {/* Subtitle */}
  <p className="mt-6 text-[18px] md:text-[22px] text-gray-100 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
    At <span className="font-semibold text-blue-300">VOXCYBER Technologies</span>, we provide top-tier laptops, desktops,
    tech accessories, audio gear, and digital essentials, all at affordable prices, with the reliability you deserve.
  </p>

  {/* Button */}
  <button
    className="mt-8 px-12 py-4 bg-blue-700 hover:bg-blue-800 transition rounded-md 
               font-semibold text-white text-[18px] shadow-lg"
    onClick={() => {
      const section = document.getElementById("all-products");
      if (section) section.scrollIntoView({ behavior: "smooth" });
    }}
  >
    Shop Now
  </button>
</div>


      {/* Stats Bar */}
      <div
        className="absolute bottom-[-130px] left-1/2 transform -translate-x-1/2 
             w-[99%] md:w-[85%] bg-blue-700/95 rounded-2xl shadow-xl 
             grid grid-cols-2 md:grid-cols-4 text-center py-7 md:py-9 px-6 z-20"
>
      
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">5k+</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">HAPPY CLIENTS</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">1.2k+</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">PRODUCTS AVAILABLE</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">98%</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">CUSTOMER SATISFACTION</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">5+</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">YEARS OF EXPERIENCE</p>
        </div>
      </div>
    </section>
  );
}
