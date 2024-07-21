import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context'
import Button from './button'

const navbar = () => {

    const { search, setSearch, fetchData } = useContext(GlobalContext)

    return (
        <div className='fixed bg-white top-0 w-full border-2 border-b-2 h-28 flex flex-row justify-between items-center'>
            <Link to={"/"} className='text-2xl'>FoodRecipe</Link>
            <div className='flex flex-row gap-2'>
                <input className='outline-none border-2 border-black rounded-lg' type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                {/* <button onClick={fetchData} className='bg-gray-300 p-1 rounded-md'>Search</button> */}
                <Button onClick={fetchData} value={"Search"} to={"/"}/>
            </div>
            <Link to={"/favourites"} className='text-md'>Favourites</Link>
        </div>
    )
}

export default navbar
