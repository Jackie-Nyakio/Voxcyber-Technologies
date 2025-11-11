import { useState, memo } from "react";
import avatar1 from "../assets/images/avatar1.jpg";
import avatar2 from "../assets/images/avatar2.jpg";
import avatar3 from "../assets/images/avatar3.jpg";
import testimonialImg1 from "../assets/images/testimonialImg1.jpg";
import testimonialImg2 from "../assets/images/testimonialImg2.png";
import testimonialImg3 from "../assets/images/testimonialImg3.jpg";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Lucy Magdaline",
    title: "IT Consultant, TechLink Africa",
    avatar: avatar1,
    quote:
      "VOXCYBER Technologies has been my trusted partner for reliable gadgets and expert support. Their service quality is top-notch",
    image: testimonialImg1,
    alt: "Modern workspace with laptop and tech accessories",
  },
  {
    id: 2,
    name: "Blessed Kamau",
    title: "Creative Director, Studio Neo",
    avatar: avatar2,
    quote:
      "I love how VOXCYBER combines innovation and practicality. Their devices truly simplify my daily workflow.",
    image: testimonialImg2,
    alt: "Creative office setup with smart devices",
  },
  {
    id: 3,
    name: "Kevin Maati",
    title: "Digital Marketer, AdCraft Kenya",
    avatar: avatar3,
    quote:
      "From smart accessories to performance laptops, VOXCYBER’s solutions keep me connected and productive all day.",
    image: testimonialImg3,
    alt: "Comfortable workspace with modern gadgets",
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);
  const count = TESTIMONIALS.length;

  const next = () => setIndex((index + 1) % count);
  const prev = () => setIndex((index - 1 + count) % count);

  return (
    <section
      aria-label="Testimonials"
      className="bg-white py-12 md:py-16 mt-[40px]"
    >
      <div className="max-w-7xl mx-auto px-[16px] md:px-[24px]">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">
          What People Are Saying About Us
        </h2>

        {/* Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left — Text block */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <img
                src={TESTIMONIALS[index].avatar}
                alt={TESTIMONIALS[index].name}
                className="w-14 h-14 rounded-full object-cover shadow-md"
                loading="lazy"
              />
              <div>
                <p className="font-semibold text-gray-900 text-[17px]">
                  {TESTIMONIALS[index].name}
                </p>
                <p className="text-gray-500 text-[17px]">
                  {TESTIMONIALS[index].title}
                </p>
              </div>
            </div>

            <blockquote className="text-gray-800 text-[17px] leading-relaxed mb-6">
              “{TESTIMONIALS[index].quote}”
            </blockquote>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-[4px]">
              <button
                onClick={prev}
                aria-label="Previous"
                className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-100 focus:outline-none"
              >
                ←
              </button>
              <button
                onClick={next}
                aria-label="Next"
                className="w-10 h-10 rounded-full bg-blue-700 text-white shadow flex items-center justify-center hover:bg-blue-800 focus:outline-none"
              >
                →
              </button>
            </div>
          </div>

          {/* Right — Image */}
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={TESTIMONIALS[index].image}
                alt={TESTIMONIALS[index].alt}
                className="w-full h-64 md:h-80 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Testimonials);
