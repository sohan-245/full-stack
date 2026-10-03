import { useEffect } from 'react'
import Logout from './Logout'

function Authentication(){
    const getMe = async () => {
    console.log("getMe is running")
    const response = await fetch('/api/me', {
        method: 'GET',
        credentials: 'include'
    })

    const result = await response.json()

    console.log(result)
}
   useEffect(() => {
        getMe()
    }, [])
return(
    <Logout/>
)
}
export default Authentication