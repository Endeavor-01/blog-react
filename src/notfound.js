import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Sorry</h1>
            <p>The page does not exsists</p>
            <Link to ='/'>Go back to home page </Link>
        </div>
     );
}
 
export default NotFound;