import heroImage from "../assets/images/heroImage.png";

export default function Hero() {
  return (
    <section
      className="w-full h-screen bg-cover bg-center relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Centered Content */}
      <div className="relative text-center max-w-3xl px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Your Trusted Hub for Quality Digital Devices & Tech Accessories
        </h1>

        <p className="mt-6 text-lg text-gray-300">
          At VoxCyber Technologies, we provide top-tier laptops, desktops,
          tech accessories, audio gear, and digital essentials, all at affordable
          prices, with the reliability you deserve.
        </p>

        <button className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md font-semibold">
          Shop Now
        </button>
      </div>
    </section>
  );
}
