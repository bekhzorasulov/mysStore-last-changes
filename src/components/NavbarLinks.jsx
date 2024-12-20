import { Link } from "react-router";

const links = [
  {
    id: 1,
    path: "/",
    text: "Home",
  },
  {
    id: 2,
    path: "/about",
    text: "About",
  },
  {
    id: 3,
    path: "/contact",
    text: "Contact",
  },
];

function NavbarLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        );
      })}
    </>
  );
}

export default NavbarLinks;
