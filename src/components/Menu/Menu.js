import React from 'react';
import './Menu.css';
import {MenuList} from './MenuList';
import MenuItem from '../MenuItem/MenuItem';


function Menu() {
    return (
        <div className="menu">
            <h1 className="menuTitle">Our Menu</h1>
            <div className="menuList">
                {
                    MenuList.map((menuItem, key) => {
                        return (
                            <MenuItem 
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                        ></MenuItem>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Menu
