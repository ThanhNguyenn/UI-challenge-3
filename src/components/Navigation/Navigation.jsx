import React from 'react'
import './Navigation_Styled.css'
import NavigationItem from '../NavigationItem/NavigationItem'

function Navigation() {
    const navItems = [
        {
            itemName: "Frequently asked questions",
            iconName: "info",
        }, 
        {
            itemName: "Payment and invoice",
            iconName: "payment",
        }, 
        {
            itemName: "Deliveries",
            iconName: "delivery",
        }, 
        {
            itemName:"Return & Crediting",
            iconName: "return",
        },
        {
            itemName:"Complaint",
            iconName: "complaint",
        },
    ]
    return (
        <div className="navigation--container">
            {navItems.map(item => <NavigationItem name={item.itemName} nameIcon={item.iconName}/>)}
        </div>
    )
}

export default Navigation
