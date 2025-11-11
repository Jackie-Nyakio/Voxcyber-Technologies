import heroImage from "../assets/images/HeroImage.jpg";

export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-[length:118%] bg-[center_top_-250px] flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-6 mt-10">

        {/* One-line Title */}
        <h1 className="text-[30px] md:text-[42px] font-extrabold leading-tight tracking-wide drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
          Your Trusted Hub for Quality Digital Devices & Tech Accessories
        </h1>

        {/* Two-line Paragraph */}
        <p className="mt-6 text-[16px] md:text-[18px] text-gray-100 leading-relaxed drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          At <span className="font-semibold text-blue-300">VOXCYBER Technologies</span>, we provide top-tier laptops, desktops,
          tech accessories, audio gear, and digital essentials all at affordable prices, with the reliability you deserve.
        </p>

        {/* Button */}
        <button
          className="mt-8 px-10 py-3 bg-blue-700 hover:bg-blue-800 transition rounded-md font-semibold text-white text-[16px] shadow-lg"
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
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                   w-[90%] md:w-[80%] bg-blue-700 rounded-2xl shadow-xl 
                   grid grid-cols-2 md:grid-cols-4 text-center py-8 px-6 z-20"
      >
        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-white">5k+</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">Happy Clients</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-white">1.2k+</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">Products Available</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-white">98%</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">Customer Satisfaction</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-3xl font-bold text-white">5+</h3>
          <p className="mt-2 text-xs md:text-sm text-gray-100 uppercase tracking-wide">Years of Experience</p>
        </div>
      </div>
    </section>
  );
}
