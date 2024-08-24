import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className="w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Inspiring Healthier Lives Through Expert Guidance and Support.
        </h1>
        <p>
          Explore how our expert guidance and resources can help you make
          informed health decisions. From personalized advice to the latest in
          health trends, we are here to support your journey towards a
          healthier, more vibrant life.
        </p>

        {/* Add margin-top to the Button */}
        <div className="mt-8"> 
          <Button title="See Services" to="services" />
        </div>
      </div>
    </div>
  );
};

export default Home;
