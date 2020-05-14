import React, { useState } from 'react'

interface DropdownItem {
    name: string;
    href: string;
}

interface DropdownItemGroups {
    name: string;
    items: Array<DropdownItem>;
}

export interface DropdownProps {
    data: {
        items: Array<DropdownItem>;
        itemGroups?: Array<DropdownItemGroups>;
        onClose(): void;
    }
}

const Dropdown = (props: DropdownProps) => {
    const { data: { items, itemGroups = null, onClose = null } } = props;

    const DropdownItemGroup = ({ data }: { data: DropdownItemGroups }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <li className={`dropdown-item-group${isOpen ? ' opened' : ''}`}>
                <span onClick={() => setIsOpen(!isOpen)}>{data.name}</span>
                <ul>
                    {data.items.map((subItem, index) => <li key={index} className="dropdown-item-group-item"><a href={subItem.href}>{subItem.name}</a></li>)}
                </ul>
            </li>
        );
    }

    const DropdownItemGroupDesktop = ({ data }: { data: DropdownItemGroups }) => {
        return (
            <li className="dropdown-item-group">
                <span>{data.name}</span>
                <ul>
                    {data.items.map((item, index) => <li><a href={item.href}>{item.name}</a></li>)}
                </ul>
            </li>
        );
    };

    return (
        <>
        <ul className="dropdown">
            {items.map((item, index) => <li key={index} className="dropdown-item" onClick={() => onClose && onClose()}><a href={item.href}>{item.name}</a></li>)}
            {itemGroups?.map((item, index) => <DropdownItemGroup key={index} data={item} />)}
        </ul>
        <ul className="dropdown-desktop">
            <li className="dropdown-item-groups">
                {itemGroups?.map((item, index) => <DropdownItemGroupDesktop key={index} data={item} />)}
            </li>
            <li className="dropdown-item-map"><a href="#!">檢視網站地圖 ></a></li>
        </ul>
        </>
    )
}

export default Dropdown
