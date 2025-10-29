import React, { useState } from "react";

const ChatBox = () => {
  const [massagebox, setMassagebox] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 right-0 z-999">
        {/* chat box */}
        <div
          className={`fixed bottom-25 right-5 bg-[#e1f1f4] rounded-md w-80 border-1 border-gray-500 overflow-hidden transition-all duration-500 transform origin-bottom ${
            massagebox
              ? "translate-y-0 opacity-100 h-120 mb-4"
              : "translate-y-10 opacity-0 h-0"
          }`}
        >
          <div className="relative w-full flex flex-col h-15 bg-[#171616] p-2">
            <span className="text-md text-gray-300 font-bold">
              K-Exchange Customer Service
            </span>
            <span className="text-md text-gray-500">Thank you for contacting us!</span>
            <div className="absolute right-3 top-3 cursor-pointer text-white" onClick={()=>setMassagebox(!massagebox)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-x-circle-fill"
                viewBox="0 0 16 16"
              >
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293z" />
              </svg>
            </div>
          </div>
          {/* chat section */}
          <div className="flex flex-col gap-2 h-full overflow-auto scrollbar-hide p-2">
            <div className="flex flex-row gap-2  items-end ">
              <div className="rounded-full bg-cyan-300  p-2 flex items-center justify-center">
                <img
                  src="./coinlogo.png"
                  alt=""
                  className="h-[15px] w-[15px]"
                />
              </div>
              <divflex className="flex-col max-w-[75%] px-3 py-2 rounded-md  bg-green-300 text-black text-[.8rem] font-semibold">
                <p>Hi there. 👋</p>
                <p>Thank you for contacting us!</p>
                <p>Please explain your issue briefly so I can help!</p>
              </divflex>
            </div>
            {/* Customer message */}
            <div className="flex items-end justify-end space-x-2 w-full mb-4">
              <div className="flex flex-col bg-blue-400 text-white text-[0.85rem] font-medium rounded-lg px-3 py-2 max-w-[75%]">
                <p>Sure, I need help with my xyz problem.</p>
              </div>

              <div className="rounded-full bg-gray-400 w-10 h-10 flex items-center justify-center">
                {/* <img src="./user.png" alt="user" className="h-[15px]" /> */}
              </div>
            </div>
          </div>
        </div>

        {/* //   {/* chat open  button */}
        <div
          className="fixed bottom-5 right-10 h-20 w-20 flex items-center justify-center rounded-full bg-gray-900 cursor-pointer border border-gray-700 overflow-hidden"
          onClick={() => setMassagebox(!massagebox)}
        >
          <div
            className={`absolute transform transition-all h-28 w-20 flex flex-col primarycolor items-center justify-between duration-300  ${
              massagebox ? "-translate-y-10" : "translate-y-10"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-chat-dots-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-arrow-bar-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBox;
