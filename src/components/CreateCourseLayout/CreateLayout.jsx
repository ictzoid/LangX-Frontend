import React, { useState, useRef, useEffect, Children } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

export default function CreateLayout({ children }) {
  const sideNavRef = useRef(null);

  useEffect(() => {
    // Add event listener to the document object
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      // Clicked outside the side navigation bar, close it
      // Implement your close side navigation bar logic here
    }
  }

  const [toggleSideBar, setToggleSideBar] = useState(false);
  return (
    <div>
      <TopBar
        toggleSideBar={toggleSideBar}
        setToggleSideBar={setToggleSideBar}
      />
      {toggleSideBar && (
        <div ref={sideNavRef} className="absolute top-0 left-0 z-[1000]">
          <Sidebar />
        </div>
      )}
      <div className={`${toggleSideBar ? "lg:ml-[11%] " : ""} lg:mt-[3%]`}>
        {children}
      </div>
    </div>
  );
}
