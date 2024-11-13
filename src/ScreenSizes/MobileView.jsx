import { AnimatedRoutes } from "../components/AnimatedRoute"
import { BottomNav } from "../components/BottomNav"
import { TopNav } from "../components/TopNav"


const MobileView = () => {
    return (
        <div className="flex flex-col relative bg-[#F4F4F9] w-full h-full">
            <TopNav />
            <AnimatedRoutes />
            <BottomNav />
        </div>
    )
}

export default MobileView


