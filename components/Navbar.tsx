import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold text-primary">
          SENTIA BEAUTY
        </Link>

        <ul className="navbar-nav ms-auto d-flex flex-row gap-3">
          <li className="nav-item">
            <Link href="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/shop" className="nav-link">
              Shop
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/about" className="nav-link">
              About
            </Link>
          </li>

          <li className="nav-item">
            <Link href="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}