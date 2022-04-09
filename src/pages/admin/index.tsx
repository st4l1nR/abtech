import React from 'react'
import {NextPage} from 'next'
import {withAdminAuth} from '../../components'

const index:NextPage = () => {
    return (
        <div>
            
        </div>
    )
}

export default withAdminAuth(index)
