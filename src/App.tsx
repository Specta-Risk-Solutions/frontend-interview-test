import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Link, Route, Routes } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { IoChatbubbleSharp } from "react-icons/io5";
import { PiSelectionForegroundFill } from "react-icons/pi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
// import { FaArrowRight } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import Home from "./components/Home";
import book2 from "./assets/book2.jpg"
import book3 from "./assets/book3.jpg"
// import Trends from "./components/Trends";
import ArtsFeedComponent from "./components/ArtsFeedComponent";
import ArticlePage from "./components/Articles";
import LibraryPage from "./components/Library";
import "./App.css";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex bg-primary max-h-min justify-between">
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
            <Link to="">
              {" "}
              <div className="flex items-center gap-4 hover:bg-mustard px-2 py-2 rounded-xl transition-all">
                {" "}
                <IoMdHome className=" text-xl" /> <p className="hidden md:block">Home </p>{" "}
              </div>
            </Link>
            <Link to="/artfeeds">
              <div className="flex items-center gap-4 hover:bg-mustard px-2 py-2 rounded-xl transition-all">
                {" "}
                <IoPeople  className="text-xl"/> <p className="hidden md:block"> Art Feeds</p>
              </div>
            </Link>
            <Link to="/articles">
              {" "}
              <div className="flex items-center gap-4 hover:bg-mustard px-2 py-2 rounded-xl transition-all">
                {" "}
                <PiSelectionForegroundFill className=" md:text-xl" /> <p className="hidden md:block">Articles </p>
              </div>{" "}
            </Link>
            <Link to="/library">
              {" "}
              <div className="flex items-center gap-4 hover:bg-mustard px-2 py-2 rounded-xl transition-all">
                <IoChatbubbleSharp className="text-xl" /> <p className="hidden md:block"> Library</p>
              </div>{" "}
            </Link>
            <Link to="">
              {" "}
              <div className="flex items-center gap-4 hover:bg-mustard px-2 py-2 rounded-xl transition-all">
                {" "}
                <IoIosNotificationsOutline  className="text-xl"/> <p className="hidden md:block"> Notifications</p>
              </div>
            </Link>
          </div>
          <hr className="my-3 hidden md:block" />
          <div className="text-white text-sm hidden md:block ">
            <ul className=" flex flex-col">
              <Link to="">
                {" "}
                <li className="flex items-center justify-between rounded-2xl hover:bg-mustard px-2 py-2">
                  Followed Authors{" "}
                  <span>
                    {" "}
                    <FaArrowRight />{" "}
                  </span>{" "}
                </li>{" "}
              </Link>
              <Link to="">
                {" "}
                <li className="flex items-center justify-between rounded-2xl hover:bg-mustard px-2 py-2">
                  Followed Readers{" "}
                  <span>
                    {" "}
                    <FaArrowRight />{" "}
                  </span>{" "}
                </li>{" "}
              </Link>
              <Link to="">
                {" "}
                <li className="flex items-center justify-between rounded-2xl hover:bg-mustard px-2 py-2">
                  My Teams{" "}
                  <span>
                    {" "}
                    <FaArrowRight />{" "}
                  </span>{" "}
                </li>{" "}
              </Link>
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artfeeds" element={<ArtsFeedComponent />} />
          <Route path="/articles" element={<ArticlePage />} />
          <Route path="/library" element={<LibraryPage />} />
        </Routes>

        {/* <Trends /> */}
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
      </div>
    </>
  );
}

export default App;
