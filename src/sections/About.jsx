import aboutImage from "../assets/images/aboutImage.png";

export default function About() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Image */}
        <div className="flex-1">
          <img
            src={aboutImage}
            alt="About VOXCYBER"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Text Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-blue-700 mb-4">
            Empowering Your Digital Lifestyle
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            At VOXCYBER Technologies, we help you stay ahead with innovative tech 
            solutions and devices designed for modern living — from smart accessories 
            to high-performance computing tools.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Reliable Device Solutions
              </h3>
              <p className="text-gray-500 text-sm">
                We provide tested and trusted devices that ensure reliability, 
                quality, and long-term value for your tech needs.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Smart Tech Support
              </h3>
              <p className="text-gray-500 text-sm">
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
