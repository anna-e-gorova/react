import "./Home.css";
import { Link } from "react-router-dom";

function HomePage() {
  
  return (
    <div className="root">
      <ul>
        <li>
          <Link to="/chats">CHATS</Link>
        </li>
        <li>
          <Link to="/profile">PROFILE</Link>
        </li>
        <li>
            <Link to="/news">NEWS</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
