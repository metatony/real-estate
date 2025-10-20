import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 flex flex-col h-[35vh] justify-center items-center font-light">
      <p className="text-center">
        Thanks for checking me out 😉 <br /> GitHub - {" "}
        <a
          className="text-blue-500"
          target="_blank"
          href="https://github.com/metatony"
          rel=" noopener noreferrer "
        >
          metatony
        </a>
      </p>

      <p className="text-center">
        View my blog - {" "}
        <a
          className="text-blue-500"
          target="_blank"
          href="https://mlog-alpha.vercel.app/"
          rel=" noopener noreferrer "
        >
          metatony blog
        </a>
      </p>
    </div>
  );
};

export default About;
