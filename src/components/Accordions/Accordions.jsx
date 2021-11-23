import React from 'react'
import Accordion from '../Accordion/Accordion'
import './Accordions_Styled.css'


function Accordions() {
    const items = [
        {
            "title": "What payment solutions can I choose from?",
            "content": "choosing a payment method that your customers prefer will make them more likely to pay on time. The most common payment method is through electronic credit and debit cards. Use of Paywave and other tap-and-go accounts has grown quickly. Most in-store credit card transactions are now contactless."
        },
        {
            "title": "How does payment via Walley Checkout work?",
            "content": "Walley presents some information to you as soon as you are identified. The information you need to specify to obtain identification may vary between different orders and customers. Credit information is not always taken, only if necessary, depending on the payment option you have chosen. The credit information taken by Walley is a so-called micro-information, which means that it will not be visible to banks or other creditors, and does not adversely affect your creditworthiness."
        },
        {
            "title": "How is my invoice sent via Walley Checkout?",
            "content": "Together with Walley, we offer payments with Walley Checkout. Walley Checkout gives you all the desired payment methods in one solution – choose between Swish, Vipps, Mobilepay, direct bank- and card payment, invoice or payment in instalments (payment options may vary from time to time). Walley Checkout lets you decide your preferred payment method before confirming the purchase."
        }
    ]

    
    return (
        <div className="accordions--container">
            {items.map(item => <Accordion title={item.title} content={item.content}/>)}
        </div>
    )
}

export default Accordions
