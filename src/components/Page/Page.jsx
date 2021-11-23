import React from 'react'
import Navigation from '../Navigation/Navigation'
import Faq from '../FAQ/Faq'
import './Page_Styled.css'

function Page() {
    return (
        <div className="page--container">
            <Navigation />
            <Faq />
        </div>
    )
}

export default Page
