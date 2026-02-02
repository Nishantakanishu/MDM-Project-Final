

import { useState, useRef, useEffect } from "react";
import { MdKeyboardArrowDown, MdLogout, MdPerson } from "react-icons/md";

const ProfileDropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow hover:shadow-md transition"
      >
        <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold">
          N
        </div>
        <span className="text-sm font-medium">Nishant</span>
        <MdKeyboardArrowDown />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 transition-all duration-200 origin-top-right transform">
          <div className="px-4 py-3 border-b border-gray-50 bg-gray-50/50">
            <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">Account</p>
          </div>
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-green-50 text-gray-700 hover:text-green-700 w-full text-sm transition-colors group">
            <MdPerson className="text-lg group-hover:scale-110 transition-transform" /> 
            <span className="font-medium">My Profile</span>
          </button>
          <button className="flex items-center gap-3 px-4 py-3 hover:bg-red-50 text-red-600 w-full text-sm transition-colors group">
            <MdLogout className="text-lg group-hover:translate-x-1 transition-transform" /> 
            <span className="font-medium">Logout</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
