import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import Button from '../../components/button'

const index = () => {

    const {loading, data } = useContext(GlobalContext)

    if(loading) {
        return <div className='text-center mt-56'>Loading...</div>
    }

    return (
        <div className='flex flex-row flex-wrap justify-center gap-10 mt-32'>
            {
                data && data.length > 0 ? (
                    data.map((d) => {
                        return (
                            <div key={d?.id} className='flex flex-col p-1 gap-3 border-2 border-solid w-64 h-auto shadow-inner shadow-orange-400 rounded-lg'>
                                <div><img src={d?.image_url} alt={d.strMeal} className='rounded-tr-md rounded-tl-md object-cover h-52 w-full' /></div>
                                <div className='text-center'>{d?.title.length > 30 ? d?.title.substring(0, 30)+"..." : d?.title}</div>
                                <div className='text-right'>-By {d?.publisher}</div>
                                <div>
                                    <Button value="Details" to={`/details/${d?.id}`}/>
                                </div>
                            </div>
                        )
                    })
                )
                : "No recipe found, please search"
            }
        </div>
    )
}

export default index
