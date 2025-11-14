import EarPods from "../assets/images/EarPods.webp";
import EpsonPrinter from "../assets/images/EpsonPrinter.webp";
import ExternalHardDisk from "../assets/images/External-Hard-Disk.webp";
import FlashDrives from "../assets/images/FlashDrivesAndMemoryCards.png";
import HeadPhones from "../assets/images/HeadPhones.jpg";
import InkCartridge from "../assets/images/OriginalInkCartridge.jpg";
import RefurbishedDesktop from "../assets/images/RefurbishedDesktop.jpg";
import WirelessMouseKeyboard from "../assets/images/WirelessMouseAndKeyboard.jpg";

import SectionWrapper from "../components/common/SectionWrapper";
import Card from "../components/common/Card";

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

  const handleAddToCart = (productName) => {
    alert(`${productName} added to cart`);
  };

  return (
    <SectionWrapper id="all-products" className="bg-gray-50 mt-[-0px]">
      {/* Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
          All Products
        </h2>
        <p className="text-gray-600 text-[18px] max-w-2xl mx-auto leading-relaxed">
          Explore the latest range of tech essentials from{" "}
          <span className="font-semibold text-blue-700">
            VOXCYBER Technologies
          </span>
          . From powerful computers to compact accessories, performance meets reliability.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <Card key={index} product={product} onAdd={handleAddToCart} />
        ))}
      </div>
    </SectionWrapper>
  );
}
