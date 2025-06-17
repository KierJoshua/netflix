import axios from "axios"
import { useState } from "react";
import { createContext } from "react"

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    axios.defaults.withCredentials = true;

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState(false)

    const getUserData = async () => {
        try {
            const {data} = await axios.get(backendUrl + '/api/accounts/data')
            data.success ? setUserName(data.name) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        backendUrl,
        isLoggedIn, setIsLoggedIn,
        userName, setUserName,
        getUserData
    }

    return (
        <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
    )

}

