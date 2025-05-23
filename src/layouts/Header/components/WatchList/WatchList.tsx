import {StyledWatchListImg, StyledWatchListText, StyledWatchListWrapper} from "./styled";
import WatchListSave from '../../../../assets/img/WatchListSave.png';
import {useTranslation} from "react-i18next";

export const WatchList = () => {
    const {t} = useTranslation();
    return (
        <StyledWatchListWrapper>
            <StyledWatchListText>{t('header.watchlist')}</StyledWatchListText>
            <StyledWatchListImg src={WatchListSave} alt="Save Icon" />
        </StyledWatchListWrapper>
    )
}