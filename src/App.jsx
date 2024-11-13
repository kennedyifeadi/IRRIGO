import { BrowserRouter } from "react-router-dom"
import MediaQuery from 'react-responsive'
import './App.css'
import MobileView from "./ScreenSizes/MobileView"
import LaptopView from "./ScreenSizes/LaptopView"


function App() {

  return (
    <BrowserRouter>
      <div className="w-full h-[110dvh]  ">

        <MediaQuery minWidth={640}>
          <LaptopView />
        </MediaQuery>
        <MediaQuery maxWidth={640}>
          <MobileView />
        </MediaQuery>


      </div>

    </ BrowserRouter>

  )
}

export default App

