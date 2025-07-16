import React from "react";
import logo from "../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
    
        {/* Top bar with quick links */}
        <div className="bg-green-900 text-white text-sm px-0 py-1 w-full" style={{ backgroundColor: "var(--primaryGreen)" }}>
          <div className="container mx-auto flex justify-between items-center">
            {/* Left side quick links */}
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:underline">ITD</a>
              <a href="#" className="hover:underline">BoT</a>
              <a href="#" className="hover:underline">Quick Contacts</a>
            </div>
            {/* Right side quick links */}
            <div className="flex gap-6 items-center">
              <a href="#" className="hover:underline">Webmail</a>
              <a href="#" className="hover:underline">Transport</a>
              <div className="relative group">
                <button className="flex items-center gap-1 focus:outline-none">
                  <span>Quick info</span>
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Info 1</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">Info 2</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main navbar */}
        <div className="flex items-center justify-between px-6 py-3 bg-white bg-opacity-90 backdrop-blur-md">
          <div className="container mx-auto flex justify-between items-center">
            {/* Left: Logo and search */}
          <div className="flex items-center gap-6">
            {/* Logo image */}
            <img
              src={logo}
              alt="IIUC Logo"
              className="w-14 h-14 object-contain rounded"
            />
            {/* Search bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search here..."
                className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700 text-sm w-56"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            </div>
          </div>
          {/* Center: Menu */}
          <div className="flex gap-2 bg-white bg-opacity-90 rounded-full shadow px-4 py-2">
            {[
              { label: "About", items: ["Overview", "History", "Mission"] },
              { label: "Faculties", items: ["Faculty 1", "Faculty 2"] },
              { label: "Academic", items: ["Programs", "Calendar"] },
              { label: "Admission", items: ["Undergraduate", "Graduate"] },
              { label: "Research & publication", items: ["Research", "Publications"] },
              { label: "IQAC", items: ["IQAC Info"] },
            ].map((menu, idx) => (
              <div key={menu.label} className="relative group">
                <button className="px-3 py-1 rounded-full hover:bg-green-100 focus:outline-none flex items-center gap-1 text-gray-700 font-medium">
                  <span>{menu.label}</span>
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                {/* Dropdown */}
                <div className="absolute left-0 mt-2 w-44 bg-white rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity z-20">
                  {menu.items.map((item) => (
                    <a key={item} href="#" className="block px-4 py-2 hover:bg-gray-100 text-gray-700">{item}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          {/* Right: Contact and Login */}
          <div className="flex items-center gap-3">
            <button className="px-6 py-2 rounded-full border border-green-700 text-[#005C25] font-semibold hover:bg-green-50 transition">Contact us</button>
            <button className="px-6 py-2 rounded-full bg-[#005C25] text-white font-semibold hover:bg-green-800 transition">Log in</button>
          </div>
          </div>
          
        </div>
   
    </nav>
  );
};

export default Navbar;
