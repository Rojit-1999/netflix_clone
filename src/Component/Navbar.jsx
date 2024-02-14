import React from "react";
import Img1 from "../Image/Logo.png";
import { IoIosArrowForward, IoMdAdd } from "react-icons/io";
import Img2 from "../Image/tv.png";
import Img3 from "../Image/mobile-0819.jpg";
import Img4 from "../Image/Strange.png";
import { BiCheckboxChecked } from "react-icons/bi";
import Kids from '../Image/kids.png'


function Navbar() {
  return (
    <div className=" ">
      <div className="cover relative ">
        <div className="px-[75px]">
          <div className="pt-[10px] flex justify-between items-center">
            <img src={Img1} alt="" className="h-[100px] w-[200px]" />
            <input
              type="button" 
              value="Sign In"
              className="bg-[#e50914] h-[40px] w-[80px] rounded-[6px] text-white"
            />
          </div>
          <div className="mt-[150px]">
            <div className=" font-bold text-white text-[40px] text-center">
              Unlimited movies, TV shows, and many more
            </div>
            <div className="text-white text-[23px] pt-[5px] text-center">
              Watch anywhere. Cancel anytime
            </div>
            <div className="text-white text-[23px] pt-[22px] text-center">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className=" pt-[25px] ml-[450px] ">
              <input
                type="text" placeholder="Enter your email"
                className=" w-[350px] border-[2px] p-[10px] pr-[10px] rounded-[4px] bg-black opacity-50 text-white"
              />
              <button
                type="button"
                className="bg-[#e50914]  px-[28px] py-[12px]  rounded-[4px] m-[20px]   hover:bg-[#e50914e2] text-white relative font-medium"
              >
                Get Started{" "}
                <IoIosArrowForward className="absolute right-[4px] top-[16px]" />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[5px] border-[#2d2d2d] border-x-0 border-b-0 "></div>
      {/* Body-2 from here */}

      <div className="bg-black  flex items-center px-[75px] py-[50px] justify-between">
        <div className="text-white ">
          <div className="font-bold text-[40px]">Enjoy On Your TV</div>
          <div className="pt-[20px] text-[22px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </div>
        </div>
        <img src={Img2} alt="" />
      </div>
      <div className="border-[5px] border-[#2d2d2d] border-x-0 border-b-0 "></div>

      {/* Body-3 started from here */}

      <div className=" bg-black flex items-center py-[50px]">
        <div>
          <img src={Img3} alt="" className=" relative" />
          <div
            className="absolute bg-black  border-[2px] border-[#2d2d2d]  w-[350px] rounded-[5px]  flex justify-evenly items-center
            left-[132px] top-[1690px] "
          >
            <img
              src={Img4}
              alt=""
              className="h-[82px] w-[60px] pl-[5px] pt-[8px]"
            />
            <div className=" flex gap-[8px] items-center ">
              <div>
                <div className="text-white ">Stranger Things</div>
                <div className="text-blue-600 text-[14px]">Downloading ...</div>
              </div>
            </div>
            <BiCheckboxChecked className="text-white h-[30px] w-[30px]" />
          </div>
        </div>

        <div className="px-[100px]" >
          <div className="text-[40px] font-bold text-white ">
            Download your shows to watch offiline
          </div>
          <div className="text-[24px] text-white pt-[10px]">
            Save your favorites easily and always have something to watch.
          </div>
        </div>
      </div>
      <div className="border-[5px] border-[#2d2d2d] border-x-0 border-b-0 "></div>
      {/* body-4 started from here */}

      <div className="bg-black text-white px-[100px] pl-[400px] py-[75px]">
        <div className="text-[50px] font-bold">
          Watch <br /> everywhere
        </div>
        <div className="text-[20px] pt-[20px]">
        Stream unlimited movies and TV <br /> shows on your phone, tablet, laptop,<br />
         and TV.
        </div>
      </div>
      <div className="border-[5px] border-[#2d2d2d] border-x-0 border-b-0 "></div>

      {/* body-5 started from here */}

      <div className="flex bg-black px-[100px] items-center">
        <div>
          <img src={Kids} alt="" />
        </div>
        <div className="px-[20px]">
          <div className="text-[45px] text-white font-bold ">
            Create pfrofile for kids
          </div>
          <div className='text-white pt-[20px] text-[20px] '>
          Send kids on adventures with their favorite <br />characters in a space made just for them—free with <br /> your membership.
          </div>
        </div>
      </div>
      <div className="border-[5px] border-[#2d2d2d] border-x-0 border-b-0 "></div>

    {/* body-6 started from here */}

    <div className="py-[75px] bg-black text-white px-[100px]">
      <div className="text-[40px] font-bold text-center pb-[20px]">
        Frequently Asked Question
      </div>

      <div>
      <div className="bg-[#2d2d2d] w-[1000px] p-[20px] text-[26px] m-auto flex justify-between items-center">
        <p>What is Netflix? </p>
        <div className="text-[30px]">
          +
        </div>
      </div>   <br ></br>

      <div className="bg-[#2d2d2d] w-[1000px] p-[20px] text-[26px] m-auto flex justify-between items-center">
        <p>How much does netflix cost? </p>
        <div className="text-[30px]">
          +
        </div>
      </div> <br />
      <div className="bg-[#2d2d2d] w-[1000px] p-[20px] text-[26px] m-auto flex justify-between items-center">
        <p>Where can I watch? </p>
        <div className="text-[30px]">
          +
        </div>
      </div>    <br />
      <div className="bg-[#2d2d2d] w-[1000px] p-[20px] text-[26px] m-auto flex justify-between items-center">
        <p>How do I cancel? </p>
        <div className="text-[30px]">
          +
        </div>
      </div> <br />
      <div className="bg-[#2d2d2d] w-[1000px] p-[20px] text-[26px] m-auto flex justify-between items-center">
        <p>What can I watch on Netflix? </p>
        <div className="text-[30px]">
          +
        </div>
      </div> <br />
      <div className="bg-[#2d2d2d] w-[1000px] p-[20px] text-[26px] m-auto flex justify-between items-center">
        <p>Is netflix good for kids? </p>
        <div className="text-[30px]">
          +
        </div>
      </div>

      <div className="pt-[80px] text-center text-[20px]">
    Ready to watch? Enter your email to create or restart your membership.
    </div>
      </div>
      <div className=" pt-[10px] ml-[400px] ">
              <input
                type="text" placeholder="Enter your email"
                className=" w-[350px] border-[2px] p-[10px] pr-[10px] rounded-[4px] bg-black  text-white"
              />
              <button
                type="button"
                className="bg-[#e50914]  px-[28px] py-[12px]  rounded-[4px] m-[20px]   hover:bg-[#e50914e2] text-white relative font-medium"
              >
                Get Started{" "}
                <IoIosArrowForward className="absolute right-[4px] top-[16px]" />{" "}
              </button>
            </div>
    </div>

   

    </div>
  );
}

export default Navbar;
