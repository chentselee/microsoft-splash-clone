import React, { useState } from 'react';
import Dropdown, { DropdownProps } from './Dropdown';

const mainLinks = ['Microsoft 365', 'Office', 'Windows', 'Surface', 'Xbox', '支援'];
const linkGroups = ['軟體', '個人電腦和設備', '娛樂', '商務適用', 'Developer & IT', '其它'];
const subLinks = ['item1', 'item2', 'item3', 'item4', 'item5'];

const Navbar = () => {
    const [dropdownIsOpen, setDropdownIsOpen] = useState(false);
    const dropdownProps: DropdownProps = {
        data: {
            items: mainLinks.map(link => { return { name: link, href: '#!' } }),
            itemGroups: linkGroups.map(group => { return { name: group, items: subLinks.map(link => { return { name: link, href: '#!' } }) } }),
            onClose: () => setDropdownIsOpen(false),
        }
    };
    return (
        <nav className="navbar">
            <ul className="navbar-container">
                <li className="navbar-left">
                    <ul className="navbar-desktop">
                        <li className="navbar-desktop-main-links">
                            <ul>
                                {mainLinks.map(link => <li><a href="#!">{link}</a></li>)}
                            </ul>
                        </li>
                        <li className={`navbar-desktop-dropdown${dropdownIsOpen ? ' opened' : ''}`} onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                            <a href="#!">所有 Microsoft</a>
                        </li>
                    </ul>
                    <ul className="navbar-left-icons">
                        <li className="navbar-icon navbar-menu" onClick={() => setDropdownIsOpen(!dropdownIsOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </li>
                        <li className="navbar-icon navbar-search">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
                        </li>
                    </ul>
                </li>
                {dropdownIsOpen ? <Dropdown data={dropdownProps.data} /> : ''}
                <li className="navbar-logo">
                    <span>Logo</span>
                </li>
                <li className="navbar-right">
                    <ul>
                        <li className="navbar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>
                        </li>
                        <li className="navbar-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z"/></svg>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
