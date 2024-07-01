import {Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
        <div className="flex justify-center items-center text-xs sm:text-lg">
            <div className="p-3 mt-5 rounded-xl border-solid border-2 border-gray-50 shadow-md shadow-blue-50 font-thin">
                <div className="flex justify-center space-x-6 cursor-pointer">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Project</Link>
                    <Link to="/certificates">Certificates</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </div>
        <Outlet/>
    </>
  )
}
