import React from "react";

export function About() {
  return (
    <div
      className="w-[1192px]  m-auto mt-[150px]  text-black flex justify-between items-center"
      id="about"
    >
      <div className=" mx-[80px] w-[600px]">
        <p className="text-3xl pb-6 italic font-bold ">Hi, my name is Ratih.</p>
        <p className="text-xl text-gray-800 font-montserrat">
          I am a mother of 2 boys. I graduated from an engineering major and
          have now started doing web things! I love to look at new opportunities
          that fit my vision. So, here I am, trying to conquer it. I am still
          doing my engineering stuff while learning new things. The world is
          just so dynamic, and so do I.
        </p>
      </div>
      <div className="w-[350px] px-10">
        <img className="object-cover rounded-[50%]" src="profil.jpg" />
      </div>
    </div>
  );
}

export function Mystack() {
  return (
    <div className="m-auto mt-[150px] flex flex-col items-center " id="stack">
      <div>
        <h1 className="font-bold text-3xl text-black text-center my-5">
          My Tech Stack
        </h1>
        <p className=" text-xl text-gray-800">
          Technology I've been working with
        </p>
      </div>
      <div className="grid grid-cols-4 gap-10 my-5 justify-center items-center ">
        <img className="w-[100px] h-[100px]" src="html.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="css3.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="javascript.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="react-native.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="nextjs.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="tailwindcss.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="github.svg" alt="" />
        <img className="w-[100px] h-[100px]" src="canva.svg" alt="" />
      </div>
    </div>
  );
}

export function Cards({
  projectPict,
  title,
  description,
}: {
  projectPict: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="shadow-2xl">
        <img
          className="h-[300px] object-cover rounded-tl-xl rounded-tr-xl"
          src={projectPict}
          alt=""
        />
      </div>

      <div className="h-[300px] rounded-bl-xl rounded-br-xl bg-gray-100 px-5 pt-5 shadow-2xl">
        <h2 className="font-bold font-poppins text-center pb-3 text-xl">
          {title}
        </h2>
        <p>{description}</p>
        <p className="text-xs pt-2  ">Tech Stack: HTML, NextJs, React</p>
        <a className="text-xs pt-2 font-medium flex " href="">
          <img className="w-3 pr-1" src="link.svg" alt="" /> See the preview
        </a>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <div
      className="m-auto mt-[150px] flex flex-col items-center "
      id="projects"
    >
      <div>
        <h1 className="font-bold  text-3xl text-black text-center my-5">
          Projects
        </h1>
        <p className=" text-gray-800 text-center text-xl font-poppins">
          Things I built so far
        </p>
      </div>
      <div className="w-[70%] grid grid-cols-3 mt-10 items-center gap-6">
        <Cards
          projectPict="gojek.jpg"
          title="Gojek Landing Page Cloning"
          description="Make my first landing page web cloning using React and Tailwindcss. Try to do slicing manually from the Gojek landing page."
        />
        <Cards
          projectPict="todolist.jpg"
          title="Todo List App UI"
          description="My second project is aimed at making the UI of the Todo List App that matches the requirements using Nextjs and Tailwindcss."
        />

        <Cards
          projectPict="todolist.jpg"
          title="Personal Portfolio Web Project"
          description="This portfolio web page is my third project. Here, I can show briefly about myself, and what project I've built, then showcase it in card projects."
        />
      </div>
    </div>
  );
}

export function Contact() {
  return (
    <div
      className="w-[1192px] m-auto mt-[150px] mb-[50px] flex justify-between items-center"
      id="contact"
    >
      <h2 className="pl-10 font-bold">Contact</h2>
      <h2 className="">ratihjulistina@gmail.com</h2>
    </div>
  );
}
