
import { useEffect, useState } from "react";

function DisplayAll() {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await fetch("/api/read/user", {
          method: "GET",
        });

        const result = await response.json();

        console.log("Response:", result);

        if (!response.ok) {
          throw new Error(result.error || result.message);
        }

        setUsers(result.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      }
    };

    getUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <div key={user._id} className="p-3 mt-3">
          <p>
            <strong>ID:</strong> {user._id}
          </p>

          <p>
            <strong>Name:</strong> {user.name}
          </p>

          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>Age:</strong> {user.age}
          </p>
           <p>
            <strong>Course:</strong> {user.course}
          </p>
        </div>
      ))}
    </div>
  );
}


export default DisplayAll;
