import styled from 'styled-components'

export const HeroImageContainer = styled.div`
    width: 100vw;
    height: 400px;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: -60px;
    background-image: url('https://www.apetogentleman.com/wp-content/uploads/2017/06/A-Days-March.jpg');
    background-repeat:no-repeat;
    background-size: cover;

    @media screen and (max-width:800px){
        &{
            width: auto;
            padding: 0 60px;
        }
    }
    
    `
    
    export const HeroContainer = styled.div`
    width:85%;
    height: 100%;
    margin:0 auto;
    margin-top: 70px;

    p{
    font-size: 47px;
    font-weight: 800px;
    padding-top: 100px;
    }
`