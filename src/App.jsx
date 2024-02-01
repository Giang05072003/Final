import { useState } from 'react'
import './App.css'
import UserDetail from './components/userDetail'
import Cart from './components/cart'

function App() {

  return (
    <>
      <UserDetail
        imgUrl="https://salt.tikicdn.com/ts/upload/b4/90/74/6baaecfa664314469ab50758e5ee46ca.png"
        text="Trang chủ"
      />
      <Cart
        imgUrl="https://salt.tikicdn.com/ts/upload/51/e2/92/8ca7e2cc5ede8c09e34d1beb50267f4f.png"
        quantity="0"
      />
    </>
  )
}

export default App
