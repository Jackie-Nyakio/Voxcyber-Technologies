import aboutImage from "../assets/images/aboutImage.png";

export default function About() {
  return (
    <section className="bg-white py-16 md:py-20 mt-[100px] mb-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-10">
        
        {/* LEFT — IMAGE */}
        <div className="flex-1 w-full">
          <img
            src={aboutImage}
            alt="About VOXCYBER"
            className="rounded-2xl shadow-lg w-full object-cover max-h-[380px] md:max-h-none border border-gray-200"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4 leading-tight">
            Empowering Your Digital Lifestyle
          </h2>

          <p className="text-gray-700 mb-8 leading-relaxed text-[17px] font-normal">
            At <span className="font-semibold text-blue-600">VOXCYBER Technologies</span>, 
            we help you stay ahead with innovative tech solutions and devices 
            designed for modern living, from smart accessories to 
            high-performance computing tools.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Reliable Device Solutions
              </h3>
              <p className="text-gray-700 text-[17px] leading-relaxed">
                We provide tested and trusted devices that ensure reliability,
                quality, and long-term value for your tech needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                Smart Tech Support
              </h3>
              <p className="text-gray-700 text-[17px] leading-relaxed">
                Our expert support ensures your digital tools work seamlessly,
                so you can focus on what truly matters.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
