import {Routes ,Route} from "react-router-dom"
import Recommend from "./Recommend"
import Trend from "./Trend"
import Home from "./Home"
import Video from "./video"
import Search from "./Search"

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trend" element={<Trend />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/video/:id" element={<Video />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    )
}

export default AllRoutes