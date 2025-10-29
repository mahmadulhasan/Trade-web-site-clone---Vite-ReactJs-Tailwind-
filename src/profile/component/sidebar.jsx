import React from "react";

const Sidebar = () => {
  return (
    <div className="w-full flex flex-col gap-3 py-3 items-center  justify-center">
      <div className="flex flex-col gap-6 lg:gap-10 py-5 overflow-y-auto scrollbar-hide">
        
        <div className="flex flex-wrap gap-2 backgroundprimary md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            class="ICAssetOverview_svg__icon"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
          >
            <path d="M400.48 142.432a38.4 38.4 0 01-20.768 50.176 346.624 346.624 0 00-112.096 75.008A344.384 344.384 0 00166.4 512c0 190.88 154.72 345.6 345.6 345.6 95.456 0 181.792-38.656 244.384-101.216a346.112 346.112 0 0075.008-112.096 38.4 38.4 0 0170.944 29.408 422.848 422.848 0 01-91.648 136.992zm410.208 668.256A421.216 421.216 0 01512 934.4C278.72 934.4 89.6 745.28 89.6 512c0-116.64 47.328-222.272 123.712-298.688a422.848 422.848 0 01136.992-91.648 38.4 38.4 0 0150.176 20.768z"></path>
            <path d="M473.6 128A38.4 38.4 0 01512 89.6c233.28 0 422.4 189.12 422.4 422.4a38.4 38.4 0 01-38.4 38.4H512a38.4 38.4 0 01-38.4-38.4V128zm76.8 40.512V473.6h305.088A345.696 345.696 0 00550.4 168.512z"></path>
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            Dashboard
          </span>
        </div>
        <div className="flex flex-wrap gap-2 hover:bg-[#f8b121] md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-shield-fill-check"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.8 11.8 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7 7 0 0 0 1.048-.625 11.8 11.8 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.54 1.54 0 0 0-1.044-1.263 63 63 0 0 0-2.887-.87C9.843.266 8.69 0 8 0m2.146 5.146a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793z"
            />
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            Security
          </span>
        </div>
        <div className="flex flex-wrap gap-2 hover:bg-[#f8b121] md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-person-vcard"
            viewBox="0 0 16 16"
          >
            <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4m4-2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5M9 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 9 8m1 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5" />
            <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM1 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H8.96q.04-.245.04-.5C9 10.567 7.21 9 5 9c-2.086 0-3.8 1.398-3.984 3.181A1 1 0 0 1 1 12z" />
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            Identity
          </span>
        </div>
        <div className="flex flex-wrap gap-2 hover:bg-[#f8b121] md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrows-angle-contract"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M.172 15.828a.5.5 0 0 0 .707 0l4.096-4.096V14.5a.5.5 0 1 0 1 0v-3.975a.5.5 0 0 0-.5-.5H1.5a.5.5 0 0 0 0 1h2.768L.172 15.121a.5.5 0 0 0 0 .707M15.828.172a.5.5 0 0 0-.707 0l-4.096 4.096V1.5a.5.5 0 1 0-1 0v3.975a.5.5 0 0 0 .5.5H14.5a.5.5 0 0 0 0-1h-2.768L15.828.879a.5.5 0 0 0 0-.707"
            />
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            API Management
          </span>
        </div>
        <div className="flex flex-wrap gap-2 hover:bg-[#f8b121] md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-file-earmark-person-fill"
            viewBox="0 0 16 16"
          >
            <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755" />
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            Sub Accounts
          </span>
        </div>
        <div className="flex flex-wrap gap-2 hover:bg-[#f8b121] md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-bar-down"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5M8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6"
            />
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            Export History
          </span>
        </div>
        <div className="flex flex-wrap gap-2 hover:bg-[#f8b121] md:py-1.5 md:px-3 min-w-[1025px]:rounded-full rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-gift-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zm6 4v7.5a1.5 1.5 0 0 1-1.5 1.5H9V7zM2.5 16A1.5 1.5 0 0 1 1 14.5V7h6v9z" />
          </svg>
          <span className="lg:text-[1rem] md:text-[.7rem] text-[.5rem]">
            Reward
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
