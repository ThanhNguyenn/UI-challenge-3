import React, {useState} from 'react'
import './Accordion_Styled.css'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";



function Accordion({title, content}) {
    const [change, setChange] = useState(false);

    const handleClick = () => {
        setChange(!change);
    }

    return (
        <div className="accordion--container" onClick={handleClick}>
            <div className="accordion--title" style={{ borderBottom: !change ? "0.5px solid #b4b4bc" : ""}}>
                <div>{title}</div>
                <FiChevronDown size="1.4rem"/>
            </div>
            {change && <div className="accordion--content">
                {content}
            </div>}
        </div>
    )
}

export default Accordion
