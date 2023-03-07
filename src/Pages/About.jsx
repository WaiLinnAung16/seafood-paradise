import React from "react";

const About = () => {
  return (
    <div className=" mb-[230px] h-screen flex justify-center items-center">
      <div className=" flex justify-center items-center container mx-auto">
        <div className=" w-1/2">
          <img
            src="./bg.jpg"
            alt=""
            className=" h-[400px] rotate-90 object-cover rounded-lg"
          />
        </div>
        <div className=" w-[90%]">
          <h1 className=" text-3xl font-bold text-white uppercase mb-8">
            About Us
          </h1>
          <p className=" text-white w-[90%]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
            delectus voluptate repellat commodi voluptatem fugit exercitationem
            numquam, quaerat, sunt enim vero suscipit quas assumenda beatae ipsa
            pariatur? Magni, autem?Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Saepe quam delectus voluptate repellat commodi
            voluptatem fugit exercitationem numquam, quaerat, sunt enim vero
            suscipit quas assumenda beatae ipsa pariatur? Magni, autem?Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Saepe quam
            delectus voluptate repellat commodi voluptatem fugit exercitationem
            numquam, quaerat, sunt enim vero suscipit quas assumenda beatae ipsa
            pariatur? Magni, autem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
