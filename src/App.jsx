import { BrowserRouter, Routes, Route } from "react-router-dom"

//import per le pagine
import HomePage from "./pages/HomePage"
import ChiSiamo from "./pages/ChiSiamo"
import ListaPost from "./pages/ListaPost"

//import layouts
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/info" Component={ChiSiamo} />
          <Route path="/list" Component={ListaPost} />
        </Route>
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
