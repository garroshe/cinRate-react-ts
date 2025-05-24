import styled from "styled-components";
import type {ImgProps} from "../../../../../../types/types.ts";

export const StyledImg = styled.img<ImgProps>`
    width: 250px;
    height: 130px;
    object-fit: cover;
    border-radius: 4px;
    border: 1px solid #fff;
`

export const StyledLabel = styled.h2`
    font-size: 14px;
    font-weight: bold;
    color: white;
`

export const StyledRating = styled.span`
    font-size: 12px;
    color: #aaa;
`