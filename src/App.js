import React from "react"
import 'antd/dist/antd.css'
import LayoutC from "./LayoutC/LayoutC"
import {BrowserRouter} from "react-router-dom"


function App() {
  return (
      <BrowserRouter>
        <LayoutC/>
      </BrowserRouter>
  )
}

export default App
