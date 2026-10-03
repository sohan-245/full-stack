
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

      <button type="submit">
        Update Name
      </button>
    </form>
  );
}

export default UpdateName;
