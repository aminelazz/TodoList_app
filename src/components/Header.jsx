// import React from "react"
import { Link } from "react-router-dom"
import logo from "../logo_2.png"

function Header() {
    return (
        <>
            <div className="bg-primary_color text-white flex flex-row items-center justify-between">
                <div className="flex flex-row items-center m-2 ml-6">
                    <img src={logo} alt="Todo list" height={80} width={80} />
                    <span className="text-3xl font-bold font-dosis mx-8  selection:bg-third_color">
                        Todo List
                    </span>
                </div>
                <div className="text-lg font-bold font-dosis text-transparent md:header_nav_min_768px">
                    <Link
                        to="/"
                        className="underline underline-offset-8 decoration-4 before:content-['0'] before:text-transparent after:content-['0'] after:text-transparent selection:bg-third_color"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="hover:underline underline-offset-8 decoration-4 before:content-['0'] before:text-transparent after:content-['0'] after:text-transparent selection:bg-third_color"
                    >
                        About
                    </Link>

                    <Link
                        to="/login"
                        className="hover:underline underline-offset-8 decoration-4 before:content-['0'] before:text-transparent after:content-['0'] after:text-transparent selection:bg-third_color"
                    >
                        Log in
                    </Link>

                    <Link
                        to="/register"
                        className="hover:underline underline-offset-8 decoration-4 before:content-['0'] before:text-transparent after:content-['0'] after:text-transparent selection:bg-third_color"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header
