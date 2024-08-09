import React, { useState } from "react";
import ps from "./assets/ps.svg";
import web3 from "./assets/web3.svg";
import appDev from "./assets/appDev.svg";
import webd from "./assets/webd.svg";
import aboutBg from "./assets/aboutBg.svg";

import fullDev from "./assets/full-dev.svg";
import devImage from "./assets/dev.svg";
import mediaManager from "./assets/media-manager.svg";
import designer from "./assets/designer.svg";
import contactBg from "./assets/bg-contact.svg";
import headerBg from "./assets/headerBg.jpg";
import logo from "./assets/KayPHP.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function Page() {
  const [open, setOpen] = useState(false);
  const staffsArray = [
    {
      name: "Abdulfatah Abdullahi ",
      image: <img className=" w-60 relative" alt="ps" src={fullDev} />,
      role: (
        <span>
          Chief Web Developer <br /> TechQuick
        </span>
      ),
      text: "Need A Full Stack Web Developer?",
      details:
        " Do you need full stack mern website developers to freelance for you?",
    },
    {
      image: <img className=" w-60 relative" alt="ps" src={devImage} />,
      name: "Abdullahi Smith",
      role: "Professional Frontend Developer",
      text: "Need A Frontend Web Developer?",
      details:
        " Do you need full stack mern website developers to freelance for you?",
    },
    {
      image: <img className=" w-60 relative" alt="ps" src={designer} />,
      name: "Kamal Abdul  ",
      role: "Chief Ui Ux Designer TechQuick",
      text: "Need A UI UX Designer",
      details: " Are you in need of ui ux designers for you website and app?",
    },
    {
      image: <img className=" w-60 relative" alt="ps" src={mediaManager} />,
      name: "Maryam Babalola",
      role: (
        <span>
          Expert in Product Markerting <br /> and Social Media Managing
        </span>
      ),
      text: "Need A Product/Social Media Manager?",
      details:
        " Do you need a social media manager to take control of your product?",
    },
  ];
  return (
    <div className=" px-6 max-w-screen-2xl mx-auto">
      {open && (
        <div className="fixed inset-0 bg-white z-20">
          <div className="flex flex-col gap-8 text-xl font-semibold justify-center items-center mt-20">
            <button>Courses</button>
            <button>Services</button>
            <button>Demos</button>
            <button className="bg-[#FF6700] text-white  px-8 py-2 rounded-md ">
              Contact Us
            </button>
            <button className="border-[#FF6700] border    px-8 py-2 rounded-md ">
              Help Me
            </button>
          </div>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="absolute top-4 right-4"
          >
            <FaTimes size={25} />
          </button>
        </div>
      )}
      <section className="-mx-6">
        <img
          alt="headerBg"
          className="  w-full absolute -z-10 inset-0  md:max-h-[700px] object-cover"
          src={headerBg}
        />
        <div className="md:h-[700px]  ">
          <nav className="flex p-4 font-semibold justify-between items-center">
            <div>
              <img className=" w-20 relative" alt="ps" src={logo} />
            </div>
            <div className="md:flex hidden gap-6">
              <button>Courses</button>
              <button>Services</button>
              <button>Demos</button>
            </div>
            <div className="md:flex hidden gap-4">
              <button className="bg-[#FF6700] text-white  px-8 py-2 rounded-md ">
                Contact Us
              </button>
              <button className="border-[#FF6700] border    px-8 py-2 rounded-md ">
                Help Me
              </button>
            </div>
            <button onClick={() => setOpen(true)} className="flex md:hidden ">
              <FaBars size={25} />
            </button>
          </nav>
          <main className="h-full  flex justify-center items-center py-28 lg:pb-40">
            <div className="w-fit mx-auto">
              <h2 className="text-sm sm:text-base md:text-lg text-white font-bold">
                Witness the creation of something amazing The
              </h2>
              <p className="text-2xl md:text-4xl text-center font-bold">
                Beginning Of Something Propably <br /> Truly Super Epic{" "}
              </p>
            </div>
          </main>
        </div>
      </section>
      <section className="max-w-screen-sm mt-20 text-center mx-auto">
        <div className="relative w-fit mx-auto">
          <img className="h-28  w-fit" src={aboutBg} alt="aboutBg" />
          <p className="text-xl top-1/2 -translate-y-1/2 left-1/2   -translate-x-1/2 absolute font-semibold text-center flex flex-col">
            <span className="font-bold"> About Us </span>

            <span className="text-sm leading-none">Next gen web solution</span>
          </p>
        </div>
        <p className="font-semibold mt-4">
          We are the best at what we do, if you dont believe in us then probably
          go shine. We are a group of Specialist In Fields such as Web
          Develepment, Social media marketing Ui/Ux designing and app
          Development. We do Small and big and small and big and big and
          anything. We hoof and puff we gleam and shimmer we do what we know
          bests. So if you got a gig for us gently send a message dear, we will
          provide a way to reach us, and you will learn what we can
          makeeeeeeeeeeeeeeeeeeeeeeeeee.
        </p>
      </section>
      <section className=" bg-[#F5EEE9] -mx-6   mt-20">
        <div className="max-w-screen-lg mx-auto px-6 py-12">
          <p className="font-semibold text-xl py-4">We Specialize in</p>
          <div className=" gap-8 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3  text-white ">
            <div className="relative w-fit mx-auto h-auto">
              <img className=" relative" alt="ps" src={ps} />
              <p className="absolute top-1/2 font-bold text-xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
                UI/UX
              </p>{" "}
            </div>
            <div className="relative w-fit mx-auto h-auto">
              <img className=" relative" alt="ps" src={webd} />
              <p className="absolute top-1/2 font-bold text-xl -translate-y-1/2 left-1/2 -translate-x-1/2   text-center">
                Website Development
              </p>
            </div>{" "}
            <div className="relative w-fit mx-auto h-auto">
              <img className=" relative" alt="ps" src={appDev} />
              <p className="absolute top-1/2 font-bold text-xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
                App Development
              </p>
            </div>{" "}
            <div className="relative w-fit mx-auto h-auto">
              <img className=" relative" alt="ps" src={ps} />
              <p className="absolute top-1/2 font-bold text-xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
                Social Media Marketing
              </p>
            </div>{" "}
            <div className="relative w-fit mx-auto h-auto">
              <img className=" relative" alt="ps" src={webd} />
              <p className="absolute top-1/2 font-bold text-xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
                Premium Courses
              </p>
            </div>{" "}
            <div className="relative w-fit mx-auto h-auto">
              <img className=" relative" alt="ps" src={appDev} />
              <p className="absolute top-1/2 font-bold text-xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-center">
                Custom Scripts
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-20 ">
        <p className="font-bold text-xl text-center">Buy From Us</p>
        <p className=" my-4 text-center font-semibold">
          See the list of alll of our available Products lorem ipsum am out of
          idea in man am done bro im outta idea fr just give me something pwese
          any thing i i want ideas gosh
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-screen-sm mx-auto">
          <button className="bg-[#FF6700] px-6 py-0.5 rounded-full">ALL</button>
          <button className="border px-6 py-0.5 rounded-full">APP</button>
          <button className="border px-6 py-0.5 rounded-full">LARAVEL</button>
          <button className="border px-6 py-0.5 rounded-full">WP THEME</button>
          <button className="border px-6 py-0.5 rounded-full">WP PLUGIN</button>
          <button className="border px-6 py-0.5 rounded-full">UI DESIGN</button>
          <button className="border px-6 py-0.5 rounded-full">PHP</button>
        </div>

        <main className="gap-8 grid grid-cols-1 sm:grid-cols-2 mt-10    ">
          <NFTCard />
          <NFTCard /> <NFTCard /> <NFTCard /> <NFTCard /> <NFTCard />
          <NFTCard /> <NFTCard />
        </main>

        <div className="w-fit mx-auto mt-8">
          <button className="bg-[#FF6700] text-white  px-16 py-2 rounded-md ">
            View All
          </button>
        </div>
      </section>
      <section className="mt-20">
        <p className="text-xl font-bold mb-8 w-full text-center">Our Team</p>
        <main className="  flex flex-col gap-8 max-w-screen-md mx-auto  mt-10    ">
          {staffsArray.map((staffDetail, id) => (
            <StaffCard
              key={id}
              staffDetail={staffDetail}
              reverse={id % 2 === 0 ? false : true}
            />
          ))}
        </main>
      </section>
      <section className="mt-20 -mx-6">
        <div className="relative w-full max-w-screen-md  mx-auto h-auto">
          <img className=" relative" alt="contactBg" src={contactBg} />
          <div className="absolute top-1/2 font-bold text-base md:text-xl -translate-y-1/2 left-1/2 -translate-x-1/2 text-white text-center">
            <p>Have Something diiferent in mind?</p>
            <p className="my-4">
              Do you want a script that we dont have listed?{" "}
            </p>
            <button className="bg-[#FF6700] text-white w-fit px-16 py-2 rounded-md ">
              Contact Us
            </button>
          </div>
        </div>
      </section>
      <section className="bg-[#F5EEE9] -mx-6 p-6 md:p-16 mt-6 ">
        <p className="font-bold text-xl md:text-2xl text-center mb:4 md:mb-12">
          What People Say About Us
        </p>
        <div className="text-center p-4 md:p-12 bg-whit rounded-md  shadow-2xl max-w-screen-md mx-auto">
          <p className="text-xl">The Best Software Agency</p>
          <p className="font-semibold my-4">Alice from Trustpilot says: </p>
          <p className="md:text-lg text-base">
            Sorry but i just love this people and their services like bro they
            got the best service for real cause they created a full estore for
            me in less than a day and it is entirely clean code, i was briefed
            on the ui like 2 years after contacting them and the design begun
            immediately, i was on my way to have dinner when they send me my
            website already live on google and a video on how to operate plus an
            agent to help for out if i have any questions for a whole week, ill
            definitely patrionize em again.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Page;

const NFTCard = () => {
  return (
    <div className="flex justify-center items-center w-fit mx-auto  flex-col xl:flex-row shadow-xl shadow-gray-300   rounded-xl  gap-4 p-4">
      <img className=" relative" alt="web3" src={web3} />
      <div className="flex flex-col gap-2">
        <h2>Haven1 clone</h2>
        <p className="bg-[#FF9600]/30 text-[#FF6700] w-fit rounded-full px-6 py-0.5">
          PHP
        </p>
        <p className="text-gray-500 max-w-[320px]">
          Haven1 is a php and laravel website built as a safehaven for
          blockchain development, it is built in such a way that literally any
          body can build a blockchain using it.
        </p>
        <p>
          <span className="font-semibold">Starting Price</span> :
          <span> 50$</span>
        </p>
      </div>
    </div>
  );
};

const StaffCard = ({ staffDetail, reverse }) => {
  return (
    <div
      className={`flex flex-col-reverse justify-between gap-8 items-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="text-base md:text-lg flex flex-col gap-2 md:gap-4 items-center md:items-start text-center md:text-left max-w-80">
        <p className="font-semibold">{staffDetail.text}</p>
        <p>{staffDetail.details}</p>
        <button className="bg-[#FF6700] text-white w-fit px-8 py-2 rounded-md ">
          Contact
        </button>
      </div>
      <div>
        {staffDetail.image}
        <p className="font-semibold">{staffDetail.name}</p>
        <p>{staffDetail.role}</p>
      </div>
    </div>
  );
};
