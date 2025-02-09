import React from 'react'
import MyContext from './myContext'

const myState = (props) => {
  const state = {
    name: "Kamal",
    rollno: 15
  }
  return (
    <MyContext.Provider value={state}>
      {props.children}
    </MyContext.Provider>
  )
}

export default myState