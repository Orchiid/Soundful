import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

const HeaderComp = () => {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState(false);

  
  return (
    <Header className="header">
      <nav className="header-nav container-fluid  fixed-top d-md-flex align-content-center justify-content-around ">
        
        <div className="navbar-brand ">
          <img src="/images/logo.png" alt="" />
        </div>

        <ul className=" nav d-none d-md-flex align-content-center ">
          {navItems.map((nav, i) => (
            <li className=" nav-item" key={i}>
              <Link href={`/${nav.link}`}>
                <a className="nav-link link-dark"> {nav.name} </a>
              </Link>
             
            </li>
          ))}
        </ul>
 <div className=" d-md-flex d-none searchs">
        <input className="form-control me-2 curve pt-0" type="search" placeholder="Search for products" aria-label="Search" />
        <button className="btn btn-outline-warning curve pt-0" type="submit"><i className="fas fa-search"></i></button>
        </div>

        <i className="fas fa-2x fa-bars d-md-none d-flex justify-content-end " role="button" style={{position:"relative", bottom:"2.5rem"}}></i>
              </nav>
      {menu && (
        <div className="mobile-nav d-md-none">
          {open && (
            <div className={`mobile-nav-cover`}>
              <div className="p-2 d-flex justify-content-start">
                <i
                  className="fas fa-2x fa-times me-3"
                  role="button"
                  onClick={() => {
                    setMenu(false);
                    setOpen(false);
                  }}
                ></i>
              </div>
              <ul className="">
                {navItems.map((nav, i) => (
                  <li className="nav-item" key={i}>
                    <Link href={nav.link}>
                      <a className="nav-link link-dark">{nav.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
             <div className=" d-md-flex d-none flex-grow-1">
        <input className="form-control me-2 curve pt-0" type="search" placeholder="Search for products" aria-label="Search" />
        <button className="btn btn-outline-warning curve pt-0" type="submit"><i className="fas fa-search"></i></button>
        </div>
            </div>
          )}
        </div>
      )}
    </Header>
  );
};

export default HeaderComp;

const Header = styled.header``;

const navItems = [
    { name: "Home", link: "/" },
     { name: "About Us", link: "/aboutus" },
  { name: "Products", link: "/products" },
  { name: "Market", link: "/market" },
  { name: "Contact Us", link: "/contactus" },
];

