import React from 'react'
import { Img, Heading } from "../../components";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <header className="flex flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700">
        <div className="flex flex-row sm:flex-col justify-between items-center w-[55%] md:w-full ml-[139px] md:ml-5 sm:gap-10">
          <Img
            src="images/img_group_150.svg"
            alt="image"
            className="h-[24px]"
          />
          <div className="flex flex-row justify-between items-center w-[53%] sm:w-full">
            <div className="flex flex-col items-center justify-start w-[13%] gap-0.5">
              <Heading
                as="h6"
                className="!text-indigo-900_01 tracking-[0.12px] text-center"
              >
                <NavLink to={"/"}>Home</NavLink>
              </Heading>
              <div className="h-px w-full bg-indigo-900_01" />
            </div>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center"
            >
              Podcast
            </Heading>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center"
            >
              Blog
            </Heading>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center"
            >
              About
            </Heading>
            <Heading
              as="h6"
              className="!text-indigo-200_01 tracking-[0.12px] text-center"
            >
              <NavLink to={"/contactus"}>Contact</NavLink>
            </Heading>
          </div>
        </div>
        <Img
          src="images/img_search.svg"
          alt="search_one"
          className="h-[30px] w-[30px] mr-[139px] md:mr-5"
        />
      </header>
    </div>
  );
}

export default Header