import React from "react"
import not_found from "../404.svg"

function Error() {
    return (
        <div className="">
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] grid grid-cols-1 gap-y-5">
                <img
                    src={not_found}
                    alt="Page not found"
                    title="Page not found"
                    className="w-60 md:w-96 justify-self-center"
                />
                <div className="text-center">
                    Nous sommes désolés, mais la page que vous cherchez n'existe
                    pas
                </div>
            </div>
        </div>
    )
}

export default Error
