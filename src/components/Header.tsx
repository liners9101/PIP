import React, { CSSProperties, ReactElement } from "react";
import "./Header.css";
import Menu from "../Assets/Menu.svg";

type TLiProps = {
  children: React.ReactNode;
  i?: number;
  a: string;
};

const links = [
  {
    title: "Home",
    i: 0,
    a: "/",
  },
  {
    title: "About",
    i: 1,
    a: "/about",
  },
  {
    title: "Services",
    i: 2,
    a: "/service",
  },
  {
    title: "Shop",
    i: 3,
    a: "/Shop",
  },
  {
    title: "Blog",
    i: 4,
    a: "/Blog",
  },
  {
    title: "Contact",
    i: 5,
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

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = React.useState(false);

  const handleDropdownVisible = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <header>
        <div className={`user-dropdown ${dropdownVisible ? "active" : ""}`}>
          <p className="companyName">PIP</p>
          <button className="btn" onClick={handleDropdownVisible}>
            <img src={Menu} className="navBarIcon" alt="" />
          </button>

          <nav className="navBar">
            <ul>
              {links.map((link) => (
                <Li key={link.i} i={link.i} a={link.a} children={link.title} />
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
