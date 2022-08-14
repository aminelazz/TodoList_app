import React from "react"
import { Link } from "react-router-dom"
import logo from "../logo.png"
import Nav from "./Nav"

function Header() {
    if (localStorage.getItem("theme") === null) {
        localStorage.setItem("theme", "light")
    }

    setTimeout(() => {
        let switch_div = document.getElementById("switch")
        let html = document.getElementById("html")

        if (localStorage.getItem("theme") === "dark") {
            switch_div.classList.replace(
                "translate-x-[3px]",
                "translate-x-[23px]"
            )
            html.classList.add("dark")
        }
    }, 0)

    function change_theme() {
        let switch_div = document.getElementById("switch")
        let html = document.getElementById("html")

        if (localStorage.getItem("theme") === "light") {
            switch_div.classList.replace(
                "translate-x-[3px]",
                "translate-x-[23px]"
            )
            html.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else if (localStorage.getItem("theme") === "dark") {
            switch_div.classList.replace(
                "translate-x-[23px]",
                "translate-x-[3px]"
            )
            html.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }
    return (
        <>
            <div className="sticky top-0 font-dosis_bold bg-primary text-white flex flex-row md:flex-row md:items-center justify-center md:justify-between md:gap-x-12 selection:bg-third_color">
                <div className="flex flex-row grow items-center justify-center md:justify-start my-2 ml-6">
                    <img src={logo} alt="Todo list" className="md:w-16 w-10" />
                    <Link to="/" className="text-3xl ml-3 md:ml-8">
                        Todo List
                    </Link>
                </div>
                <button
                    type="checkbox"
                    className="peer cursor-pointer md:hidden w-[30px] h-[20px] absolute top-[18px] left-6 z-10"
                    id="checkbox"
                >
                    <div className="md:hidden flex-none w-[30px] h-[4px] mb-1 rounded-[2px] bg-white"></div>
                    <div className="md:hidden flex-none w-[30px] h-[4px] mb-1 rounded-[2px] bg-white"></div>
                    <div className="md:hidden flex-none w-[30px] h-[4px] rounded-[2px] bg-white"></div>
                </button>
                <div
                    id="menu"
                    className="bg-primary text-lg text-white w-[75%] md:w-auto h-[100%] -ml-[75%] md:m-0  p-fit md:py-0 md:pl-0 fixed top-[56px] left-0 md:static  transition-all duration-1000 peer-focus:ml-0 z-10"
                >
                    <div className="relative md:static top-1/2 -translate-y-2/3 md:translate-y-0 flex flex-none md:flex flex-col md:flex-row items-center gap-y-10 md:gap-x-12">
                        <Nav page="home" />
                        <Nav page="about" />
                        <Nav page="login" />
                        <Nav page="register" />
                    </div>
                </div>
                <button
                    onClick={change_theme}
                    className="group self-center w-11 h-6 mr-6 md:mr-12 rounded-full outline outline-[3px] outline-white"
                >
                    <div
                        id="switch"
                        className="bg-white w-[18px] h-[18px] translate-x-[3px] rounded-full transition-all duration-300"
                    ></div>
                </button>
            </div>
        </>
    )
}

export default Header
