import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout.jsx'
import myContext from '../../context/data/myContext.jsx'

const Home = () => {
  const context = useContext(myContext)
  const { name, rollno } = context
  return (
    <Layout>
      <h1>Name: {name}</h1>
      <h1>Rollno: {rollno}</h1>
    </Layout>
  )
}

export default Home