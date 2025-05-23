import {StyledLogo} from "./styled";
import {NavLink} from "react-router-dom";

export const Logo = () => {
    return (
        <NavLink style={{textDecoration: "none"}} to="/home">
            <StyledLogo>CinRate</StyledLogo>
        </NavLink>
    )
}