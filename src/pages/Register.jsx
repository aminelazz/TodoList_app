import React from "react"
import { useEffect } from "react"

const setPage = {
    home: false,
    about: false,
    login: false,
    register: true
}

function Register(props) {
    useEffect(() => {
        props.setnavPage(setPage)
    }, [])

    return (
        <>
            <div className="grid grid-cols-2">
                <label htmlFor="first_name">First name</label>
                <input type="text" name="" id="first_name" />

                <label htmlFor="last_name">Last name</label>
                <input type="text" name="" id="last_name" />

                <label htmlFor="email">Email</label>
                <input type="email" name="" id="email" />

                <label htmlFor="password">Password</label>
                <input type="password" name="" id="password" />

                <label htmlFor="confirm_password">Confirm password</label>
                <input type="password" name="" id="confirm_password" />

                <button>Register</button>
            </div>
        </>
    )
}

export default Register
