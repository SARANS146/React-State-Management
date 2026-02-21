import React,{useEffect, useState} from 'react'
function FetchData() {
const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [])
  return (
    <div>
      {user.map((item)=>(
        <div key={item.id} style={{ borderBottom: '1px solid #ccc', margin: '10px' }}>
          <p>{item.id}</p>
          <p>{item.title}</p>
          <p>{item.url}</p>
          <p>{item.thumbnailUrl}</p>
          </div>
      ))}
    </div>
  );
}

export default FetchData
