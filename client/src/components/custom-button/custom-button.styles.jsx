import styled,{ css } from 'styled-components'

const buttonStyles = css`
    background-color: black;
    color: white;
    border:none;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
`;

const invertedStyles = css`
    background-color: black;
    color: white;
    border: 1px solid black;

    &:hover{
    background-color: white;
    color: black;
    border: none;
    }
`;

const googleSignInStyles = css`
    background:#4285f4;
    color:white;
    border:none;

    &:hover{
      background:white;
      color:#4285f4;  
      border:1px solid #4285f4;
    }
`;

const largeButtonStyles = css`
    min-width: 350px;
`

const regularButtonStyles = css`
    min-width: 150px;
`

const getButtonStyles = props => {
    if(props.isGoogleSignIn){
        return googleSignInStyles;
    }

    return props.inverted ? invertedStyles : buttonStyles;
}

const getButtonSize = props => {
    if(props.large){
        return largeButtonStyles
    }

    return regularButtonStyles
}

export const CustomButtonContainer = styled.button`
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    cursor: pointer;
    display: flex;
    justify-content: center;

    ${getButtonStyles}
    ${getButtonSize}
`;

