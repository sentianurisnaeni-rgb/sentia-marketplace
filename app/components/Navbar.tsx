import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-container">

        {/* LOGO */}
        <Link href="/" className="navbar-brand">
          SENTIA BEAUTY
        </Link>

        {/* MENU */}
        <div className="navbar-menu">

          <Link href="/" className="nav-link">
            Home
          </Link>

          <Link href="/shop" className="nav-link">
            Shop
          </Link>

          <Link href="/cart">
            🛒 Cart
            </Link>

          <Link href="/about" className="nav-link">
            About
          </Link>

          <Link href="/contact" className="nav-link">
            Contact
          </Link>

        </div>

      </div>

    </nav>
  );
}