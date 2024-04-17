import { FaArrowRight, FaBookmark } from "react-icons/fa6"

import book2 from "../assets/book2.jpg"
import book3 from "../assets/book3.jpg"

export default function Trends() { 
    return (
        <div className=" md:h-screen text-white md:shadow-xl md:shadow-shade   py-5 px-5 w-1/3 hidden md:bg-primary md:block  md:sticky md:inset-0">
          <p className="text-white italic text-2xl flex items-center justify-between">
            {" "}
            Trending News <FaArrowRight className="text-mustard font-bold" />{" "}
          </p>
          <div className="py-5">
            <img className="w-full rounded-2xl" src={book2} />
            <p className="text-xs flex my-2">Books with more Reactions today....!! <span className="text-lg"> <FaBookmark className="text-mustard"/> </span> </p>
            <p className=" text-[10px] text-gray-400">5 hours ago</p>
            <hr/>
            <div className="flex gap-2 my-3">
              <img className="w-15 rounded-2xl h-14" src={book3} />
              <p className="flex flex-col text-xs "> Here are the top 100 Books and authors <span className="text-[10px] text-gray-400"> 11 oct 2023, 06:00 aM</span> </p>
              <FaBookmark className="text-mustard text-3xl"/> 
            </div>
            <div className="flex gap-2 my-3">
            <img className="w-15 rounded-2xl h-14" src={book3} />

              <p className="flex flex-col text-xs "> Here are the top 100 Books and authors<span className="text-[10px] text-gray-400"> 11 oct 2023, 06:00 aM</span> </p>
              <FaBookmark className="text-mustard text-3xl"/> 
            </div>
            <div className="flex gap-2 my-3">
            <img className="w-15  rounded-2xl h-14" src={book3} />
              <p className="flex flex-col text-xs "> Here are the top 100 Books and authors <span className="text-[10px] text-gray-400"> 11 oct 2023, 06:00 aM</span> </p>
              <FaBookmark className="text-mustard text-3xl"/> 
            </div>
          </div>
        </div>
    )
}