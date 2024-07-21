import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../../context'
import { useParams } from 'react-router-dom'
import Button from '../../components/button'

const index = () => {

    const { id } = useParams()

    const { details, setDetails, loading, setLoading, addFavourites, favourites } = useContext(GlobalContext)

    const fetchDetails = async () => {
        setLoading(true)
        let url = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        let response = await fetch(url)
        if (response.ok) {
            let data = await response.json()
            setDetails(data?.data?.recipe)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchDetails()
    }, [])

    if(loading) {
        return <div className='text-center mt-56'>Loading...</div>
    }

    // console.log(details);
    return (
        <div className='mt-28'>
            {
                details && (
                    <div className='flex flex-row justify-center items-center'>
                        <Button value={favourites && favourites.length > 0 && favourites.findIndex((item) => item.id === details?.id)!==-1 ? 'Remove' : 'Add to favourites'} onClick={() => addFavourites(details)} to={'/favourites'} />
                        <div className='w-7/12 h-80 mt-20'><img className='h-full w-full' src={details?.image_url} alt={details?.title} /></div>
                        <div className='flex flex-col gap-5'>
                            <div className='text-center text-3xl'>{details?.title}</div>
                            <div className='flex flex-row gap-5 justify-center'>
                                <div className='text-center'><span className='font-semibold'>Cooking Time: </span>{details?.cooking_time}</div>
                                <div className='text-center'><span className='font-semibold'>Servings: </span>{details?.servings}</div>
                            </div>
                            <div className='text-2xl text-center'>Ingredients</div>
                            <div className='flex flex-row flex-wrap gap-10 justify-center'>
                                {details?.ingredients && details?.ingredients.map((ingre) => {
                                    return (
                                        <div className='flex flex-col flex-wrap w-48 text-start gap-1'>
                                            <div className={ingre.quantity ? '' : 'bg-red-500'}>Quantity: {ingre.quantity ? <span className='font-semibold'>{ingre.quantity}</span> : '---'}</div>
                                            <div className={ingre.unit ? '' : 'bg-red-500'}>Unit: {ingre.unit ? <span className='font-semibold'>{ingre.unit}</span> : '---'}</div>
                                            <div className=''>Item: {ingre.description ? <span className='font-semibold'>{ingre.description}</span> : '---'}</div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default index
