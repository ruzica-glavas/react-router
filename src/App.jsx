import { BrowserRouter, Routes, Route } from "react-router-dom"

//import per le pagine
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaPost from "./pages/ListaPost"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/info" Component={ChiSiamo} />
        <Route path="/list" Component={ListaPost} />
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
