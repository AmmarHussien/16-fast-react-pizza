import { Link } from "react-router-dom";
import SearchOrder from "../../features/order/components/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">The Dough Show</Link>

      <SearchOrder />

      <p>Miimz</p>
    </header>
  );
}

export default Header;
