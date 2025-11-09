import EarPods from "../assets/images/EarPods.webp";
import EpsonPrinter from "../assets/images/EpsonPrinter.webp";
import ExternalHardDisk from "../assets/images/External-Hard-Disk.webp";
import FlashDrives from "../assets/images/FlashDrivesAndMemoryCards.png";
import HeadPhones from "../assets/images/HeadPhones.jpg";
import InkCartridge from "../assets/images/OriginalInkCartridge.jpg";
import RefurbishedDesktop from "../assets/images/RefurbishedDesktop.jpg";
import WirelessMouseKeyboard from "../assets/images/WirelessMouseAndKeyboard.jpg";

export default function AllProducts() {
  const products = [
    { name: "EarPods", price: "KES 2,500", oldPrice: "KES 3,500", image: EarPods },
    { name: "Epson Printer", price: "KES 22,000", oldPrice: "KES 24,000", image: EpsonPrinter },
    { name: "External Hard Disk", price: "KES 8,000", oldPrice: "KES 9,500", image: ExternalHardDisk },
    { name: "Flash Drives & Memory Cards", price: "KES 1,500", oldPrice: "KES 2,500", image: FlashDrives },
    { name: "Headphones", price: "KES 6,000", oldPrice: "KES 7,000", image: HeadPhones },
    { name: "Original Ink Cartridge", price: "KES 4,000", oldPrice: "KES 5,000", image: InkCartridge },
    { name: "Refurbished Desktop", price: "KES 30,000", oldPrice: "KES 35,000", image: RefurbishedDesktop },
    { name: "Wireless Mouse & Keyboard", price: "KES 4,500", oldPrice: "KES 6,000", image: WirelessMouseKeyboard },
  ];

  // Add to cart function
  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart`);
  };

  return (
    <section id="all-products" className="py-0 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-700">All Products</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Explore the latest range of tech essentials from{" "}
            <span className="font-semibold text-blue-700">VOXCYBER technologies</span>.
            From powerful computers to compact accessories — performance meets reliability.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition relative"
            >
              {/* Product Image */}
              <div className="relative w-full h-40 flex items-center justify-center mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-32 object-contain"
                />
                {/* Plus Button - bottom right */}
                <button
                  onClick={() => handleAddToCart(product.name)}
                  className="absolute bottom-2 right-2 bg-blue-700 text-white w-8 h-8 rounded-full flex items-center justify-center text-lg font-bold shadow-md hover:bg-blue-800 transition"
                  title="Add to Cart"
                >
                  +
                </button>
              </div>

              {/* Product Info */}
              <h3 className="text-gray-800 font-semibold text-sm md:text-base">
                {product.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-blue-700 font-bold text-sm md:text-base">
                  {product.price}
                </span>
                <span className="text-gray-400 text-xs line-through">
                  {product.oldPrice}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
