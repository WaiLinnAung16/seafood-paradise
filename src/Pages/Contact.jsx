import React from "react";
import { TbPhoneCall } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { BiCurrentLocation } from "react-icons/bi";

const Contact = () => {
  return (
    <div className=" h-screen mb-[230px] flex items-center justify-center">
      <div className=" container mx-auto flex flex-col items-center">
        <div className=" text-white text-center mb-12">
          <h1 className=" font-bold text-3xl mb-2 uppercase">Contact</h1>
          <h4 className=" text-lg">Get in touch with me</h4>
        </div>
        <div className=" flex flex-col-reverse gap-5">
          <div className=" w-full md:w-[500px] px-2 lg:mx-0  mt-2">
            <form className=" flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className=" py-2 rounded pl-2 outline-none bg-slate-200 focus:bg-slate-100 focus:ring-2 focus:ring-yellow-700"
              />
              <input
                type="email"
                placeholder="Email Address"
                className=" py-2 rounded pl-2 outline-none bg-slate-200 focus:bg-slate-100 focus:ring-2 focus:ring-yellow-700"
              />
              <textarea
                name="sub"
                id="sub"
                cols="30"
                rows="10"
                placeholder="Say Something..."
                className=" py-2 rounded pl-2 outline-none bg-slate-200 focus:bg-slate-100 focus:ring-2 focus:ring-yellow-700"
              ></textarea>
              <button className="px-12 py-2  mx-auto bg-info text-primary font-semibold rounded transition-all hover:bg-slate-100">
                Send
              </button>
            </form>
          </div>
          <div className="text-white flex flex-col gap-5 px-2">
            <div className=" flex flex-col gap-5 lg:flex-row lg:gap-0 justify-between">
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 rounded-full bg-info text-secondary flex justify-center items-center text-xl">
                  <TbPhoneCall />
                </div>
                <p className=" tracking-wide">+959 9790658104</p>
              </div>
              <div className=" flex items-center gap-2">
                <div className=" w-12 h-12 rounded-full bg-info text-secondary flex justify-center items-center text-xl">
                  <HiOutlineMail />
                </div>
                <p className=" tracking-wide">waia00198@gmail.com</p>
              </div>
            </div>
            <div className=" flex items-center gap-2">
              <div className=" w-12 h-12 rounded-full bg-info text-secondary flex justify-center items-center text-xl">
                <BiCurrentLocation />
              </div>
              <p className=" tracking-wide w-[80%]">
                No.271, Thamine Myothit 7 street, Mayangone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
