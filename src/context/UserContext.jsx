import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState({})

    useEffect(() => {
        setUser({
        name: "Diego Barboza",
        registered: "17-12-2021"
        })
    },[])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }