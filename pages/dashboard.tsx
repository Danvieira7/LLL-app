import { useRouter } from 'next/router'
import React from 'react'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
    const { user, logout } = useAuth() 
    const router = useRouter()

    const handleLogout = () => {
        logout()
        router.push('/login')
    }

    return (
        <>
            <h1> Hello {user.email}</h1>
            <button onClick={handleLogout}>logout</button>
        </>
    )
}

export default Dashboard