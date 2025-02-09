import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'

const Order = () => {
  const context = useContext(myContext)
  const { name, rollno } = context
  return (
    <Layout>{name}, {rollno}</Layout>
  )
}

export default Order