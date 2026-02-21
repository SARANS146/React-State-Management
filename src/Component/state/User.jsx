import React ,{useState, usestate} from 'react'

function User() {
    const[user ,setUser] = useState("srn");
  return (
    <div>
      user Name:
      <input type="text" value={user}
      onChange={(e)=>setUser(e.target.value)}/>
      <p>Hello {user}</p>
    </div>
  )
}

export default User
