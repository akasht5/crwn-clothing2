import styled from 'styled-components'

export const SignInSignUpContainer = styled.div`
    width:850px;
    display: flex;
    justify-content:space-between;
    margin:30px auto;

    @media screen and (max-width:800px){
        display: grid;
        width:350px;
        margin:0 auto;
        margin-left:-10px;
        margin-bottom:100px;
    }
`;