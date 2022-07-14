import React from "react"
import { useEffect } from "react"

const setPage = {
    home: false,
    about: false,
    login: true,
    register: false
}

function Login(props) {
    useEffect(() => {
        props.setnavPage(setPage)
    }, [])

    return (
        <>
            {/* <Header page="Login" /> */}
            <div>Login</div>
        </>
    )
}

export default Login

export const login = "Login"
