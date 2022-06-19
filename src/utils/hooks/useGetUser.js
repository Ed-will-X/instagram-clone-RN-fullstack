import React, { useState, useEffect, useContext }  from "react"
import { AuthContext } from "../../context/AuthContext"

const useGetUser = (navigation) => {
    const [ user, setUser ] = useState({})
    const { getUserFromStorage } = useContext(AuthContext)

    useEffect(async()=>{
        const userProps = await getUserFromStorage()
        setUser(userProps)
        console.log("effect")

        const unsubscribe = navigation.addListener('focus', async() => {
            const userProps = await getUserFromStorage()
            setUser(userProps)
            console.log("navigation")
        });

        return unsubscribe;
    },[])

    return [ user ]
}

export default useGetUser