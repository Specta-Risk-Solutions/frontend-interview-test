import ArtsFeedComponent from "@local/components/ArtsFeedComponent";
import ArticlePage from "@local/components/Articles";
import LibraryPage from "@local/components/library";
import { Route, Routes } from "react-router-dom";
import Layout from "@local/layouts/MainLayout";
import Home from "@local/components/home";
import "./App.css";

function App() {
    return (
        <>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/artfeeds" element={<ArtsFeedComponent />} />
                    <Route path="/articles" element={<ArticlePage />} />
                    <Route path="/library" element={<LibraryPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default App;
