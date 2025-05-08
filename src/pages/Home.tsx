import FlipCardBootstrap from "../components/FlipCard"
import NavbarBootstrap from "../components/Navbar"

export const Home = ()=> {
    return (
        <div>
            <NavbarBootstrap/>
            <div className="d-flex justify-content-center mt-5">
                <FlipCardBootstrap/>
                <FlipCardBootstrap/>
                <FlipCardBootstrap/>
                <FlipCardBootstrap/>
                <FlipCardBootstrap/>
            </div>
            
        </div>
        
    )
}