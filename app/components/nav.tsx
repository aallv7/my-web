"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className="
        sticky
        place-self-center
        w-[98%]
        grid
        grid-rows-1
        grid-cols-4
        gap-2
        justify-center
        bg-[rgba(102,91,201,0.27)] 
        rounded-2xl
        top-0 left-0 bottom-0 right-0
        box-border
        m-2 p-4
        drop-shadow-xl/50
        ">
            <div className="
            col-span-2
            ">
                <h1
                className="
                text-2xl
                font-bold
                ">
                    AlvDev
                </h1>
            </div>
            <nav 
            className="
            col-start-3
            col-end-5
            hidden
            gap-[2%]
            justify-end

            md:flex
            ">

                <a href=""
                className="
                ">
                    Home
                </a>

                <a href=""
                className="
                ">
                    About
                </a>

                <a href=""
                className="
                ">
                    Projects
                </a>

                <a href=""
                className="
                ">
                    Blog
                </a>

                <a href=""
                className="
                ">
                    Contact
                </a>

            </nav>

            <div  className="md:hidden flex col-start-5">
                <button 
                onClick={toggleMenu}
                type="button"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                >X</button>
            </div>

            <div className={`${isOpen ? "col-start-4 row-start-2 grid" : "hidden"} md:hidden`} id="mobile-menu">
                <nav 
                className="
                grid
                grid-cols-1
                gap-[2%]
                justify-items-end
                ">

                    <a href=""
                    className="
                    ">
                        Home
                    </a>

                    <a href=""
                    className="
                    ">
                        About
                    </a>

                    <a href=""
                    className="
                    ">
                        Projects
                    </a>

                    <a href=""
                    className="
                    ">
                        Blog
                    </a>

                    <a href=""
                    className="
                    ">
                        Contact
                    </a>

                </nav>
            </div>
            
        </div>
    )
}