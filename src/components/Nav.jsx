import React from "react"
import { NavLink } from "react-router-dom"

function Nav(props) {
    const page = props.page
    let style =
        // "border-b-4 border-b-white px-2 hover:underline underline-offset-8 decoration-4 relative top-[20%] md:static"
        "border-b-4 hover:border-b-white rounded px-2 relative top-[20%] md:static"
    let activeLink = ({ isActive }) =>
        isActive ? `border-b-white  ${style}` : `border-b-transparent  ${style}`
    return (
        <NavLink to={`/${page === "home" ? "" : page}`} className={activeLink}>
            {page.charAt(0).toUpperCase() + page.slice(1)}
            {/* {page} */}
        </NavLink>
    )
}

export default Nav
