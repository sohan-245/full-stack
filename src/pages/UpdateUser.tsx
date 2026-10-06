
import { useState } from "react";
import { useNavigate } from "react-router-dom"


function UpdateUser() {
  const navigate = useNavigate()

  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const updateUser = async () => {
    try {
      const response = await fetch(`/api/update/user/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          name: name,
          email: email,
          age: Number(age),
        }),
      });

      const result = await response.json();

      console.log("Status:", response.status);
      console.log("Response:", result);

      if (!response.ok) {
        throw new Error(result.error || result.message);
      }

      console.log("Updated:", result.data);
      navigate('/me')



    } catch (error) {
      console.log("Update error:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateUser();
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[#E9F0EE]">
        <div className="flex flex-col p-10 m-8 gap-5 rounded-2xl w-130  bg-gray-100">
          <strong className="mx-auto">Enter updated details</strong>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <div>
        <strong>ID:</strong>
        <br />

        <input
          type="text"
          placeholder="Enter user ID"
          className="border border-gray rounded-sm w-full p-1"
          value={id}
          onChange={(event) => setId(event.target.value)}
        />
      </div>

      <div>
        <strong>Name:</strong>
        <br />

        <input
          type="text"
          placeholder="Enter name"
          className="border border-gray rounded-sm w-full p-1"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <div>
        <strong>Email:</strong>
        <br />

        <input
          type="email"
          placeholder="Enter email"
          className="border border-gray rounded-sm w-full p-1"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>

      <div>
        <strong>Age:</strong>
        <br />

        <input
          type="number"
          placeholder="Enter age"
          className="border border-gray rounded-sm w-full p-1"
          value={age}
          onChange={(event) => setAge(event.target.value)}
        />
      </div>
       <div>
        <strong>Course:</strong>
        <br />

        <input
          type="text"
          placeholder="Enter course"
          className="border border-gray rounded-sm w-full p-1"
          value={course}
          onChange={(event) => setCourse(event.target.value)}
        />
      </div>

      <button type="submit" className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white">
        Update
      </button>
    </form>
    </div>
    </div>
  );
}

export default UpdateUser;
