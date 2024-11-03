import { BrowserRouter } from "react-router-dom"
import { TopNav } from "./components/TopNav";
import { BottomNav } from "./components/BottomNav";
import { AnimatedRoutes } from "./components/AnimatedRoute";


function App() {

  return (
    <BrowserRouter>
      <div className="w-full h-[100dvh]  flex flex-col relative bg-[#F4F4F9] ">
        <TopNav/>
        <AnimatedRoutes />
        <BottomNav />

      </div>

    </ BrowserRouter>

  )
}

export default App

