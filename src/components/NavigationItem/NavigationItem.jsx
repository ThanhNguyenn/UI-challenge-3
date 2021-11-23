import React from 'react'
import './NavigationItem_Styled.css'
import {FiAlertCircle, FiArchive, FiCreditCard,FiCornerLeftUp} from "react-icons/fi";
import { BsHeadset } from "react-icons/bs";
function NavigationItem({name, nameIcon}) {
    return (
        <p className="navigationItem--align-text">
           {nameIcon === "info" ? <FiAlertCircle size="1.5rem"/> : ""}
           {nameIcon === "delivery" ? <FiArchive size="1.5rem"/> : ""}
           {nameIcon === "payment" ? <FiCreditCard size="1.5rem"/> : ""}
           {nameIcon === "return" ? <FiCornerLeftUp size="1.5rem"/> : ""}
           {nameIcon === "complaint" ? <BsHeadset size="1.5rem" /> : ""}
           <span className="navitionItem--margin-right-icon">{name}</span>
        </p>
    )
}

export default NavigationItem
