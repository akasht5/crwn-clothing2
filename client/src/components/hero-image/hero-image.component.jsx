import React from 'react'

import CustomButton from '../custom-button/custom-button.component'
import { HeroImageContainer, HeroContainer } from './hero-image.styles'

const HeroImage = () => {
    return (
        <HeroImageContainer>
            <HeroContainer>
                <p>UPTO 40% OFF ON OUR NEW YEAR COLLECTION.</p>
                <CustomButton>Explore</CustomButton>
            </HeroContainer>
        </HeroImageContainer>
    )
}

export default HeroImage
