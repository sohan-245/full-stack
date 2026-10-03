function Logout(){
const logout = async () => {
  const response = await fetch('/api/logout', {
    method: 'POST',
    credentials: 'include'
  });

  const result = await response.json();

  console.log(result);
};
  return (
    <div>
      <button
        onClick={logout}
        className="border border-gray rounded-sm px-4 py-2"
      >
        Logout
      </button>
    </div>
  )
}
export default Logout;