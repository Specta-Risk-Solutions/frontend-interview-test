
import { FaArrowRight } from "react-icons/fa6";
import clsx from "clsx";
import { TbLogout } from "react-icons/tb";
import { IoIosSearch, IoMdHome, IoMdSettings } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import Link from "@local/utils/link";
import { IoChatbubbleSharp, IoNotifications, IoPeople } from "react-icons/io5";
import { PiSelectionForegroundFill } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";
import { MouseEvent } from "react";

export default function SideNav({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) {

    const closeNav = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            toggle();
        }
    }

    return (
        <div onClick={closeNav} className={clsx("md:flex text-white md:flex-col h-screen top-0 z-10",
            { "fixed bottom-0 left-0 right-0 bg-transparent backdrop-blur-[2px]": isOpen },
            { " w-1/5 md:w-1/4 sticky": !isOpen })}>
            <div className={clsx("h-screen py-5 px-5 bg-base-200", { "w-max pt-16": isOpen })}>
                <p className="font-bold hidden md:block md:italic md:text-2xl text-lg">
                    {" "}
                    BOOKSHELF{" "}
                    <span className="text-primary font-semibold text-3xl">Arena</span>
                </p>
                <input
                    className={clsx("md:block input input-bordered my-5 rounded-3xl w-full", { "hidden": !isOpen })}
                    placeholder="Search"
                />

                {!isOpen && (
                    <div className="flex text-xl gap-3 flex-col">
                        <MdOutlineMenu onClick={toggle} className="md:hidden" />

                        <IoIosSearch className="md:hidden" />
                    </div>
                )}

                <div className="md:text-sm flex flex-col gap-3">
                    <ul className="menu gap-4 rounded-box px-0">
                        <li>
                            <Link to="">
                                <IoMdHome className="ml-2 md:text-2xl text-lg" />
                                <p className={clsx("md:block", { "hidden": !isOpen })}>Home </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/artfeeds">
                                <IoPeople className="ml-2 md:text-2xl text-lg" />
                                <p className={clsx("md:block", { "hidden": !isOpen })}>Art feeds </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/articles">
                                <PiSelectionForegroundFill className="ml-2 md:text-2xl text-lg" />
                                <p className={clsx("md:block", { "hidden": !isOpen })}>Articles </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/library">
                                <IoChatbubbleSharp className="ml-2 md:text-2xl text-lg" />
                                <p className={clsx("md:block", { "hidden": !isOpen })}>Library </p>
                            </Link>
                        </li>
                        <li>
                            <Link to="notification">
                                <IoNotifications className="ml-2 md:text-2xl text-lg" />
                                <p className={clsx("md:block", { "hidden": !isOpen })}>Notification </p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-3 hidden md:block border-d-dim dark:border-dim" />

                <div className="text-sm hidden md:block ">
                    <ul className="menu gap-4 rounded-box px-0">
                        <li>
                            <Link to="authors" className="justify-between px-2 py-2">
                                <p className={clsx("md:block ml-2", { "hidden": !isOpen })}>Followed Authors </p>
                                <FaArrowRight className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="readers" className="justify-between px-2 py-2">
                                <p className={clsx("md:block ml-2", { "hidden": !isOpen })}>Followed Readers </p>
                                <FaArrowRight className="text-lg" />
                            </Link>
                        </li>
                        <li>
                            <Link to="teams" className="justify-between px-2 py-2">
                                <p className={clsx("md:block ml-2", { "hidden": !isOpen })}>My Teams </p>
                                <FaArrowRight className="text-lg" />
                            </Link>
                        </li>
                    </ul>
                </div>

                <hr className="my-3 hidden md:block border-d-dim dark:border-dim" />

                <div className="text-white flex flex-col gap-3 md:gap-0">
                    <Link to="settings">
                        {" "}
                        <li className="flex  gap-2 items-center rounded-2xl hover:bg-mustard px-2 py-2">
                            {" "}
                            <IoMdSettings />
                            <p className={clsx("md:block", { "hidden": !isOpen })}> Setting </p>
                        </li>{" "}
                    </Link>
                    <Link to="profile">
                        {" "}
                        <li className="flex gap-2 items-center rounded-2xl hover:bg-mustard px-2 py-2">
                            {" "}
                            <FaUserCircle />
                            <p className={clsx("md:block", { "hidden": !isOpen })}>Saka Buka </p>{" "}
                        </li>{" "}
                    </Link>
                    <button className="flex gap-2 items-center rounded-2xl hover:bg-mustard px-2 py-2">
                        <TbLogout className="hover:text-mustard text-2xl font-bold" />{" "}
                        <p className={clsx("md:block", { "hidden": !isOpen })}>Logout </p>{" "}
                    </button>
                </div>
            </div>
        </div>
    )
}
