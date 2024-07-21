import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [details, setDetails] = useState([])

    const fetchData = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            let url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
            let response = await fetch(url)
            if(response.ok){
                let data = await response.json()
                setData(data?.data?.recipes)
                setLoading(false)
                setSearch('')
            }
        } catch (error) {
            setLoading(false)
            setSearch('')
        }
    }

    return (
        <GlobalContext.Provider value={{data, loading, search, setSearch, fetchData, details, setDetails, setLoading}}>{children}</GlobalContext.Provider>
    )
}