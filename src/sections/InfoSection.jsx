import infoImage from "../assets/images/infoImage.webp";

export default function InfoSection() {
  return (
    <section className="bg-white py-16 md:py-20 mt-[40px] mb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row-reverse items-center gap-12">
        
        {/* RIGHT — IMAGE */}
        <div className="flex-1 w-full">
          <img
            src={infoImage}
            alt="VOXCYBER workspace and devices"
            className="rounded-2xl shadow-lg w-full object-cover max-h-[400px]"
          />
        </div>

        {/* LEFT — TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-5 leading-snug">
            Quality Tech. <br className="hidden md:block" /> Built for Performance.
          </h2>

          <p className="text-gray-600 text-[17px] leading-relaxed max-w-xl mx-auto lg:mx-0">
            At{" "}
            <span className="font-semibold text-blue-700">
              VOXCYBER Technologies
            </span>
            , we deliver cutting-edge tech devices designed for performance, durability, 
            and modern living. Whether you’re setting up your workstation, upgrading 
            your setup, or seeking reliable accessories, our products ensure power 
            meets precision.
          </p>
        </div>
      </div>
    </section>
  );
}
