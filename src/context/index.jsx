import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [data, setData] = useState([])
    const [loading, setLaoding] = useState(false)
    const [search, setSearch] = useState('')

    const fetchData = async (event) => {
        event.preventDefault()
        setLaoding(true)
        try {
            let url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
            let response = await fetch(url)
            if(response.ok){
                let data = await response.json()
                setData(data?.data?.recipes)
                setLaoding(false)
                setSearch('')
            }
        } catch (error) {
            setLaoding(false)
            setSearch('')
        }
    }

    return (
        <GlobalContext.Provider value={{data, loading, search, setSearch, fetchData}}>{children}</GlobalContext.Provider>
    )
}