import { useState } from "react"
import type { FormEvent } from "react"
import Linkpage from "./Linkpage"
import { useNavigate } from "react-router-dom"


function CreateUser(){
const navigate = useNavigate()

const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [age,setAge]=useState('')
const [course,setCourse]=useState('')

//state to handle states of promises
const [error,setError]=useState('') //for error catch
const [IsSubmitting,setIsSubmitting]=useState(false)//for pending state
const [IsCreated, setIsCreated] = useState(false)//for the success state

//API 
const handlesubmit = async (event : FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    setError('')
    setIsSubmitting(true)
    try{
        const response = await fetch('/api/create/user',{
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,course,age:age?Number(age):undefined,password}),
        })
        const result = await response.json()

        if(!response.ok) throw new Error(result.error || 'Unable to create user')
            setIsCreated(true)
            navigate('/login')

    }catch(requestedError){
        setError(requestedError instanceof Error ? requestedError.message:
            'Unable to create user'
        )
    }finally{
        setIsSubmitting(false)
    }
}

    return(
        <div className="flex justify-center items-center h-screen w-screen bg-[#E9F0EE]">
        <div className="flex flex-col p-10 m-8 gap-5 rounded-2xl w-130 bg-gray-100">
            <strong className="mx-auto">Enter your details</strong>
        <form className="flex flex-col gap-5" onSubmit={handlesubmit}>   
        <div>
            <strong>Name:</strong><br/>
            <input type="text" placeholder="Enter name" className="border border-gray rounded-sm w-full p-1" value={name} onChange={(event) => setName(event.target.value)}/>
        </div>
        <div>
            <strong>Email:</strong><br/> 
            <input type="email" placeholder="Enter email" className="border border-gray rounded-sm w-full p-1" value={email} onChange={(event) => setEmail(event.target.value)}/>
        </div>
        <div>
            <strong>Password:</strong><br/>
            <input type="password" placeholder="Enter passsword" className="border border-gray rounded-sm w-full p-1" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
                <div>
            <strong>Age:</strong><br/>
            <input type="number" placeholder="Enter age" className="border border-gray rounded-sm w-full p-1" value={age} onChange={(event) => setAge(event.target.value)}/>
        </div>
                <div>
            <strong>Course:</strong><br/>
            <input type="text" placeholder="Enter course" className="border border-gray rounded-sm w-full p-1" value={course} onChange={(event) => setCourse(event.target.value)}/>
        </div>
        <div>
            <button className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white" type="submit">Create account</button>
        </div>
        <div className="mx-auto">Already have an account? <Linkpage to='/login' text='Sign in'/></div>
        </form>
        </div>
       </div>
    )
}
export default CreateUser