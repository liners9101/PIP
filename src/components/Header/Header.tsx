import React, { CSSProperties, ReactElement } from "react";
import "./Header.css";
import Menu from "../../Assets/Menu.svg";
import clsx from "clsx";

type TLiProps = {
  children: React.ReactNode;
  i?: number;
  a: string;
};

const links = [
  {
    title: "Home",
    i: 1,
    a: "/",
  },
  {
    title: "About",
    i: 2,
    a: "/about",
  },
  {
    title: "Services",
    i: 3,
    a: "/service",
  },
  {
    title: "Shop",
    i: 4,
    a: "/Shop",
  },
  {
    title: "Blog",
    i: 5,
    a: "/Blog",
  },
  {
    title: "Contact",
    i: 6,
    a: "/Contact",
  },
];

const Li = ({ children, i, a }: TLiProps): ReactElement => {
  const style = {
    "--i": i,
    color: "white",
  } as CSSProperties;

  return (
    <li style={style}>
      <a href={a}>{children}</a>
    </li>
  );
};

const Header = ({ counter }: any) => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const handleDropdownVisible = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className={clsx("user-dropdown", dropdownVisible && "active")}>
      <span className="companyName">PIP</span>

      {counter}

      <img
        src={Menu}
        className="navBarIcon"
        alt=""
        onClick={handleDropdownVisible}
      />

      <nav className="navBar">
        <ul>
          {links.map((link) => (
            <Li key={link.i} i={link.i} a={link.a} children={link.title} />
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
