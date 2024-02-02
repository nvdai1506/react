import React from "react";
import styled from "styled-components";
import TopMenuItem from "./TopMenuItem";
import { menuItems } from "./instance";

const Menu = () => {
  return (
    <MenuItemsContainer>
      {menuItems.map((item) => (
        <TopMenuItem key={item.id} item={item} />
      ))}
    </MenuItemsContainer>
  );
};

export default Menu;

const MenuItemsContainer = styled.ul`
  display: flex;
  column-gap: 2rem;
  background-color: #000;
`;
