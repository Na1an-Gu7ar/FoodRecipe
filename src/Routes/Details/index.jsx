import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

const index = () => {

    const {data} = useContext(GlobalContext)

    return (
        <div>
            {/* {
                data && data.length > 0 ? (
                    data.map((item) => (
                ) : null
            } */}
        </div>
    )
}

export default index
