import { FaBookmark } from "react-icons/fa";
import book2 from "@local/assets/book2.jpg"
import book3 from "@local/assets/book3.jpg"
import { FaArrowRight } from "react-icons/fa6";
import { MouseEvent } from "react";
import clsx from "clsx";

export default function RightNav({ isOpen, toggle }: { isOpen: boolean, toggle: () => void }) {

    const closeNav = (e: MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            toggle();
        }
    }

    return (
        <div onClick={closeNav} className={clsx({ "fixed top-0 bottom-0 left-0 right-0 flex justify-end bg-transparent backdrop-blur-[2px]": isOpen }, { "w-1/3 hidden lg:block": !isOpen })}>
            <div className={clsx("md:h-screen bg-base-200 py-5 px-5 md:sticky md:inset-0", { "w-full": !isOpen }, { "md:w-[40%] lg:w-1/3 w-[60%] pt-20": isOpen })}>
                <p className="italic text-2xl flex items-center justify-between">
                    {" "}
                    Trending News{" "}
                </p>
                <div className="py-5">
                    <img className={clsx("w-full rounded-2xl")} src={book2} />
                    <p className="text-xs flex justify-between my-5">
                        Books with more Reactions today....!!
                        <span className="text-lg"> <FaBookmark className="text-primary" /> </span>
                    </p>
                    <p className=" text-[10px] text-gray-400">5 hours ago</p>
                    <hr className="my-3 border-d-dim dark:border-dim" />

                    <div className="flex gap-2 my-3">
                        <img className="w-15 rounded-lg h-14" src={book3} />
                        <p className="flex flex-col text-xs "> Here are the top 100 Books and authors <span className="text-[10px] text-gray-400"> 11 oct 2023, 06:00 aM</span> </p>
                        <FaBookmark className="text-primary text-2xl" />
                    </div>
                    <div className="flex gap-2 my-3">
                        <img className="w-15 rounded-lg h-14" src={book3} />
                        <p className="flex flex-col text-xs "> Here are the top 100 Books and authors<span className="text-[10px] text-gray-400"> 11 oct 2023, 06:00 aM</span> </p>
                        <FaBookmark className="text-primary text-2xl" />
                    </div>
                    <div className="flex gap-2 my-3">
                        <img className="w-15  rounded-lg h-14" src={book3} />
                        <p className="flex flex-col text-xs "> Here are the top 100 Books and authors <span className="text-[10px] text-gray-400"> 11 oct 2023, 06:00 aM</span> </p>
                        <FaBookmark className="text-primary text-2xl" />
                    </div>
                </div>
            </div>

            <div className={clsx("bg-base-200 absolute top-2/4 md:right-[40%] lg:right-1/3 right-[60%] rounded-full", { "hidden": !isOpen })}>
                <button onClick={toggle} className="btn btn-circle btn-primary btn-sm">
                    <FaArrowRight className="text-white font-bold" />
                </button>
            </div>
        </div >
    )
}