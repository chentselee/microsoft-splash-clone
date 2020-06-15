import React, { useState } from "react";
import "./Dropdown.scss";

interface DropdownItemProps {
  name: string;
  href: string;
}

interface DropdownItemGroupProps {
  name: string;
  items: Array<DropdownItemProps>;
}

export interface DropdownProps {
  items: Array<DropdownItemProps>;
  itemGroups?: Array<DropdownItemGroupProps>;
  onClose?(): void;
}

const Dropdown: React.FC<DropdownProps> = ({ items, itemGroups, onClose }) => {
  const DropdownItemGroup: React.FC<DropdownItemGroupProps> = ({
    items,
    name,
  }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
      <li
        className={`dropdown-item dropdown-item-group${
          isOpen ? " opened" : ""
        }`}
      >
        <span className="dropdown-item-link" onClick={() => setIsOpen(!isOpen)}>
          {name}
        </span>
        <ul className="dropdown-item-group-items">
          {items.map((subItem, index) => (
            <li key={index} className="dropdown-item-group-item">
              <a className="dropdown-item-link" href={subItem.href}>
                {subItem.name}
              </a>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  const DropdownItemGroupDesktop: React.FC<DropdownItemGroupProps> = ({
    items,
    name,
  }) => {
    return (
      <li className="dropdown-item-group">
        <span className="dropdown-item-group-title">{name}</span>
        <ul className="dropdown-item-group-items">
          {items.map((item, index) => (
            <li className="dropdown-item-group-item">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </li>
    );
  };

  return (
    <>
      <ul className="dropdown">
        {items.map((item, index) => (
          <li
            key={index}
            className="dropdown-item"
            onClick={() => onClose && onClose()}
          >
            <a className="dropdown-item-link" href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
        {itemGroups?.map((item, index) => (
          <DropdownItemGroup key={index} {...item} />
        ))}
      </ul>
      <ul className="dropdown-desktop">
        <li className="dropdown-item-groups">
          {itemGroups?.map((item, index) => (
            <DropdownItemGroupDesktop key={index} {...item} />
          ))}
        </li>
        <li className="dropdown-item-map">
          <a href="#!">檢視網站地圖</a>
        </li>
      </ul>
    </>
  );
};

export default Dropdown;
