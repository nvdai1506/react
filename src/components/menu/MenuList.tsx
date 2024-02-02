// MenuList.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

interface MenuItemProps {
  item: MenuItem;
  depth: number;
  onHover: (parentId: number | null) => void;
}

interface MenuItem {
  id: number;
  label: string;
  url?: string;
  children?: MenuItem[];
}

const MenuItemComponent: React.FC<MenuItemProps> = ({
  item,
  depth,
  onHover,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHover(item.id);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHover(null);
  };

  return (
    <li key={item.id} style={{ marginBottom: "5px" }}>
      <div
        style={{
          paddingLeft: `${depth * 20}px`,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={item.url || ""}
          style={{ paddingRight: "5px" }}
        >
          {item.label}
        </NavLink>
        {item.children && (
          <div
            style={{
              display: isHovered ? "block" : "none",
              paddingLeft: `${depth * 20}px`,
            }}
          >
            <MenuList items={item.children} depth={depth + 1} />
          </div>
        )}
      </div>
    </li>
  );
};

interface MenuListProps {
  items: MenuItem[];
  depth?: number;
}

const MenuList: React.FC<MenuListProps> = ({ items, depth = 0 }) => {
  const [, setActiveParent] = useState<number | null>(null);

  const handleHover = (parentId: number | null) => {
    setActiveParent(parentId);
  };

  return (
    <ul style={{ listStyleType: "none" }}>
      {items.map((item) => (
        <MenuItemComponent
          key={item.id}
          item={item}
          depth={depth}
          onHover={handleHover}
        />
      ))}
    </ul>
  );
};

export default MenuList;
