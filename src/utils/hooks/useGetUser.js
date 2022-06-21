import React, { useState, useEffect, useContext }  from "react"
import { UserContext } from "../../context/UserContext"

const useGetUser = (navigation) => {
    const [ user, setUser ] = useState({})
    const { getUserFromStorage } = useContext(UserContext)

    useEffect(async()=>{
        const userProps = await getUserFromStorage()
        setUser(userProps)

        const unsubscribe = navigation.addListener('focus', async() => {
            const userProps = await getUserFromStorage()
            setUser(userProps)
        });

        return unsubscribe;
    },[])

    return [ user ]
}

export default useGetUser