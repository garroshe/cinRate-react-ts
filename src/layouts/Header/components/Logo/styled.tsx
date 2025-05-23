import styled from "styled-components";

export const StyledLogo = styled.div`
    color: #a14de2;
    cursor: pointer;
    font-size: 42px;
    font-weight: 900;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        font-size: 30px;
        font-size: 20px;
    }

    @media (max-width: ${({theme}) => theme.breakpoints.mobile}) {
        font-size: 20px;
    }
`