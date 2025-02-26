import { NavLink } from "react-router"

function NavBar() {
  return (
    <header className="flex justify-center gap-6">
        <NavLink to={"/"}>Ana Sayfa</NavLink>
        <NavLink to={"/products"}>Ürünler</NavLink>
    </header>
  )
}

export default NavBar