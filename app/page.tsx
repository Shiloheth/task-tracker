"use client";
import { MdAdd } from "react-icons/md";

import { AiFillGithub } from "react-icons/ai";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState(null);
  const [taskDetails, setTaskDetails] = useState([null]);

  return (
    <div className="grid grid-rows-1 grid-flow-col h-screen overflow-hidden">
      <div className="row-span-1 overflow-y-auto h-screen col-span-13">
        <h1>task list</h1>
      </div>
      <div className="row-span-1 col-span-5">
        <div className="h-16 w-full flex items-center">
          <div className="flex flex-1">
            <input
              placeholder="Search..."
              className="border-0 rounded ml-4 bg-transparent text-inherit focus:border-[#eaebed] p-2 focus:outline-none focus:border placeholder:text-inherit"
            />
          </div>

          <a
            className="flex-0"
            href="https://github.com/shiloheth"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub className="text-4xl" />
          </a>
        </div>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col fixed bottom-0 top-1/4 rounded-t-lg overflow-y-auto pt-1 pb-2 bg-gray-0 mx-auto max-w-2xl w-full  md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:border md:border-black/10 md:dark:bg-gray-100 md:dark:border-white/20 md:bottom-auto">
            <input placeholder="Task Name" className="border-0 bg-transparent" />
            <ul>
              {taskDetails.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
            <div className="flex flex-row  items-center">
              <input placeholder="Task Details" className="flex flex-1 border-0 bg-transparent" />
              <div className="px-2 cursor-pointer">
                <MdAdd />
              </div>
            </div>

            <div className="flex justify-end p-1">
              <button className="ml-2 bg-[#ff0021] px-4 py-2 rounded-md">Cancel</button>
              <button className="ml-2 bg-[#5cdb5c] px-4 py-2 rounded-md">Save</button>
            </div>
          </div>
          <p className="text-xl">Add Task</p>
          <MdAdd className="text-5xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
