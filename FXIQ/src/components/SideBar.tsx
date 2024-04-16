import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSearch, IoMdHome, IoIosNotificationsOutline, IoMdSettings, IoIosLogOut } from "react-icons/io";
import { IoPeople, IoChatbubbleSharp } from "react-icons/io5";
import { MdOutlineMenu } from "react-icons/md";
import { PiSelectionForegroundFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { LinkItems, ActionLinks } from "../constants/links";

export default function SideBar() { 
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (
        <div className="md:flex text-white md:flex-col  py-5 px-5 shadow-xl shadow-shade bg-primary h-screen w-1/5  md:w-1/4 sticky inset-0 ">
            <p className="text-white hidden md:block font-bold  md:italic md:text-2xl">
                {" "}
                BOOKSHELF{" "}
                <span className=" text-mustard font-semibold text-4xl">Arena</span>
            </p>
            <input
                className="bg-shade hidden md:block rounded-3xl font-bold my-5 px-5 py-2"
                placeholder="Search"
            />
            <div className="flex text-xl gap-3 flex-col">
                <MdOutlineMenu className="md:hidden" />

                <IoIosSearch className="md:hidden" />
            </div>

            <div className="text-white md:text-sm flex flex-col gap-3">
                {LinkItems.map(link => (
                    <Link key={link.name} to={link.url}>
                        {" "}
                        <div className="flex items-center gap-4 hover:bg-mustard px-2 py-2 rounded-xl transition-all">
                            {" "}
                            <link.icon className=" text-xl" /> <p className="hidden md:block">{link.name} </p>{" "}
                        </div>
                    </Link>
                ))}
            </div>
            <hr className="my-3 hidden md:block" />
            <div className="text-white text-sm hidden md:block ">
                <ul className=" flex flex-col">
                    {ActionLinks.map(link => (
                        <Link to={link.url}>
                            {" "}
                            <li className="flex items-center justify-between rounded-2xl hover:bg-mustard px-2 py-2">
                                { link.name }{" "}
                                <span>
                                    {" "}
                                    <link.icon />{" "}
                                </span>{" "}
                            </li>{" "}
                        </Link>
                    ))}
                    
                </ul>
            </div>
            <hr className="my-3 hidden md:block" />
            <div className="text-white  flex flex-col gap-3 md:gap-0 md:flex-row justify-between items-center">
                <Link to="">
                    {" "}
                    <li className="flex  gap-2 items-center justify-between rounded-2xl hover:bg-mustard px-2 py-2">
                        {" "}
                        <IoMdSettings /> <p className="hidden md:block"> Setting </p>
                    </li>{" "}
                </Link>
                <Link to="">
                    {" "}
                    <li className="flex gap-2 items-center justify-between rounded-2xl hover:bg-mustard px-2 py-2">
                        {" "}
                        <FaUserCircle /> <p className="hidden md:block">Saka Buka </p>{" "}
                    </li>{" "}
                </Link>
                <button>
                    <IoIosLogOut className="hover:text-mustard text-2xl font-bold" />{" "}
                </button>
            </div>
        </div>
    )
}