import Link from "next/link";
import Image from "next/image";

export default function SideMenu() {
  return (
    <div
      className="col-md-3 col-lg-2 d-flex justify-content-center sidebar"
      style={{ height: "100vh", backgroundColor: "#4B4E58", color: "#fff" }}
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
          <Image src="/user.png" width={125} height={125} alt="userImage" />
        </div>
        <ul className="nav flex-column">
          <li className="nav-item mt-5">
            <Link className="nav-link active text-light" href="/seller">
              Dashboard
            </Link>
          </li>
          <li className="nav-item mt-5 ">
            <Link className="nav-link text-light" href="/seller/products">
              Products
            </Link>
          </li>
          <li className="nav-item mt-5">
            <Link className="nav-link  text-light" href="/seller/orders">
              Orders
            </Link>
          </li>
          <li className="nav-item mt-5">
            <Link className="nav-link  text-light" href="/seller/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
