import { BrowserRouter, Routes, Route } from "react-router-dom"

//import per le pagine
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaPost from "./pages/ListaPost"

function App() {

  return (
    <>
     <HomePage></HomePage>
     <ChiSiamo></ChiSiamo>
     <ListaPost></ListaPost>
    </>
  )
}

export default App
