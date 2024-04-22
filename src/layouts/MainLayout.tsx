import { useState } from "react";
import Trending from "@local/components/trending";
import SideNav from "./sideNav";
import { MdOutlineMenu } from "react-icons/md";
import clsx from "clsx";


function Layout({ children }: { children: React.ReactNode }) {
    const [isTrendingOpen, setIsTrendingOpen] = useState(false);
    const [isSideNavOpen, setIsSideNavOpen] = useState(false);
    const toggleTrending = () => {
        setIsTrendingOpen(!isTrendingOpen);
    };
    const toggleSideNav = () => {
        setIsSideNavOpen(!isSideNavOpen);
    };

    return (
        <>
            <div className="flex bg-base-100 max-h-min justify-between">
                <SideNav isOpen={isSideNavOpen} toggle={() => toggleSideNav()} />

                <div className="w-full">
                    <div className="navbar bg-base-100 sticky top-0 z-10 flex lg:hidden">
                        <div className="navbar-start">
                            <button onClick={toggleSideNav} className={clsx("btn btn-ghost btn-circle md:hidden", { "hidden": !isSideNavOpen })}>
                                <MdOutlineMenu className="h-5 w-5" />
                            </button>
                        </div>
                        <div className="navbar-center">
                            <a className="btn btn-ghost text-xl hidden sm:block md:hidden">
                                <p className="font-bold md:italic">
                                    {" "}
                                    BOOKSHELF{" "}
                                    <span className="text-primary font-semibold text-3xl">Arena</span>
                                </p>
                            </a>
                        </div>
                        <div className="navbar-end">
                            <button onClick={toggleTrending} className="btn btn-primary btn-sm mx-3 block lg:hidden">
                                Trending
                            </button>
                        </div>
                    </div>
                    <div className="container bg-base-100 px-5 md:px-10 mx-auto pt-10">
                        {children}
                    </div>
                </div>

                {/* <Trends /> */}
                <Trending isOpen={isTrendingOpen} toggle={() => toggleTrending()} />
            </div>
        </>
    );
}

export default Layout;
