import logo from "../logo.png"
import { Link } from "react-router-dom"
import { useEffect } from "react"

const setPage = {
    home: true,
    about: false,
    login: false,
    register: false
}

function Home(props) {
    useEffect(() => {
        props.setnavPage(setPage)
    }, [])

    return (
        <>
            {/* <Header page="Home" /> */}
            <div className="mt-10 md:mt-[5%] flex flex-col md:flex-row justify-evenly">
                <div className="text-center flex flex-col justify-center gap-y-8">
                    <span className="font-titillium_web text-2xl font-bold">
                        Welcome to Todo List
                    </span>
                    <span className="px-4 font-dosis text-2xl font-thin">
                        <Link
                            to="/login"
                            className="text-primary_color font-bold"
                        >
                            Sign in
                        </Link>{" "}
                        right now to begin your Todo List
                    </span>
                </div>
                <div className="flex justify-center pt-12 md:p-0">
                    <img
                        src={logo}
                        alt="Todo App"
                        className="w-[200px] md:w-[400px]"
                    />
                </div>
            </div>
        </>
    )
}

export default Home

export const home = "Home"
