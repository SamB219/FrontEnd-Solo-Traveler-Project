
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/auth/Login";
import Dashboard from "./components/dash/Dashboard";
import Signup from "./components/auth/Signup";
import { useEffect, useState } from "react";
import Profile from "./components/profile/Profile";

function Shell() {
    //State for user token and user name
    const [sessionToken, setSessionToken] = useState("");



    //Function for updating token in local storage
    const updateLocalToken = (newToken) => {
        localStorage.setItem("token", newToken);
        setSessionToken(newToken);
    };

    //Effect that keeps the token when the page re-renders
    useEffect(() => {
        if (localStorage.getItem("token")) {
            setSessionToken(localStorage.getItem("token"));
        }
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Login updateToken={updateLocalToken} />} />
                <Route
                    path="/signup"
                    element={<Signup updateToken={updateLocalToken} />}
                />
                <Route path="/dash" element={<Dashboard
                    token={sessionToken} />} />
                <Route path="/profile" element={<Profile
                    token={sessionToken} />} />
            </Routes>
        </div>
    );
}

export default Shell;
