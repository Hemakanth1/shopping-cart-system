import { Link } from "react-router-dom";
import logo from "../assets/user.png";

export default function SideMenu() {
  return (
    <div
      className="col-md-3 col-lg-2 d-flex justify-content-center sidebar"
      style={{ height: "auto", backgroundColor: "#4B4E58", color: "#fff" }}
    >
      <div className="sidebar-sticky">
        <div
          className="mt-3"
          style={{
            borderRadius: "50%",
            overflow: "hidden",
            width: 125,
            height: 125,
          }}
        >
          <img src={logo} alt="Logo" width={125} height={125} />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mt-5">
            <Link to="/buyer/" className="nav-link active text-light">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mt-5 ">
            <Link to="/buyer/cart" className="nav-link text-light">
              Cart
            </Link>
          </li>
          <li className="nav-item mt-5">
            <Link to="/buyer/orders" className="nav-link  text-light">
              Orders
            </Link>
          </li>
          <li className="nav-item mt-5">
            <Link to="/buyer/profile" className="nav-link  text-light">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
