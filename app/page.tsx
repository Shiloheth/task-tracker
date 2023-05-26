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
  const [list, setList] = useState<any>([]);
  const [listName, setListName] = useState("");
  const [activeList, setActiveList] = useState<any>(false);
  const [addTaskActive, setAddTaskActive] = useState(true);
  const [element, setElement] = useState(false);
  const [selectedTask, setSelectedTask] = useState<any>("");

  type ListItem = {
    name: string;
    content: string[];
  };

  function handleinput(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskInput(e.target.value);
  }

  function save() {
    setList([...list, { name: listName, content: taskDetails }]);
    console.log(list);
  }

  function selected(obj: any) {
    setSelectedTask(obj);
    console.log(obj);
  }

  return (
    <div>
      <div className="grid grid-rows-1 grid-flow-col h-screen overflow-hidden">
        <div className="hidden lg:block row-span-1 overflow-y-auto h-screen col-span-full shadow-3xl bg-[#DCDCDC]">
          <h1 className=" text-2xl flex flex-0 mx-6 my-3 font-black inline-block">Task Tracker </h1>
          <div className="flex items-center mx-6 mt-16">
            <AiFillHome />
            <h1 className="px-3 ">Tasks</h1>
            <div className="ml-16 w-24 flex justify-end">{list.length}</div>
          </div>
          <div className="h-px my-3 mx-6 bg-[#111111]"></div>
          <div className="w-80 ml-1">
            <div className="truncate ml-1">
              {list &&
                list.map((listitem: ListItem, idx: number) => (
                  <ul
                    key={idx}
                    className="flex flex-1 items-center w-full px-6 py-1 border-rounded hover:bg-[#C6C6C6]"
                    onClick={() => selected(listitem)}
                  >
                    <li className="inline w-64 whitespace-normal">{listitem.name}</li>
                    <li className="flex flex-1 justify-end">{listitem.content.length}</li>
                  </ul>
                ))}
            </div>
          </div>
        </div>
        <div className="row-span-1 col-span-12 bg-[#f5f5f5] px-4">
          <div className="h-16 w-full flex items-center">
            <div className="flex flex-1">
              <div className="flex items-center">
                <FiMenu
                  onClick={() => {
                    setElement(!element);
                  }}
                  className="text-2xl lg:hidden"
                />
                <input
                  placeholder="Search..."
                  className="hidden lg:block w-full border-0 rounded mx-4 my-2 bg-transparent text-inherit focus:border-[#eaebed] p-2 focus:outline-none focus:border focus:bg-[#FAFAFA] focus:rounded-lg placeholder:text-inherit"
                />
                <h1 className="px-10 font-black text-2xl lg:hidden">Task Tracker</h1>
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
          <div className="flex items-center justify-center h-full relative">
            {selectedTask ? (
              <div className="h-full bg-[#f44336] absolute w-full">
                <div className="text-2xl font-extrabold p-5">Swap</div>
                <div className="bg-[#f2f2f2] m-4 p-2 font-medium">yo</div>
                <div>test</div>
              </div>
            ) : null}
            {activeList ? (
              <div className="flex flex-col rounded-t-lg overflow-y-auto pt-1 pb-2 bg-gray-0 border border-black/10 w-full mb-16 ">
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
                  <button
                    className="ml-2 bg-[#ff0021] px-4 py-2 rounded-md"
                    onClick={() => setActiveList(false)}
                  >
                    Cancel
                  </button>
                  <button className="ml-2 bg-[#5cdb5c] px-4 py-2 rounded-md" onClick={save}>
                    Save
                  </button>
                </div>
              </div>
            ) : (
              <div
                className="flex flex-col items-center mb-16 cursor-pointer"
                onClick={() => {
                  setActiveList(true);
                }}
              >
                <p className="text-xl">Add Task</p>
                <MdAdd className="text-5xl " />
              </div>
            )}
          </div>
        </div>
      </div>
      {element && (
        <div className="absolute w-80 h-full bg-[#DCDCDC] top-0 lg:hidden">
          <div className="flex w-full">
            <input
              placeholder="Search..."
              className="w-full border-0 rounded mx-4 my-2 bg-transparent text-inherit focus:border-[#eaebed] p-2 focus:outline-none focus:border focus:bg-[#FAFAFA] focus:rounded-lg placeholder:text-inherit"
            />
          </div>
          <div className="flex items-center mx-6 mt-16">
            <AiFillHome />
            <h1 className="px-3">Tasks</h1>
            <div className="flex grow justify-center"></div>
          </div>
        </div>
      )}
    </div>
  );
}
