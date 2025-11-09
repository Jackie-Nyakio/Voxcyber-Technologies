import infoImage from "../assets/images/infoImage.webp";

export default function InfoSection() {
  return (
    <section className="bg-white py-12 md:py-16 mt-[-100px] mb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row-reverse items-center gap-10">

        {/* RIGHT — IMAGE */}
        <div className="flex-1 w-full">
          <img
            src={infoImage}
            alt="VOXCYBER workspace and devices"
            className="rounded-xl shadow-lg w-full object-cover max-h-[380px] md:max-h-none"
          />
        </div>

        {/* LEFT — TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 leading-tight">
            Quality Tech. <br className="hidden md:block" /> Built for Performance.
          </h2>

          <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
            At <span className="font-semibold text-primary">VOXCYBER Technologies</span>, 
            we deliver cutting-edge tech devices designed for performance, durability, 
            and modern living. Whether you’re setting up your workstation, upgrading 
            your setup, or seeking reliable accessories, our products ensure power 
            meets precision.
          </p>
        </div>
      </div>
    </section>
  );
}
