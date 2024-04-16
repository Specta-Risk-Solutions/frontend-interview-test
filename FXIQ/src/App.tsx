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
// import Trends from "./components/Trends";
import ArtsFeedComponent from "./components/ArtsFeedComponent";
import ArticlePage from "./components/Articles";
import LibraryPage from "./components/Library";
import "./App.css";
import Trends from "./components/Trends";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="flex bg-primary max-h-screen overflow-y-hidden justify-between">
        <SideBar />

        <div className="overflow-y-scroll w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artfeeds" element={<ArtsFeedComponent />} />
            <Route path="/articles" element={<ArticlePage />} />
            <Route path="/library" element={<LibraryPage />} />
          </Routes>
        </div>
        

        <Trends />
      </div>
    </>
  );
}

export default App;
