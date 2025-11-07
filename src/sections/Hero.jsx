import heroImage from "../assets/images/heroImage.png";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-top relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Center Content */}
      <div className="relative text-center max-w-3xl px-6 z-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Trusted Hub for Quality Digital Devices & Tech Accessories
        </h1>

        <p className="mt-6 text-base md:text-lg text-gray-300">
          At VOXCYBER Technologies, we provide top-tier laptops, desktops,
          tech accessories, audio gear, and digital essentials, all at affordable
          prices, with the reliability you deserve.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-700 hover:bg-blue-800 transition rounded-md font-semibold">
          Shop Now
        </button>
      </div>

      {/* Stats Bar */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 
                   w-[90%] md:w-4/5 bg-blue-700 rounded-2xl shadow-lg 
                   grid grid-cols-2 md:grid-cols-4 text-center py-8 px-4 z-20"
      >
        {/* Stat 1 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">5k+</h3>
          <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wide text-gray-100">
            Happy Clients
          </p>
        </div>

        {/* Stat 2 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">1.2k+</h3>
          <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wide text-gray-100">
            Products Available
          </p>
        </div>

        {/* Stat 3 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">98%</h3>
          <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wide text-gray-100">
            Customer Satisfaction
          </p>
        </div>

        {/* Stat 4 */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white">5+</h3>
          <p className="mt-2 text-xs md:text-sm font-medium uppercase tracking-wide text-gray-100">
            Years of Experience
          </p>
        </div>
      </div>
    </section>
  );
}
