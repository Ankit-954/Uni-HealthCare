import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          Welcome to the Unicare Hospital App, your comprehensive solution for
          managing healthcare with ease and convenience. At Unicare, we
          prioritize your health and well-being by offering a user-friendly
          platform designed to connect you with our world-class medical services
          and professionals. Our team of dedicated doctors, each specializing in
          unique fields such as orthopedics, cardiology, pediatrics, neurology,
          dermatology, and more, are committed to providing you with the highest
          quality of care. Whether you need a routine check-up, a specialized
          treatment, or a second opinion, Unicare is here to help. Our app
          allows you to book appointments, access your medical records, and
          receive personalized recommendations from our doctors.
        </p>
        <p className="text-justify lg:text-start">
          <h3><b>Why Choose Unicare?</b></h3> With Unicare, you get more than just a hospital
          app – you gain a reliable partner in your healthcare journey. We are
          committed to providing personalized care that meets your unique needs,
          all within a few taps on your device.
        </p>
        <p className="text-justify lg:text-start">
          We are dedicated to making healthcare accessible and convenient for
          you, so you can focus on what matters most – your health. Thank you
          for choosing Unicare. We look forward to serving you and helping you
          live a healthier, happier life.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
