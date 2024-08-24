import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = <RiMicroscopeLine size={35} className="text-backgroundColor" />;
  const icon2 = <MdHealthAndSafety size={35} className="text-backgroundColor" />;
  const icon3 = <FaHeartbeat size={35} className="text-backgroundColor" />;

  return (
    <div id="services" className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className="flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className="mt-2 text-center lg:text-start">
            Experience seamless healthcare with our comprehensive range of services.
          </p>
        </div>
        <div className="mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Lab Test"
          description="Access a wide range of lab tests with fast and accurate results, all conveniently managed through our app."
          learnMoreLink="#lab-test"
        />
        <ServicesCard
          icon={icon2}
          title="Health Check"
          description="Comprehensive health check-ups to ensure you stay in optimal health and catch any potential issues early."
          learnMoreLink="#health-check"
        />
        <ServicesCard
          icon={icon3}
          title="Heart Health"
          description="Specialized heart health services, including screenings and consultations to keep your heart in top condition."
          learnMoreLink="#heart-health"
        />
      </div>
    </div>
  );
};

export default Services;
