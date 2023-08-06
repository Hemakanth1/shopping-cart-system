import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#000", color: "#fff" }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand text-light" href="/">
          LOGO
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item  mx-5">
              <Link className="nav-link active text-light" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-light " href="/about">
                About
              </Link>
            </li>
            <li className="nav-item mx-5">
              <Link className="nav-link text-light" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
