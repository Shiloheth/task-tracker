"use client";
import { MdAdd } from "react-icons/md";

import { AiFillGithub } from "react-icons/ai";
import { BsListTask } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { useEffect } from "react";

export default function Home() {
  const [taskInput, setTaskInput] = useState<string>("");
  const [taskDetails, setTaskDetails] = useState<string[]>([]);
  const [list, setList] = useState<any>([""]);
  const [listName, setListName] = useState("");
  const [activeList, setActiveList] = useState<any>(null);
  const [addTaskActive, setAddTaskActive] = useState(true);
  const [element, setElement] = useState(false);
  function handleinput(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskInput(e.target.value);
  }

  function save() {
    setList([...list, { name: listName, content: taskDetails }]);
    console.log(list);
  }

  console.log(activeList);

  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col h-screen overflow-hidden">
        {/* <div className="row-span-1 overflow-y-auto h-screen col-span-13 shadow-3xl bg-[#fff]">
        <h1 className="w-40 text-center text-2xl flex flex-0 p-4">Task Tracker </h1>
        <div className="w-40 flex items-center h-7 p-4">
          <span>
            <BsListTask className="text-2xl mr-2" />
          </span>
          <span className="text-base flex-1">Tasks</span>
        </div>
        <div className="w-24" onClick={() => console.log()}>
          <ul className="truncate w-12">
            {list &&
              list.map((item: any, idx: any) => (
                <li key={idx} onClick={() => setActiveList(item)}>
                  {item.content &&
                    item.content.map((a: any) => {
                      return null; // or the appropriate JSX element
                    })}
                  {item.name}
                  {item.content}
                </li>
              ))}
          </ul>
        </div>
      </div> */}
        <div className="row-span-1 col-span-5 bg-[#f5f5f5] px-4">
          <div className="h-16 w-full flex items-center">
            <div className="flex flex-1">
              <div className="flex items-center">
                <FiMenu
                  onClick={() => {
                    setElement(!element);
                  }}
                  className="text-2xl focus"
                />
                <h1 className="px-10 font-black text-2xl">Task Tracker</h1>
              </div>

              {/* <input
              placeholder="Search..."
              className="border-0 rounded ml-4 bg-transparent text-inherit focus:border-[#eaebed] p-2 focus:outline-none focus:border placeholder:text-inherit"
            /> */}
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
          <div className=""></div>
          <div className="flex items-center justify-center h-full">
            {false && (
              <div className="flex flex-col fixed bottom-0 top-1/4 rounded-t-lg overflow-y-auto pt-1 pb-2 bg-gray-0 mx-auto max-w-2xl w-full  md:top-1/4 md:left-1/2 md:-translate-x-1/2 md:rounded-lg md:border md:border-black/10 md:dark:bg-gray-100 md:dark:border-white/20 md:bottom-auto">
                <input
                  placeholder="Task Name"
                  className="border-0 bg-transparent"
                  onChange={e => {
                    setListName(e.target.value);
                  }}
                  value={listName}
                />
                <ul>
                  {taskDetails.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
                <div className="flex flex-row  items-center">
                  <input
                    placeholder="Task Details"
                    className="flex flex-1 border-0 bg-transparent"
                    onChange={handleinput}
                    value={taskInput}
                  />
                  <div
                    className="px-2 cursor-pointer"
                    onClick={() => {
                      setTaskDetails([...taskDetails, taskInput]);
                      setTaskInput("");
                    }}
                  >
                    <MdAdd />
                  </div>
                </div>

                <div className="flex justify-end p-1">
                  <button className="ml-2 bg-[#ff0021] px-4 py-2 rounded-md">Cancel</button>
                  <button className="ml-2 bg-[#5cdb5c] px-4 py-2 rounded-md" onClick={save}>
                    Save
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-col items-center mb-16">
              <p className="text-xl">Add Task</p>
              <MdAdd className="text-5xl cursor-pointer" />
            </div>

            {activeList !== null ? (
              <div>
                <div>{activeList.name}</div>

                {activeList.content.map((item: any, index: number) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {element && (
        <div className="absolute w-96 h-full bg-[#DCDCDC] top-0">
          <div className="flex w-full">
            <input
              placeholder="Search..."
              className="w-full border-0 rounded mx-4 my-2 bg-transparent text-inherit focus:border-[#eaebed] p-2 focus:outline-none focus:border focus:bg-[#FAFAFA] focus:rounded-lg placeholder:text-inherit"
            />
          </div>
          <div>Tasks</div>
        </div>
      )}
    </div>
  );
}
