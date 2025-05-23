import styled from "styled-components";
import type {ImgProps} from "../../../../types/types";

export const StyledWatchListWrapper = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
`

export const StyledWatchListText = styled.div`
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`

export const StyledWatchListImg = styled.img<ImgProps>`
    width: 25px;


    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 20px;
    }
`