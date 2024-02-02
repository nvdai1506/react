import React from "react";
import styled from "styled-components";
import SubMenuList from "./SubMenuList";
import { IMenu } from "./instance";

const SubMenu = ({
  items,
  showDropdownMenu,
}: {
  items: IMenu[];
  showDropdownMenu: boolean;
}) => {
  if (!showDropdownMenu) {
    return null;
  }
  return (
    <SubMenuItemsContainer>
      <Container>
        <SubMenuList items={items} />
      </Container>
    </SubMenuItemsContainer>
  );
};

export default SubMenu;

const SubMenuItemsContainer = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: black;
  width: fit-content;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding: 2rem;
  a {
    font-size: 1.6rem;
    color: #fff;
    padding-left: 2rem;
    white-space: nowrap;
  }
  a.active {
    color: #f00;
  }
`;
