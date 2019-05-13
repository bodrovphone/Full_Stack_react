import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link>
      <a href="/items">Items</a>
    </Link>
    <Link>
      <a href="/sell">Sell</a>
    </Link>
    <Link>
      <a href="/signup">Signup</a>
    </Link>
    <Link>
      <a href="/orders">Orders</a>
    </Link>
    <Link>
      <a href="/me">Account</a>
    </Link>
  </NavStyles>
);

export default Nav;