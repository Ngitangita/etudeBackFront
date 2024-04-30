import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/">Home</Link>
                    <Link to="/">Employees</Link>
                    <Link to="/">Orders</Link>
                    <Link to="/">Products</Link>
                    <Link to="/">Stoks</Link>
                </ul>
            </nav>
        </>
    )
}
