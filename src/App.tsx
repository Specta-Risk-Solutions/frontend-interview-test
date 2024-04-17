import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
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
