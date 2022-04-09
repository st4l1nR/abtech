import React from 'react'
import {useRouter} from 'next/router'

const index = () => {
    const router = useRouter()
    console.log(router)
    return (
        <div>
            <div className='flex'>
                <span>Product</span>

            </div>
        </div>
    )
}

export default index
