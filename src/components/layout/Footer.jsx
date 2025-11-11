import bgFooter from "../../assets/images/footerImage.png";
import iconFacebook from "../../assets/images/facebook.jpg";
import iconLinkedIn from "../../assets/images/linkedin.jpg";
import iconTwitter from "../../assets/images/twitter.jpg";
import iconInstagram from "../../assets/images/instagram.webp";
import iconGithub from "../../assets/images/github.jpg";
import logoVoxcyber from "../../assets/images/voxcyber-logo.png"; // my logo

export default function Footer() {
  return (
    <footer className="text-white mt-20">
      {/* === Top CTA Section === */}
      <div className="bg-[#06224B] flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-t-2xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <img
            src={bgFooter}
            alt="VoxCyber background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Text + Form */}
        <div className="w-full md:w-1/2 px-10 py-18 md:px-17 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">
            Stay Connected with VOXCYBER
          </h2>
          <p className="text-blue-100 mb-6">
            Join our mailing list to receive exclusive updates, new product
            drops, and tech insights.
          </p>

          <form className="flex items-center bg-white rounded-full overflow-hidden max-w-md mx-auto md:mx-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 text-gray-800 outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 font-semibold"
            >
              Shop Now
            </button>
          </form>
        </div>
      </div>

      {/* === Social + Logo Row === */}
      <div className="bg-[#06224B] py-6 flex flex-col md:flex-row items-center justify-center md:justify-between px-10">
        {/* Left Logo */}
        <div className="mb-4 md:mb-0">
          <img
            src={logoVoxcyber}
            alt="VoxCyber Logo"
            className="h-10 md:h-12 object-contain"
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-6">
          {[ 
            { src: iconFacebook, alt: "Facebook" },
            { src: iconLinkedIn, alt: "LinkedIn" },
            { src: iconTwitter, alt: "Twitter" },
            { src: iconInstagram, alt: "Instagram" },
            { src: iconGithub, alt: "GitHub" },
          ].map((icon, index) => (
            <a key={index} href="#" aria-label={icon.alt}>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-6 h-6 object-contain hover:scale-110 transition-transform"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* === Bottom Footer Section === */}
      <div className="bg-blue-900">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div>
            <h4 className="font-semibold mb-4 text-white">Our Products</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Smart Devices</li>
              <li>Tech Accessories</li>
              <li>Support Tools</li>
              <li>Gadget Guide</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Top Features</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Device Management</li>
              <li>Cloud Integration</li>
              <li>Security Solutions</li>
              <li>Analytics Tools</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Product Support</li>
              <li>Request Demo</li>
              <li>Documentation</li>
              <li>Community Forum</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-blue-100">
              <li>About Us</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Favourite Things</h4>
            <ul className="space-y-2 text-blue-100">
              <li>For Enterprises</li>
              <li>For Startups</li>
              <li>For Developers</li>
              <li>For Education</li>
            </ul>
          </div>
        </div>

        {/* === Copyright Line === */}
        <div className="border-t border-blue-700 py-6 text-center text-blue-200 text-sm">
          © VOXCYBER Technologies {new Date().getFullYear()} - All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
