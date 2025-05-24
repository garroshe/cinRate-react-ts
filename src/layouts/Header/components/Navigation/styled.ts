import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const StyledNav = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: none;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: none;
    }
`

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #ffffff;
    padding: 8px 12px;
    border-radius: 6px;
    transition: 0.3s;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;

  &.active {
    color: #a14de2;
  }

  &:hover {
    color: #a14de2;
  }
`;