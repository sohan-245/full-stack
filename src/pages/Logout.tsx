import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });

      const result = await response.json();

      console.log(result);

      if (!response.ok) {
        throw new Error(result.message || "Logout failed");
      }
      navigate("/login");

    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={logout}
        className=" rounded-sm px-4 py-2 hover:bg-gray-100"
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;