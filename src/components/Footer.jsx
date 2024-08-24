import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  const address = "Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

  return (
    <div className="bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Uni Care</h1>
          <p className="text-sm">
          Our team of highly specialized physicians offers expertise across a range of disciplines,
           including orthopedics, cardiology, pediatrics, neurology, 
          dermatology, and more, ensuring comprehensive and exceptional care.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">About Us</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Doctors
            </Link>
          </nav>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Services</h1>
          <nav className="flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Lab Test
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Health Check
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Heart Health
            </Link>
          </nav>
        </div>
        <div className="w-full md:w-1/4">
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-hoverColor transition-all cursor-pointer"
            >
              Jalandhar - Delhi, Grand Trunk Rd, Phagwara, Punjab 144411
            </a>
            <a
              href="mailto:ankit954mishra@gmail.com"
              className="hover:text-hoverColor transition-all"
            >
              ankit954mishra@gmail.com
            </a>
            <a
              href="tel:+911234567890"
              className="hover:text-hoverColor transition-all"
            >
              +91 1234567890
            </a>
          </nav>
        </div>
      </div>
      <div className="bg-footerColor text-center py-4">
        <p>© 2024 Ankit. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
