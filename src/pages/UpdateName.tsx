
import { useState } from "react";

function UpdateName() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");

  const updateName = async () => {
    try {
      const response = await fetch(`/api/update/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
        }),
      });

      const result = await response.json();

      console.log("Status:", response.status);
      console.log("Response:", result);

      if (!response.ok) {
        throw new Error(result.error || result.message);
      }

      console.log("Name updated:", result.data);

    } catch (error) {
      console.log("Update error:", error);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateName();
  };

  return (
     <div className="flex justify-center items-center h-screen w-screen">
        <div className="flex flex-col p-10 m-8 gap-5 rounded-2xl w-130 border border-black">
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5"
    >
      <div>
        <strong>User ID:</strong>
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
        <strong>New Name:</strong>
        <br />

        <input
          type="text"
          placeholder="Enter new name"
          className="border border-gray rounded-sm w-full p-1"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>

      <button type="submit" className="border border-blue-500 rounded-2xl p-1 w-full bg-blue-500 text-white">
        Update Name
      </button>
    </form>
    </div>
    </div>
  );
}

export default UpdateName;
