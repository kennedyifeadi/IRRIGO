import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { PageNotFound } from "../pages/PageNotFound";
import { Analytics } from "../pages/Analytics";
import { Settings } from "../pages/Settings";
import { Dashboard } from "../pages/Dashboard";

export const AnimatedRoutes = () => {
    const location = useLocation();
      return (
          <div className="sm:h-full sm:w-full">
          <AnimatePresence>
              <Routes location={location} key={location.pathname}>
                  <Route path="/" element={<Dashboard/>} exact />
                  <Route path="/settings" element={<Settings/>} />
                  <Route path="/analytics" element={<Analytics/>} />
                  <Route path="*" element={<PageNotFound/>} /> 
              </Routes>
        </AnimatePresence>
        </div>
      )
  }