import React from "react"

function Register() {
    return (
        <>
            <div className="mt-12 font-dosis_bold text-xl flex justify-center dark:text-white transition-all duration-300">
                Register
            </div>
            <div className="my-12 font-dosis_bold text-xl flex justify-center dark:text-white transition-all duration-300">
                Or
            </div>
            <form className="flex justify-center">
                <div className="w-[600px] mx-[10%] p-6 flex flex-col gap-y-2 rounded-md outline outline-black dark:outline-gray-400 transition-all duration-300">
                    <div className="grid grid-cols-2 gap-x-2">
                        <div>
                            <input
                                type="text"
                                name=""
                                id="first_name"
                                className="w-full h-9 px-[6px] font-titillium_web outline outline-2 rounded-sm [&:not(:placeholder-shown)]:text-white"
                                placeholder="First name"
                            />
                            <label
                                htmlFor="first_name"
                                className="bg-white px-1 font-dosis_bold font-thin cursor-text select-none relative -top-[30px] left-[6px]"
                            >
                                First name
                            </label>
                        </div>

                        <div>
                            <input
                                type="text"
                                name=""
                                id="last_name"
                                className="w-full h-9 px-[6px] font-titillium_web  outline outline-2 rounded-sm"
                                placeholder="Last name"
                            />
                            <label
                                htmlFor="last_name"
                                className="bg-white px-1 font-dosis_bold font-thin cursor-text select-none relative -top-[30px] left-[6px]"
                            >
                                Last name
                            </label>
                        </div>
                    </div>

                    <div>
                        <input
                            type="email"
                            name=""
                            id="email"
                            className="w-full h-9 px-[6px] font-titillium_web  outline outline-2 rounded-sm"
                            placeholder="Email"
                        />
                        <label
                            htmlFor="email"
                            className="bg-white px-1 font-dosis_bold font-thin cursor-text select-none relative -top-[30px] left-[6px]"
                        >
                            Email
                        </label>
                    </div>

                    <div className="grid grid-cols-2 gap-x-2">
                        <div>
                            <input
                                type="password"
                                name=""
                                id="password"
                                className="w-full h-9 px-[6px] font-titillium_web  outline outline-2 rounded-sm"
                                placeholder="Password"
                            />
                            <label
                                htmlFor="password"
                                className="bg-white px-1 font-dosis_bold font-thin cursor-text select-none relative -top-[30px] left-[6px]"
                            >
                                Password
                            </label>
                        </div>

                        <div>
                            <input
                                type="password"
                                name=""
                                id="confirm"
                                className="w-full h-9 px-[6px] font-titillium_web  outline outline-2 rounded-sm"
                                placeholder="Confirm"
                            />
                            <label
                                htmlFor="confirm"
                                className="bg-white px-1 font-dosis_bold font-thin cursor-text select-none relative -top-[30px] left-[6px]"
                            >
                                Confirm
                            </label>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <input
                            type="submit"
                            value="Register"
                            className="bg-primary w-[30%] text-white text-center"
                        />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Register
