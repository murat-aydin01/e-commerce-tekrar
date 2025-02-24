import { NavLink } from "react-router"

function NavBar() {
  return (
    <header>
        <NavLink to={"/"}>Ana Sayfa</NavLink>
        <NavLink to={"/products"}>Ürünler</NavLink>
    </header>
  )
}

export default NavBar