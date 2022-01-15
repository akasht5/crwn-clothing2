import React from 'react'

import Directory from '../../components/directory/directory.component'
import HeroImage from '../../components/hero-image/hero-image.component'
import { HomePageContainer } from './homepage.styles'

const HomePage= () => {
    return (
        <>
        <HeroImage />
        <HomePageContainer>
            <Directory />
        </HomePageContainer>
        </>
    )
}

export default HomePage
 