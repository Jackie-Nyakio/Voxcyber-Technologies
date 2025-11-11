import gamingMouse from "../assets/images/gaming-mouse.jpg";
import smartwatch from "../assets/images/smartwatch.webp";
import laptop from "../assets/images/laptop.jpg";
import hdmiSplitter from "../assets/images/hdmi-splitter.jpg";

export default function NewInStore() {
  return (
    <section className="bg-white/70 py-12 md:py-16 mt-[20px]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Grey Background Card */}
        <div className="bg-gray- 20 rounded-2xl shadow-md p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6">
          
          {/* LEFT SIDE — TEXT */}
          <div className="flex-1 text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-2">
              New In <br /> Store Now
            </h2>
            <p className="text-gray-600 text-[17px] mb-4 leading-relaxed">
              Get the latest devices immediately <br /> with promo prices.
            </p>
            <button
              type="button"
              className="text-blue-700 font-semibold underline hover:text-blue-800 border-none outline-none focus:outline-none"
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
          <div className="flex flex-wrap md:flex-nowrap justify-start gap-3 md:gap-4">
            {[
              { src: gamingMouse, name: "Gaming Mouse" },
              { src: smartwatch, name: "Smartwatch" },
              { src: laptop, name: "Laptop" },
              { src: hdmiSplitter, name: "HDMI Splitter" },
            ].map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[140px] sm:w-[150px] md:w-[165px] bg-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
              >
                <img
                  src={product.src}
                  alt={product.name}
                  className="w-full h-44 object-contain rounded-t-2xl bg-white p-[4px]"
                />
                <div className="text-center py-[4px]">
                  <p className="text-gray-800 font-semibold text-[16px]">
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
