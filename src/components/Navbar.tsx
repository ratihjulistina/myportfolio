import React from "react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="m-auto sticky top-0  w-[100%] h-[59px] bg-white">
      <div className="w-[1192px] m-auto flex items-center justify-between border-b-[1px]">
        <div className="w-[50%] h-[59px] flex justify-start items-center">
          {/* <img
            className="h-[59px] w-[30%] object-cover mr-auto"
            src="ratihjulistina.png"
            alt=""
          /> */}
          <h1 className="font-bold text-black text-3xl">MY PORTFOLIO</h1>
        </div>
        <div className=" w-[40%] ml-auto text-black">
          <ul className="flex justify-between ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#stack">Tech Stack</Link>
            </li>
            <li>
              <Link href="#projects">Projects</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="pl-10 pr-10 flex justify-center items-center">
          <button className="pr-3">
            <a href="https://github.com/ratihjulistina" target="blank">
              <img src="github.svg" alt="" />
            </a>
          </button>
          <button>
            <a
              href="https://www.linkedin.com/in/ratih-julistina-911b2299/"
              target="blank"
            >
              <img src="linkedin.svg" alt="" />
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
