import { Link, NavLink } from "react-router-dom"

function MainNav() {
    return(
        <>
            <nav>
                <h1>Titolo</h1>
                <Link to="/" > HomePage </Link>
                <NavLink to="/content" > ContentPage </NavLink>
                <NavLink to="/about" > AboutPage </NavLink>
                <NavLink to="/posts"> Posts</NavLink>
            </nav>
        </>
    )
}
export default MainNav