import React from "react";

const ServicesCard = ({ icon, title, description, learnMoreLink }) => {
  return (
    <article
      className="group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out"
      role="region"
      aria-labelledby={`service-${title}`}
    >
      <div
        className="bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]"
        aria-hidden="true"
      >
        {icon}
      </div>
      <h1 id={`service-${title}`} className="font-semibold text-lg">
        {title}
      </h1>
      <p>{description}</p>
      {learnMoreLink && (
        <a
          href={learnMoreLink}
          className="text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out"
          aria-label={`Learn more about ${title}`}
        >
          Learn more
        </a>
      )}
    </article>
  );
};

export default ServicesCard;
