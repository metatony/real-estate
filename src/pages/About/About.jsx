import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 flex h-[35vh] justify-center items-center font-light">
      <p className="text-center">
        Thanks for checking me out 😉 <br /> GGs -{" "}
        <a
          className="underline text-[#7e7d7d] hover:text-black"
          target="_blank"
          href="https://github.com/metatony"
          rel=" noopener noreferrer "
        >
          metatony
        </a>
      </p>
    </div>
  );
};

export default About;
