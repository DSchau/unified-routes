import React from 'react'
import Layout from '../../components/layout'

function User(props) {
  return (
    <Layout location={props.location}>
      <h1>Hello from a client only route!</h1>
      <h2>User {props.id}</h2>
    </Layout>
  )
}

export default User
