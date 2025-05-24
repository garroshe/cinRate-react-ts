import styled from "styled-components";
import type {ImgProps} from "../../../../types/types.ts";

export const StyledWatchListImg = styled.img<ImgProps>`
    width: 25px;


    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        width: 20px;
    }
`;

export const StyledWatchListText = styled.div`
    color: #ffffff;
    font-size: 16px;
    font-weight: 700;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`