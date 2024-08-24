import React from "react";

const Button = ({ title, to }) => {
  return (
    <a href={`#${to}`} className="block">
      <button className="bg-brightColor text-white px-4 py-2 rounded-md hover:bg-hoverColor hover:shadow-lg transition duration-300 ease-in-out">
        {title}
      </button>
    </a>
  );
};

export default Button;
