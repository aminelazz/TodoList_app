import React from "react"
import not_found from "../404.svg"

function Error() {
    return (
        <div className="h-[90vh] md:h-[86vh] flex items-center justify-center">
            <div className="grid grid-cols-1 gap-y-5">
                <img
                    src={not_found}
                    alt="Page not found"
                    title="Page not found"
                    className="w-60 md:w-96 justify-self-center"
                />
                <div className="text-center dark:text-white transition-all duration-300">
                    Nous sommes désolés, mais la page que vous cherchez n'existe
                    pas
                </div>
            </div>
        </div>
    )
}

export default Error
