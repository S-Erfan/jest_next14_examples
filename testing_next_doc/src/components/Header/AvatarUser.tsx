import React from "react";

const AvatarUser = () => {
  return (
    <div className="flex flex-row-reverse justify-start items-center gap-2 " data-testid="avatar-user" >
      <div className="m-1 mr-2 w-12 h-12 p-2 relative flex justify-center items-center rounded-full bg-neutral-400 shadow-md text-xl text-black uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-full h-full"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
      <div className="flex flex-col items-end text-white " >
        <span>user name render</span>
        <span className="text-sm opacity-70" >role render</span>
      </div>
    </div>
  );
};

export default AvatarUser;
