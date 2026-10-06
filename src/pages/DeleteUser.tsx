import { useState } from "react";


function DeleteUser(){
const [id,setId]=useState('');
const [password,setPassword]=useState('');

const deleteUser = async () => {
  try {
    const response = await fetch(
      `/api/delete/user?id=${id}&password=${password}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();
    console.log("Status:", response.status);
    console.log("Response:", result);


    if (!response.ok) {
      throw new Error(result.message || result.error);
    }

    console.log("Deleted:", result.data);

  } catch (error) {
    console.log(error);
  }
};
 const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteUser();
  };

return(
    <div className="flex justify-center items-center h-screen w-screen bg-[#E9F0EE]">
        <div className="flex flex-col p-10 m-8 gap-5 rounded-2xl w-130 bg-gray-100">
          <strong className="mx-auto">Enter your details</strong>
     <form className="flex flex-col gap-5" onSubmit={handleSubmit}>   
        <div>
            <strong>Id:</strong><br/>
            <input type="text" placeholder="Enter name" className="border border-gray rounded-sm w-full p-1" value={id} onChange={(event) => setId(event.target.value)}/>
        </div>
        <div>
            <strong>password:</strong><br/> 
            <input type="password" placeholder="Enter email" className="border border-gray rounded-sm w-full p-1" value={password} onChange={(event) => setPassword(event.target.value)}/>
        </div>
        
    <button type="submit" className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white">
  Delete
</button>
</form>
</div>
</div>
)
}
export default DeleteUser;