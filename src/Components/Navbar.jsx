"use client"
import DashboardLayout from "@/app/(Dashboards)/DashboardOne/layout";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
 const links = [
    {
        title:"Home",
        path:"/"
    },
    {
        title:"About",
        path:"/about"
    },
    {
        title:"Services",
        path:"/Services"
    },
    {
        title:"Blogs",
        path:"/Blogs"
    },
    {
        title:"Posts",
        path:"/posts"
    },
    {
        title:"Meals",
        path:"/meals"
    },
    {
        title:"Gallery",
        path:"/gallery"
    },
 ]

const handle = () =>{
    router.push("/about")
}

if(pathName.includes("DashboardOne"))
  return <DashboardLayout></DashboardLayout>
  return (
    <div className="navbar bg-red-300">
      <div className="navbar-start">

        <a className="btn btn-ghost text-xl">NEXT HERO</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-8">
           {
            links?.map((link) => <Link className={`${pathName === link.path && "text-pink-400"}`} key={link.path} href={link.path} >{link.title}</Link>)
           }
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={handle} className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
