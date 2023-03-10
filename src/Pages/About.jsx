import React from "react";

const About = () => {
  return (
    <div className=" mb-[230px] h-screen flex justify-center items-center">
      <div className=" flex flex-col-reverse xl:flex-row justify-center items-center container mx-auto">
        <div className=" w-[90%] xl:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1557267725-c530b236f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
            alt=""
            className="h-[250px] md:w-full lg:h-[400px] rotate-0 xl:rotate-90 object-cover rounded-lg"
          />
        </div>
        <div className=" w-[90%] mb-9 xl:mb-0">
          <h1 className=" text-3xl font-bold text-white uppercase mb-6">
            About Us
          </h1>
          <p className=" text-white w-full lg:w-[90%]">
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
