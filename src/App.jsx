import { useState } from 'react'

import './App.css'
import Header from './components/Header/Header'
import Homepage from './pages/Homepage/Homepage'
import {userData} from './utils/users.js'

function App() {
  console.log(userData)

  // Create state for users
  const [users, setUsers] = useState([])

  return (
    <div className='app-container'>
      <Header userData={userData} setUsers={setUsers} />
      <Homepage users= {users} />
    </div>
  )
}

export default App
