import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Error from "./pages/Error"

function App() {
    let state = {
        home: false,
        about: false,
        login: false,
        register: false
    }
    const [page, setPage] = useState(state)
    function changePage(value) {
        setPage(value)
    }
    return (
        <Router>
            <div className="min-h-screen bg-second_color dark:bg-third_color">
                <Header navPage={page} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home setnavPage={changePage} />}
                    />
                    <Route
                        exact
                        path="/"
                        element={<Home setnavPage={changePage} />}
                    />
                    <Route
                        path="/about"
                        element={<About setnavPage={changePage} />}
                    />
                    <Route
                        path="/login"
                        element={<Login setnavPage={changePage} />}
                    />
                    <Route
                        path="/register"
                        element={<Register setnavPage={changePage} />}
                    />
                    <Route path="*" element={<Error />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App
