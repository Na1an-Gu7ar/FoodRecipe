import { createContext, useState } from "react";

export const GlobalContext = createContext(null)

export default function GlobalState({children}){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [details, setDetails] = useState([])
    const [favourites, setFavourites] = useState([])

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

    const addFavourites = (getCurrentItem) => {
        let cpyFavourites = [...favourites]
        let index = cpyFavourites.findIndex(item => item.id === getCurrentItem.id)

        if(index===-1) {
            cpyFavourites.push(getCurrentItem)
        } else {
            cpyFavourites.splice(index, 1)
        }

        setFavourites(cpyFavourites)
    }

    return (
        <GlobalContext.Provider value={{data, loading, search, setSearch, fetchData, details, setDetails, setLoading, addFavourites, favourites }}>{children}</GlobalContext.Provider>
    )
}