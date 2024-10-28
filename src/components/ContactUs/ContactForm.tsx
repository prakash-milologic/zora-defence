import React from "react";

const ContactForm = () => {
  return (
    <>
      <div className="bg-[#0F0F0F] md:h-screen lg:px-0 lg:flex flex-col justify-center items-center">
        <div className="box lg:flex lg:p-24 p-12">
          <div className="w-[30vw] contact-info bg-[#1A1A1A] lg:block hidden"></div>
          <div className="contact-form bg-[#222222] p-6 flex gap-4 flex-col">
            <h2 className="md:text-left text-[#A58441] font-bold text-base">
              CONTACT US
            </h2>
            <h1 className="lg:text-4xl text-3xl font-medium">Contact Us</h1>

            <form className="mt-6">
              <div className="grid gap-10 mb-6 md:grid-cols-2">
                <div>
                  <input
                    type="text"
                    id="first_name"
                    className="appearance-none bg-[#222222] border-b focus:outline-none text-sm block w-full p-2.5"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="last_name"
                    className="appearance-none bg-[#222222] border-b focus:outline-none text-sm block w-full p-2.5"
                    placeholder="Last Name"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="email"
                    id="email"
                    className="appearance-none bg-[#222222] border-b focus:outline-none text-sm block w-full p-2.5"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    id="email"
                    className="appearance-none bg-[#222222] border-b focus:outline-none text-sm block w-full p-2.5"
                    placeholder="Phone"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <input
                    type="text"
                    id="email"
                    className="appearance-none bg-[#222222] border-b focus:outline-none text-sm block w-full p-2.5"
                    placeholder="Message"
                    required
                  />
                </div>
                <button
                  type="button"
                  className="w-full font-bold bg-[#A58441] text-base px-5 py-2.5 text-center me-2 mb-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
