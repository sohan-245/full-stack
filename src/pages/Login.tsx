import Linkpage from "./Linkpage"
import { useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

function Login(){
    const navigate = useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const [error,setError]=useState('') //for error catch
    const [IsSubmitting,setIsSubmitting]=useState(false)//for pending state
    const [IsLoggedin, setIsLoggedin] = useState(false)//for the success state

    const handlesubmit = async (event : FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        setError('')
        setIsSubmitting(true)
        try{
            const response = await fetch('/api/login',{
                method: 'POST',
                credentials: 'include',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({email,password}),
            })
            const result = await response.json()

             console.log("Login response:", result)
    
            if (!response.ok) {
    throw new Error(result.message || 'Unable to login')
}
                setIsLoggedin(true)
                navigate('/me')
        }catch(requestedError){
            setError(requestedError instanceof Error ? requestedError.message:
                'Unable to create user'
            )
        }finally{
            setIsSubmitting(false)
        }
    }
    
    return(
        <>
       <div className="flex justify-center items-center h-screen w-screen bg-[#E9F0EE]">
        <div className="flex flex-col p-10 m-8 gap-5 w-130 rounded-2xl bg-gray-100">
            <strong className="mx-auto">Enter your details</strong>
        <form className="flex flex-col gap-5" onSubmit={handlesubmit}>  
        <div>
            <strong>Email:</strong><br/> 
            <input type="email" placeholder="Enter email" className="border border-gray rounded-sm w-full p-1" value={email} onChange={(event) => setEmail(event.target.value)} required/>
        </div>
        <div>
            <strong>Password:</strong><br/>
            <input type="password" placeholder="Enter passsword" className="border border-gray rounded-sm w-full p-1" value={password} onChange={(event) => setPassword(event.target.value)} required/>
        </div>
        <div>
            <button className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white" type="submit">Sign up</button>
        </div>
        <p className="mx-auto">Don't have an account? <Linkpage to='/create-user' text='Register'/></p>
        </form>  
        </div>
       </div>
        </>
    )
}
export default Login