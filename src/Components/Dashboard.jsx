import React  ,{ useState }from 'react'



function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [role, setRole] = useState("buyer")

  const products = [
    { id: 1, name: "Cake" },
    { id: 2, name: "Bread" },
    { id: 3, name: "Cookies" }
  ]

  const handleRoleChange = (e) => {
    setRole(e.target.value)
  }

  const showMessage = () => {
    if (!isLoggedIn) {
      return <p>Please login first</p>
    }

    if (role === "buyer") {
      return <p>Welcome Buyer</p>
    } else if (role === "seller") {
      return <p>Welcome Seller</p>
    } else if (role === "admin") {
      return <p>Welcome Admin</p>
    } else {
      return <p>Welcome Guest</p>
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>

      <select value={role} onChange={handleRoleChange}>
        <option value="buyer">Buyer</option>
        <option value="seller">Seller</option>
        <option value="admin">Admin</option>
      </select>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>

      {showMessage()}

      {isLoggedIn && (
        <div>
          <h3>Products</h3>

          {products.map((item) => (
            <p key={item.id}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dashboard