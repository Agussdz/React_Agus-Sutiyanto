import { Link } from "react-router-dom";

export default function Navbar() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto me-4 gap-4">
            <Link
              className="nav-link active btn bg-primary text-white px-3"
              to="/"
            >
              Home
            </Link>
            {isLoggedIn && (
              <>
                <Link className="nav-link text-primary" to="/create-product">
                  Create Product
                </Link>
              </>
            )}
            <Link className="nav-link text-primary" to="#">
              Pricing
            </Link>
            <Link className="nav-link text-primary" to="#">
              FAQs
            </Link>
            <Link className="nav-link text-primary" to="#">
              About
            </Link>
            {isLoggedIn ? (
              <button className="nav-link btn btn-link" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link className="nav-link text-primary" to="/login">
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
