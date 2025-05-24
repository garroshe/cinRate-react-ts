import {StyledHeader} from "./styled";

import { Logo} from "./components/Logo/Logo";
import {Navigation} from "./components/Navigation/Navigation";
import {Language} from "./components/Language/Language";
import {WatchList} from "../../features/watcingList/WatchingList";
import {Search} from "./components/Search/Search";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Navigation/>
            <WatchList/>
            <Search/>
            <Language/>
        </StyledHeader>
    )
}