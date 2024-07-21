import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({onClick, value, to}) => {
    return (
        <div>
            <button className='bg-gray-300 p-1 rounded-md' onClick={onClick}>
                <Link to={to}>{value}</Link>
            </button>
        </div>
    )
}

export default Button
