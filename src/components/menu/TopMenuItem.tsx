import React, { useState } from "react";
import { styled } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import SubMenu from "./SubMenu";
import { IMenu } from "./instance";

const TopMenuItem = ({ item }: { item: IMenu }) => {
  const { pathname } = useLocation();
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  const homePage = pathname === "/" && item.url === "/";
  const isActive = pathname.includes(item.url) && item.url !== "/";

  return (
    <Container
      $active={homePage || isActive}
      onMouseEnter={() => setShowDropdownMenu(true)}
      onMouseLeave={() => setShowDropdownMenu(false)}
    >
      <Link to={item.url}>{item.label}</Link>
      {item.children && (
        <SubMenu items={item?.children} showDropdownMenu={showDropdownMenu} />
      )}
    </Container>
  );
};

export default TopMenuItem;

const Container = styled.li<{ $active?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 7rem;
  padding: 0.4rem 0rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  position: relative;
  ${({ $active }) =>
    $active && "border-bottom: 2px solid var(--Primary-gradient, #FEF7EC);"}
  > a, span {
    /* Body/2 */
    font-family: "Archivo";
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5; /* 4.32rem */
    /* background: linear-gradient(236deg, #fef7ec -2.38%, #d2af90 92.6%); */
    color: #feddbe;
    transition: all 0.2s;
    white-space: nowrap;
    &:hover {
      filter: brightness(1.5);
    }
  }
  cursor: pointer;
`;
