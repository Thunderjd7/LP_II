import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([])

  /* ADD USER */

  const addUser = async () => {

    try {

      await axios.post('http://localhost:5000/addUser', {

        name,
        email

      })

      alert('User Added Successfully')

      getUsers()

      setName('')
      setEmail('')

    }

    catch(err) {

      console.log(err)

    }

  }

  /* GET USERS */

  const getUsers = async () => {

    try {

      const result = await axios.get(
        'http://localhost:5000/users'
      )

      setUsers(result.data)

    }

    catch(err) {

      console.log(err)

    }

  }

  useEffect(() => {

    getUsers()

  }, [])

  return (

    <div className="container">

      <h1>MERN CRUD APP</h1>

      <div className="form-box">

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={addUser}>
          Add User
        </button>

      </div>

      <div className="users-box">

        {
          users.map((user) => (

            <div className="card" key={user._id}>

              <h3>{user.name}</h3>

              <p>{user.email}</p>

            </div>

          ))
        }

      </div>

    </div>

  )
}

export default App