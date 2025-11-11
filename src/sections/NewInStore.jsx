import gamingMouse from "../assets/images/gaming-mouse.jpg";
import smartwatch from "../assets/images/smartwatch.webp";
import laptop from "../assets/images/laptop.jpg";
import hdmiSplitter from "../assets/images/hdmi-splitter.jpg";

export default function NewInStore() {
  return (
    <section className="bg-white py-16 md:py-20 mt-[40px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Grey Background Card */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* LEFT SIDE — TEXT */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-3">
              New In <br /> Store Now
            </h2>
            <p className="text-gray-600 text-[17px] mb-5 leading-relaxed">
              Get the latest devices immediately <br /> with promo prices.
            </p>
            <button
              type="button"
              className="text-blue-700 font-semibold underline hover:text-blue-800 border-none outline-none focus:outline-none text-[17px]"
              onClick={() =>
                document
                  .getElementById("all-products")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Check All →
            </button>
          </div>

          {/* RIGHT SIDE — PRODUCTS */}
          <div className="flex flex-wrap md:flex-nowrap justify-start gap-4 md:gap-6">
            {[
              { src: gamingMouse, name: "Gaming Mouse" },
              { src: smartwatch, name: "Smartwatch" },
              { src: laptop, name: "Laptop" },
              { src: hdmiSplitter, name: "HDMI Splitter" },
            ].map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[140px] sm:w-[150px] md:w-[165px] bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-lg transition-transform hover:-translate-y-1"
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-44 object-contain rounded-t-2xl p-[6px]"
                />
                <div className="text-center py-[6px]">
                  <p className="text-gray-800 font-semibold text-[17px]">
                    {product.name}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
