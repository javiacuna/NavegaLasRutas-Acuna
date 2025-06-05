import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-ligth bg-warning px-5">
      <Link className="navbar-brand" to="/">
        <img src="src\assets\logo-planeta-cel.png" alt="Logo de la página" style={{ height: '70px' }} />
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/brand/Samsung">Samsung</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/brand/Apple">Apple</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/brand/Motorola">Motorola</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/brand/Xiaomi">Xiaomi</Link></li>
        </ul>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
