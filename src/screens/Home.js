import React from 'react'
import { Header } from "../components/Header.js";
function Home() {
  return (
    <div className="App">
      <Header />
      <h1 style={{fontSize:60, height: 10000, marginTop:85 }}> Hola mundo</h1>
    </div>
  )
}

export {Home}