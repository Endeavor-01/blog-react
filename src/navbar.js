import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The dojo Blog</h1>
            <div className="link">
                <Link to="/">Home</Link>
                <Link to="create" style={{
                    color:"white",
                    backgroundColor:'red',
                    borderRadius: '20px',
                }}>New blog</Link>

            </div>
           

        </nav>
     );
}
 
export default Navbar;