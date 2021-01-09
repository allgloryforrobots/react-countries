import React from "react"
import 'antd/dist/antd.css'
import LayoutC from "./LayoutC/LayoutC"
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux"
import store from "./redux/redux-store"



function App() {





  return (
      <BrowserRouter>
          <Provider store={store}>

              <LayoutC/>
          </Provider>
      </BrowserRouter>
  )
}

export default App
