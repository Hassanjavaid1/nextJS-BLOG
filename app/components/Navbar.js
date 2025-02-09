"use client"
import { useRouter } from "next/navigation";

function Navbar() {
 const router = useRouter();
  const homeRoute = () =>{
       router.push('/')
  }
  return (
    <>
      <div>
        <div className="container mx-auto p-4 py-5">
          <nav className="flex items-center justify-between">
            <h1 className="text-yellow-400 text-3xl cursor-pointer" onClick={homeRoute} >
              Tech<span className="font-semibold">Blog</span>
            </h1>
            <button className=" hover:text-yellow-400 text-lg">SIGN IN</button>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;
