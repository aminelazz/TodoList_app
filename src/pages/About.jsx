import React from "react"
import { useEffect } from "react"

const setPage = {
    home: false,
    about: true,
    login: false,
    register: false
}

function About(props) {
    useEffect(() => {
        props.setnavPage(setPage)
    }, [])

    return (
        <>
            <div>About</div>
        </>
    )
}

export default About
