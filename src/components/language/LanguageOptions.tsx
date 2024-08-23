import { useState } from "react";

const LanguageOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative [&>*]:w-28">
      <button onClick={() => setIsOpen(!isOpen)}>
        <span>click</span>
      </button>
      <ul
        className={`${
          !isOpen ? "hidden" : ""
        } absolute top-full right-[0px] shadow-xl rounded mt-2 py-2 z-10 backdrop-blur-md border-2 border-opacity-40`}
      >
        <li className="px-4 py-2 hover:bg-slate-400 cursor-pointer">English</li>
        <li className="px-4 py-2 hover:bg-slate-400 cursor-pointer">Spanish</li>
      </ul>
    </div>
  );
};

export default LanguageOptions;
