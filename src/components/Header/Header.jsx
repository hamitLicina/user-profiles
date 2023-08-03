// rfce

import React from 'react'
import './Header.css'
import { userData } from './../../utils/users';

function Header({userData, setUsers}) {

  // Create State for Country
    const [country, setCountry] = React.useState("")

    const showAll = () => {
      console.log("show all")
      // I want to show All users
      setUsers(userData)
    }

    const handleInput = (e) => {
      console.log(e.target.value)
      //Store this Data in State
      setCountry(e.target.value)
    }

    const handleSearch = () => {
      console.log("Search for Country", country)
      // Filter to get the Users from this Counrty 
      console.log(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
      // Show this data on the page We must change users
      setUsers(userData.filter(item => item.country.toLowerCase() === country.toLowerCase()))
      // Clear the TextBox
      setCountry('')
    }

  return (
    <div className='header-container'>
        <button onClick={showAll}>Show All</button>
        <div className='search-container'>
            <input onChange={handleInput} value={country}
            type='text' placeholder='enter country'/>
            <button onClick={handleSearch}>Search</button>
        </div>

    </div>
  )
}

export default Header