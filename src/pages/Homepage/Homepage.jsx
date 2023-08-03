import React from 'react'
import './Homepage.css'
import PersonCard from '../../components/Header/PersonCard/PersonCard';

function Homepage({users}) {
  return (
    <div className='homepage-container'>
        <h1>User Directory</h1>
        <div className='person-container'>
           {

            users.map(item => <PersonCard person = {item} key = {item.id} />)

           // users.map(item => <p key={item.id}>{item.username}</p>)
           }
        </div>
    </div>
  )
}

export default Homepage