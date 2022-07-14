import React from "react"
import { Link } from "react-router-dom"
import logo from "../logo.png"
import Nav from "./Nav"

function Header(props) {
    return (
        <>
            <div className="sticky top-0 font-dosis_bold bg-primary_color text-white flex flex-row-reverse md:flex-row md:items-center justify-center md:justify-between selection:bg-third_color">
                <div className="flex flex-row items-center my-2 ml-6">
                    <img src={logo} alt="Todo list" className="md:w-16 w-10" />
                    <Link to="/" className="text-3xl ml-3 md:ml-8">
                        Todo List
                    </Link>
                </div>
                <input
                    type="checkbox"
                    className="peer cursor-pointer opacity-0 md:hidden w-[30px] h-[20px] absolute top-[18px] left-6 z-10 focus:bg-white"
                    id="checkbox"
                />
                <div className="md:hidden flex-none absolute top-[18px] left-6 w-[30px] h-[4px] mb-1 rounded-[2px] bg-white transition-all duration-500     peer-checked:-rotate-45 peer-checked:w-[15px] peer-checked:top-[20.5px] peer-checked:left-[22.5px]"></div>
                <div className="md:hidden flex-none absolute top-[26px] left-6 w-[30px] h-[4px] mb-1 rounded-[2px] bg-white"></div>
                <div className="md:hidden flex-none absolute top-[34px] left-6 w-[30px] h-[4px] rounded-[2px] bg-white transition-all duration-500      peer-checked:rotate-45 peer-checked:w-[15px] peer-checked:top-[31px] peer-checked:left-[22.5px]"></div>
                <div
                    id="menu"
                    className="bg-primary_color text-lg text-white w-[75%] md:w-auto h-[100%] -ml-[75%] md:m-0  p-fit md:py-0 md:pr-12 md:pl-0 fixed top-[56px] left-0 md:static  transition-all duration-1000 peer-checked:ml-0 z-10"
                >
                    <div className="relative md:static top-1/2 -translate-y-2/3 md:translate-y-0 flex flex-none md:flex flex-col md:flex-row items-center gap-y-10 md:gap-x-12">
                        <Nav page="home" />
                        <Nav page="about" />
                        <Nav page="login" />
                        <Nav page="register" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
