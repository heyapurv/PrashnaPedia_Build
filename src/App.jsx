import React from "react"
// import Hero from "../components/Hero"
import News from "../components/News"
import Tables from "../components/Tables"
// import Footer from "../components/Footer"
import Contact from "../components/Contact"
// import {Routes, Route} from 'react-router-dom';
import NavBar from "../components/NavBar"
import Hero from "../components/Hero"
import { Route, Routes} from "react-router-dom"
import FooterMain from "../components/FooterMain"

function App() {
  return (
    <>
      <News/>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Hero/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/papers' element={<Tables/>}></Route>
        <Route exact path='/about' element={<Tables/>}></Route>
      </Routes>
      {/* <Tables/> */}
      <FooterMain/>
    </>
  )
}

export default App