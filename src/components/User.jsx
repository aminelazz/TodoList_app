import React from "react"
import { auth } from "../firebase/firebase"
import { Link } from "react-router-dom"

function User(props) {
    var login_underline, register_underline
    switch (props.page) {
        case "Login":
            login_underline = "underline"
            break

        case "Register":
            register_underline = "underline"
            break

        default:
            break
    }
    if (auth.currentUser) {
        return console.log("Connected")
    } else {
        return (
            <>
                <Link
                    to="/login"
                    className={`relative top-[20%] md:static ${login_underline} hover:underline underline-offset-8 decoration-4 w-fit before:content-['0'] before:text-transparent after:content-['0'] after:text-transparent`}
                >
                    Log in
                </Link>
                <Link
                    to="/register"
                    className={`relative top-[20%] md:static ${register_underline} hover:underline underline-offset-8 decoration-4 w-fit before:content-['0'] before:text-transparent after:content-['0'] after:text-transparent`}
                >
                    Register
                </Link>
            </>
        )
    }
}

export default User
